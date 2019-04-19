require('dotenv').config()

const Discord = require('discord.js')
const chalk = require('chalk')

const database = require('./utils/database')
const { singleLine } = require('./utils')

const { DISCORD_BOT_TOKEN } = process.env
console.log(DISCORD_BOT_TOKEN)
const SITE = 'http://citi.org.br/library'

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

const DIREX_ROLE_ID = '284477588720844801'

const deleteLibraryItem = (message) => {
  const learningId = message.content.split(' ')[1]
  console.log('Learning id', learningId)
  const messages = {
    notFound: `
      Não foi encontrado um learning com id \`${learningId}\`, certifique-se
      que você digitou corretamente. :ctg:
    `,
    success: 'Learning apagado com sucesso! :wastebasket:'
  }
  const query = database.collection('library').doc(learningId)
  query
    .get()
    .then((doc) => {
      if (!doc.exists) {
        message.channel.send(singleLine(messages.notFound))
        return false
      }
      const { authorId } = doc.data()
      // Pessoa que quer deletar o learning não é o criador
      // OU não é da diretoria executiva (definido em DIREX_ROLE_ID)
      if (message.author.id !== authorId || message.member.roles.has(DIREX_ROLE_ID)) {
        database
          .collection('authors')
          .doc(authorId)
          .get()
          .then((doc) => doc.data())
          .then((result) => {
            message.channel.send(
              singleLine(
                `Você não tem permissão para apagar este learning porque não é o autor
              (<@${result.id}>) ou não faz parte do grupo da diretoria. Entre em contato
              caso isto não deveria ter acontecido. :ctg:`
              )
            )
          })
        return false
      }
      database
        .collection('library')
        .doc(learningId)
        .delete()
      message.channel.send(messages.success)
    })
    .catch((error) => {
      message.channel.send('Erro ao tentar apagar:\n' + `\`\`\`${error}\`\`\``)
    })
}

const createLibraryItem = (message) => {
  const author = {
    id: message.author.id,
    avatarUrl: message.author.avatarURL,
    username: message.author.username
  }
  const [body, tags] = parseMessage(message.content)
  database
    .collection('authors')
    .doc(author.id)
    .set({
      username: author.username,
      avatar: author.avatarUrl.replace('2048', '128'),
      id: author.id
    })
    .then(() => console.log(chalk.green('Autor criado!')))
    .catch((error) => console.log(chalk.red('Erro', error)))
  const timestamp = message.createdTimestamp
    .toString()
    .substring(0, message.createdTimestamp.toString().length - 3)
  database
    .collection('library')
    .add({
      authorId: author.id,
      content: body,
      tags: tags.join(','),
      timestamp
    })
    .then((ref) => {
      console.log(chalk.green('Item criado na library!'))
      const confirmationMsg = `.
      Seu post foi criado com sucesso! :white_check_mark:
      Para acessá-lo, clique aqui: <${SITE}/learning/${ref.id}>
      `
      message.channel.send(confirmationMsg)
    })
    .catch((error) => chalk.red('Erro', error))
}

// Command functions
const parseMessage = (message) => {
  const splitMessage = message.split(' ')
  const startIndex = splitMessage.indexOf(splitMessage.find((i) => i.startsWith('[')))
  const endIndex = splitMessage.indexOf(splitMessage.find((i) => i.endsWith(']')))
  const text =
    startIndex === -1
      ? splitMessage.slice(1, splitMessage.length).join(' ')
      : splitMessage.slice(1, startIndex).join(' ')
  const tagsList =
    startIndex !== 0 && endIndex !== 0 ? splitMessage.slice(startIndex, endIndex + 1).join(' ') : []
  const tags = tagsList.replace(/(\[|\]|\s)+/g, '').split(',')
  return [text, tags]
}

const handleLibraryCommand = (message) => {
  const split = message.content.split(' ')

  // Checking if there are tags
  const hasLeftTag = !!split.find((i) => i.startsWith('['))
  const hasRightTag = !!split.find((i) => i.endsWith(']'))
  if ((hasLeftTag && !hasRightTag) || (!hasLeftTag && hasRightTag)) {
    return message.channel.send(
      `Você provavelmente tentou usar tags, mas não as colocou no
      formato certo. Tenha certeza de usar o formato \`[tag1,tag2]\``
    )
  }

  if (split.length === 1) {
    return message.channel.send(
      singleLine(`
        Ajuda: Você pode utilizar o comando \`/library Alguma coisa [tag1, tag2]\` para gerar
        algum conhecimento novo. Tags são opcionais!`)
    )
  }

  return createLibraryItem(message)
}

client.on('message', (msg) => {
  if (msg.content.startsWith('/')) {
    const firstArg = msg.content.split(' ')[0]
    const command = firstArg.substring(1, firstArg.length)

    switch (command) {
      case 'library':
        return handleLibraryCommand(msg)
      case 'libraryapagar':
        return deleteLibraryItem(msg)
      default:
        break
    }
  }
})

client.login(DISCORD_BOT_TOKEN)
