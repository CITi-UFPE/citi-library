const Discord = require('discord.js')
const firebase = require('firebase')
const client = new Discord.Client()

// Logging
const chalk = require('chalk')

const SITE = 'http://citi.org.br/library'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// Firestore functions

// SEGURANÇA PRA QUE NÉ? ¯\_(ツ)_/¯
var config = {
  apiKey: 'AIzaSyDS-mruqPmaOdqMuBhr4V36t6Hu8fmjwjM',
  authDomain: 'citi-library.firebaseapp.com',
  databaseURL: 'https://citi-library.firebaseio.com',
  projectId: 'citi-library',
  storageBucket: 'citi-library.appspot.com',
  messagingSenderId: '682974949035'
}
firebase.initializeApp(config)
const database = firebase.firestore()
database.settings({ timestampsInSnapshots: true })

const createLibraryItem = message => {
  const author = {
    id: message.author.id,
    avatarUrl: message.author.avatarURL,
    username: message.author.username
  }
  const [body, tags] = parseMessage(message.content)
  database.collection('authors').doc(author.id).set({
    username: author.username,
    avatar: author.avatarUrl,
    id: author.id
  })
    .then(() => console.log(chalk.green('Autor criado!')))
    .catch(error => console.log(chalk.red('Erro', error)))
  const timestamp = (
    message.createdTimestamp
      .toString()
      .substring(0, message.createdTimestamp.toString().length - 3)
  )
  database.collection('library').add({
    authorId: author.id,
    content: body,
    tags: tags.join(','),
    timestamp
  })
    .then(ref => {
      console.log(chalk.green('Item criado na library!'))
      const confirmationMsg = `.
      Seu post foi criado com sucesso! :white_check_mark:
      Para acessá-lo, clique aqui: <${SITE}/learning/${ref.id}>
      `
      message.channel.send(confirmationMsg)
    })
    .catch(error => chalk.red('Erro', error))
}

// Command functions
const parseMessage = message => {
  const splitMessage = message.split(' ')
  const startIndex = splitMessage.indexOf(splitMessage.find(i => i.startsWith('[')))
  const endIndex = splitMessage.indexOf(splitMessage.find(i => i.endsWith(']')))
  const text = (
    startIndex === -1
      ? splitMessage.slice(1, splitMessage.length).join(' ')
      : splitMessage.slice(1, startIndex).join(' ')
  )
  const tagsList = (
    (startIndex !== 0 && endIndex !== 0)
      ? splitMessage.slice(startIndex, endIndex + 1).join(' ')
      : []
  )
  const tags = tagsList.replace(/(\[|\]|\s)+/g, '').split(',')
  return [text, tags]
}

const handleLibraryCommand = message => {
  const split = message.content.split(' ')
  // Checking if there are tags
  const hasLeftTag = !!split.find(i => i.startsWith('['))
  const hasRightTag = !!split.find(i => i.endsWith(']'))
  if ((hasLeftTag && !hasRightTag) || (!hasLeftTag && hasRightTag)) {
    return message.channel.send(
      `Você provavelmente tentou usar tags, mas não as colocou no
      formato certo. Tenha certeza de usar o formato \`[tag1,tag2]\``
    )
  }
  return createLibraryItem(message)
}

client.on('message', msg => {
  if (msg.content.startsWith('/')) {
    const firstArg = msg.content.split(' ')[0]
    const command = firstArg.substring(1, firstArg.length)

    switch (command) {
      case 'library':
        return handleLibraryCommand(msg)
      default:
    }
  }
})

client.login('NDE0MjA3MTQyMjY3MDYwMjI0.DoIIpg.PMm8nP7VM6mU_7BTTkN4fomj6G8')
