# Node API Template / Botkit starter

Express API written in Typescript

Out of box features include:

- [Slack botkit integration](https://trim.quip.com/HcHWAZmnhjp9)
- User model with login / signup endpoint
- JWT authentication
- password encryption using bcrypt

## Prerequisites

Must have Node LTS version and NPM installed.

- [TypeScript](https://www.typescriptlang.org/index.html)
- [Install Node and NPM](https://nodejs.org/en/)
- [Install MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- [Ngrok](https://ngrok.com/)

# First time use:

After cloning the project, in your terminal: `npm install`

After installing dependencies, install `ts-node` globally with

```
npm install ts-node -g
```

At this time the Coffee Bot is in the process of having its dependencies updated. As there is no docker container yet for development, you'll need a node version manager (such as NVM) to switch to node version specified in the `package.json` file. You'll also need `NODE_ENV=development` in your .profile or .zshrc file.

As noted above, you will also need mongo installed. Once the server is running, and the tunnel is up (see below), you'll need to visit `SUBDOMAIN.ngrok.io/bot/login`. The sandbox's team information will be saved to the local mongo database, and the bot will recognize which slack team messages are coming from.

The bot should introduce itself to you in a direct message if this is successful.

## Development Server

From your terminal:

```
npm run watch-node
```

This will run the typscript compiler and your server, autoupdating as files are changes.

To run the server in debug mode:

```
npm run serve-debug
```

**this does not watch and recompile your file**
![Screenshot](https://github.com/TrimAgency/node-api-template/blob/master/github/devtools-screenshot.png)

Copy the chrome dev tools link and paste into your browser for debugging.

**this does not watch and recompile your file**
![Screenshot](https://github.com/TrimAgency/node-api-template/blob/master/github/devtools-screenshot.png)

Copy the chrome dev tools link and paste into your browser for debugging.

## Build

From your terminal:

```
npm run build
```

Compiled files are located in `/dist` folder. Source maps included as well.

## Running Tests

From your terminal:

```
npm run test
```

## Bot Development

**NOTE** The information below is a starting point for bot development.

Read more about it on our [Slack Bot development quip doc](https://trim.quip.com/2pQzAhCWdCaO).
See all the Slack apps and configurations that you have access to here: [https://api.slack.com/apps](https://api.slack.com/apps)

### Slack Sandbox

The development sandbox for our Slack apps is [gp-slackbot-testing.slack.com](https://gp-slackbot-testing.slack.com/).

- See the [Slack app quip doc](https://trim.quip.com/HcHWAZmnhjp9) for the link to invite yourself to the workspace.
- To set yourself up as a workspace admin, ask another team member who already has admin status.

### Tunnel to Localhost

Tunneling localhost is needed for the slack app to send events to your bot. Using our basic ngrok team plan, you can use the reserved address (**coffee-bot.ngrok.io**) to tunnel localhost.

If our reserved address (**coffee-bot.ngrok.io**) is in use, due to someone developing on the same bot, you can use the alt GP bot. More info below.

Another subdomain can be setup that points to the tunnel in an `ngrok.yml` file on your computer. Read more about setting up an `ngrok.yml` file and HTTP Tunnels on [Ngrok](https://ngrok.com/docs).

To start tunneling:

```
ngrok http --subdomain=coffee-bot 4000
```

This creates the address **LINK NEEDED HERE** that tunnels to port 4000.

### Two Developers Working on the Same Bot

If two developers are working on the same bot, a second bot `Alt GP Bot (Dev)` is available for your use. If multiple developers are on the same bot, a new Slack app will need to be configured, with an ngrok address setup so that app can receive events.

Setting up an ngrok address means you need start the server with the newest tokens and app credentials, so that Slack can verify the dev server is able to respond back correctly in the Events Subscription section of the Slack app configuration.

The alt bot is already installed in the workspace and configured for your use. To use it, you can tunnel with the following address and switch the env credentials to use the alt bot credentials that are commented out, instead of the main dev credentials.

To start tunneling:

```
ngrok http --subdomain=gp-bot-two 4000
```

This creates the address **https://gp-bot-two.ngrok.io** that tunnels to port 4000.

### Slack Application Setup

A slack app has already been created for this bot. It can be found [here](https://api.slack.com/apps/A83TX9R70).

To setup a new bot, you'll need to login to the development sandbox account in the browser, and configure the new slack app.

You'll need to update the ENV file (here and in Asana) with the following credentials from the slack app portal:

```
BOT_ID - Find it by visiting the [User list](https://api.slack.com/methods/users.list/test) and using the xoxb token to run a request
SLACK_BOT_OAUTH_TOKEN - Always starts with xoxb
SLACK_CLIENT_ID - Always has a period separate two long sets of integers
SLACK_CLIENT_SECRET -  Alphanumeric hash
SLACK_USER_OAUTH_TOKEN -  Always starts with xoxp
SLACK_VERIFICATION_TOKEN - Alphanumeric hash
```

Once your server is running visit `SUBDOMAIN.ngrok.io/bot/login` to install the bot. The sandbox's team information will be saved to the local mongo database, and the bot will recognize which slack team messages are coming from.

Your bot should introduce itself to you in a direct message if this is successful.

- Read more about creating a slack app on our [Slack App quip doc](https://trim.quip.com/HcHWAZmnhjp9).
- Read more about creating a slack app in the [Slack developer portal](https://api.slack.com/).
- To allow other devs to see the slack app configuration on [https://api.slack.com/apps](https://api.slack.com/apps) ask a team member to add you as a collaborator.

## Heroku Deployment

- This starter app is Heroku deployment ready. Build environments are determined
  by the `NODE_ENV` system environment variable. As such, please ensure that
  you set the appropriate Config Vars for your staging and production
  environments.
- Compiled files will be served from `dist/` folder
