# CITi Library

Resultado do que aprendemos no #library do Discord.

Este projeto utiliza:

- Firebase
- Discord.js
- create-react-app
- CSS modules
- Sass
- Redux
- Redux Thunk

## Desenvolvendo

1. `cp .env.example .env`
1. `npm install`
1. `npm run start` para iniciar o site
1. `npm run bot` para iniciar o bot

## Como o projeto é colocado no ar?

Se utiliza o [Buddy](https://buddy.works/) para colocar o projeto no ar (tanto o site quanto o bot). Ele é um aplicativo automatizador de tarefas (como fazer build, entrar no SSH e rodar comandos, etc.). As pipelines para ele já existem, mas você pode saber como funciona indo até a pasta `_buddy`, onde tem todos os passos.

Cada uma das duas pipelines fazem conexão com o SSH do CITi e a senha original foi omitida por razões óbvias.

### Status

| Bot                                                                                                                                                                                                                                                                                   | Site                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![buddy pipeline](https://app.buddy.works/vanessafreitasb/citi-library/pipelines/pipeline/152547/badge.svg?token=743e278b5a9f501cf4d88bd593dafe3c4663b937b24d8e63b77e6716bc58d082 'buddy pipeline')](https://app.buddy.works/vanessafreitasb/citi-library/pipelines/pipeline/152547) | [![buddy pipeline](https://app.buddy.works/vanessafreitasb/citi-library/pipelines/pipeline/152546/badge.svg?token=743e278b5a9f501cf4d88bd593dafe3c4663b937b24d8e63b77e6716bc58d082 'buddy pipeline')](https://app.buddy.works/vanessafreitasb/citi-library/pipelines/pipeline/152546) |

## Onde está cada coisa?

O bot da library não roda no mesmo arquivo que o bot do Joãozinho. O comando `/library` [é ignorado no Joãozinho](https://github.com/CITi-UFPE/discord-joaozinho/blob/master/bot.js#L53) para ser lidado com nosso outro bot.

Apesar disso, o bot da library está no mesmo diretório do Joãozinho no servidor (no webfaction: `webapps/discord_joaozinho`) e eles rodam em dois processos diferentes.

### Checando quais processos estão rodando

1. Se conecte no SSH
1. Vá até o diretório do discord_joaozinho: `cd ~/webapps/discord_joaozinho`
1. Como cada aplicação é isolada no Webfaction, você precisa exportar o diretório `bin` para poder chamar comandos como `npm` ou `node`.

   ```bash
   export PATH=$HOME/webapps/discord_joaozinho/bin:$PATH
   ```

1. Digite `forever list` e veja as aplicações rodando.

### Reiniciando o bot

1. Se conecte no SSh
1. Vá até o diretório do discord_joaozinho: `cd ~/webapps/discord_joaozinho`
1. Como cada aplicação é isolada no Webfaction, você precisa exportar o diretório `bin` para poder chamar comandos como `npm` ou `node`.

   ```bash
   export PATH=$HOME/webapps/discord_joaozinho/bin:$PATH
   ```

1. Digite `forever list` e veja quais aplicações estão rodando. Você pode pegar o caminho de cada log e digitar `vim caminho/do/log`
1. Para reiniciar, digite `forever restartall`

### Banco de dados

A título de informação, o banco de dados do bot da library (eu realmente deveria escolher um nome pra ele) é completamente independente do Joãozinho.

### Dando deploy no site

1. Baixe o site para seu computador
1. Rode `npm install`
1. Rode `npm run build` para gerar os arquivos
1. Digite `scp build/* citi@citi.org.br:webapps/discord_library` e insira a senha do SSH
1. Espere todos os arquivos serem transferidos
1. Logue-se no SSH, vá até o diretório `discord_library`
1. Digite `export PATH=$HOME/webapps/discord_library/bin:$PATH`
1. Digite `forever restart server.js`
1. Done! :sparkles:

### Dando deploy no bot

> É uma boa depois passar o bot pra o repositório do Joãozinho, que tem deploy automático.

1. Baixe o site para seu computador
1. Rode `npm install`
1. Modifique o que precisar no bot (e garanta que ele está funcionando com suas modificações)
1. Do diretório principal, digite `scp bot/index.js citi@citi.org.br:webapps/discord_joaozinho/library.js` e insira a senha do SSH
1. Espere tudo ser transferido
1. Logue no SSH, vá até o diretório `discord_joaozinho`
1. Digite `export PATH=$HOME/webapps/discord_joaozinho/bin:$PATH`
1. Digite `forever restartall`
1. Done! :sparkles:

### Rodando o bot localmente

1. Baixe o site para seu computador
1. Rode `npm install`
1. Use `nodemon bot/index.js` para rodar (toda vez que você atualizar algo no arquivo, o bot reiniciará)
