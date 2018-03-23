# Node API Template / Botkit starter

Express API written in Typescript

Out of box features include:
- [slack botkit integration](https://trim.quip.com/HcHWAZmnhjp9)
- User model with login / signup endpoint 
- JWT authentication 
- password encryption using bcrypt

## Prerequisites

Must have Node LTS version AND NPM or Yarn installed.

* [TypeScript](https://www.typescriptlang.org/index.html)
* [Install Yarn](https://yarnpkg.com/en/docs/install)
* [Install Node and NPM](https://nodejs.org/en/)
* [Ngrok](https://ngrok.com/)

### First Time Use

After cloning the project, in your terminal: `npm install`

After installing dependencies, install `ts-node` globally with
```
npm install ts-node -g
```

## Development server

From your terminal:
```
nodemon
```
This will run the typscript compiler and your server, autoupdating as files are changes.

To run the server in debug mode
```
npm run watch-node
```
**this does not watch and recompile your file**
![Screenshot](https://github.com/TrimAgency/node-api-template/blob/master/github/devtools-screenshot.png)

Copy the chrome dev tools link and paste into your browser for debugging.

## Build
From your terminal:
```
npm run build
```

Compiled files are located in `/dist` folder.  Source maps included as well.

## Running tests
From your terminal:
```
npm run test
```

## Bot Development

**NOTE** The information below is a starting point for bot development. Read more about it on our [Slack Bot development quip doc](https://trim.quip.com/2pQzAhCWdCaO).

### Sandbox

The development sandbox for our Slack apps is [gp-slackbot-testing.slack.com](https://gp-slackbot-testing.slack.com/).

* See the [Slack app quip doc](https://trim.quip.com/HcHWAZmnhjp9) for the link to invite yourself to the workspace.
* To set yourself up as a workspace admin, ask another team member who already has admin status.

### Slack Application Setup

After grabbing a copy of the node starter template for your bot, you will need to create a slack app.

* Read more about creating a slack app on our [Slack App quip doc](https://trim.quip.com/HcHWAZmnhjp9).
* Read more about creating a slack app in the [Slack developer portal](https://api.slack.com/).
* To allow other devs to see the slack app configuration on [https://api.slack.com/apps](https://api.slack.com/apps) ask the creator of the app or team member to add you as a collaborator.

### Tunnel to Localhost
* Tunneling localhost is needed for Slack to send events to your bot.
* Using our basic ngrok team plan, you can use the reserved address (**gp-app-bot.ngrok.io**) to tunnel localhost. 
  * If our reserved address (**gp-app-bot.ngrok.io**) is in use, a subdomain can be setup that points to the tunnel in an `ngrok.yml` file on your computer.
  * Read more about setting up an `ngrok.yml` file and HTTP Tunnels on [Ngrok](https://ngrok.com/docs). 

To use a different subdomain on the same gp-app-bot tunnel:
```
ngrok http --subdomain=coffee-bot 5000
``` 

This creates the address **https://coffee-bot.ngrok.io** that tunnels to port 5000. This new address will need to be updated in the Slack app in order to receive events. 

### First Time Use

After logging in to the our development sandbox account in the browser, and configuring your app, you'll need to install it to the workspace. 

Once your server is running visit `YOUR-SUBDOMAIN.ngrok.io/bot/login` to install the bot. The sandbox's team information will be saved to the mongo database, and the bot will recognize which slack team messages are coming from. 

Your bot should introduce itself to you in a direct message if successful. 

## Heroku Deployment

* This starter app is Heroku deployment ready. Build environments are determined
  by the `NODE_ENV` system environment variable.  As such, please ensure that
  you set the appropriate Config Vars for your staging and production
  environments.
* Compiled files will be served from `dist/` folder

