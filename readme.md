# Node API Template / Botkit starter

Express API written in Typescript

Out of box features include:
- [slack botkit integration](https://trim.quip.com/HcHWAZmnhjp9)
- User model with login / signup endpoint 
- JWT authentication 
- password encryption using bcrypt

## Prerequisites

Must have Node LTS version AND NPM or Yarn installed.

* [Install Yarn](https://yarnpkg.com/en/docs/install)
* [Install Node and NPM](https://nodejs.org/en/)

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
** this does not watch and recompile your file**
![Screenshot](https://github.com/TrimAgency/node-api-template/blob/master/github/devtools-screenshot.png)

Copy the chrome dev tools link and paste into your browser for debugging.

## Build
From your terminal:
```
npm run build
```

Compiled files are located in /dist folder.  Source maps included as well.

## Running tests
From your terminal:
```
npm run test
```

## Bot Development

### Sandbox

The development sandbox for our Slack apps is [gp-slackbot-testing.slack.com](https://gp-slackbot-testing.slack.com/).

* See the [Slack app quip doc](https://trim.quip.com/HcHWAZmnhjp9) for the link to invite yourself to the workspace.
* To set yourself up as a workspace admin, ask another team member who already has admin status.

### Slack Application Setup

After grabbing a copy of the node starter template for your bot, you will need to create a
slack app.

* Read more about creating a slack app on our [Slack App quip doc](https://trim.quip.com/HcHWAZmnhjp9).
* Read more about creating a slack app in the [Slack developer portal](https://api.slack.com/).
* To allow other devs to see the slack app configuration on [https://api.slack.com/apps](https://api.slack.com/apps) ask the creator of the app to add you as a collaborator.

### Tunnel to Localhost
* Tunneling localhost is needed for the slack app to send events to your bot. 
* Use our basic ngrok plan and set up a subdomain for the project, this allows for you to start development quicker each time you work on the bot.
  * Example Subdomain (not currently on ngrok): **https://node-starter-template.ngrok.io**

### First Time Use

After logging in to the our development sandbox account in the browser, and configuring your app, you'll need to install it to the workspace. 

Once your server is running visit `YOUR-SUBDOMAIN.ngrok.io/bot/login` to install the bot. The sandbox's team information will be saved to the mongo database, and the bot will recognize which slack team messages are coming from. 

Your bot should introduce itself to you in a direct message if successful. 

## Heroku Deployment

* This starter app is Heroku deployment ready. Build environments are determined
  by the `NODE_ENV` system environment variable.  As such, please ensure that
  you set the appropriate Config Vars for your staging and production
  environments.
* compiled files will be served from `dist/` folder

