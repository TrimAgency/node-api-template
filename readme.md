# Node API Template / Botkit starter

Express API written in Typescript

Out of box features include:
- slack botkit integration(https://trim.quip.com/HcHWAZmnhjp9)
- User model with login / signup endpoint 
- JWT authentication 
- password encryption using bcrypt

## Prerequisites

Must have Node LTS version AND NPM or Yarn installed.

* [Install Yarn](https://yarnpkg.com/en/docs/install)
* [Install Node and NPM](https://nodejs.org/en/)


## Development server

From your terminal:
```
npm run watch-debug
```
This will run the typscript compiler and your server, autoupdating as files are changes.
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

## Heroku Deployment

* This starter app is Heroku deployment ready. Build environments are determined
  by the `NODE_ENV` system environment variable.  As such, please ensure that
  you set the appropriate Config Vars for your staging and production
  environments.
* compiled files will be served from `dist/` folder

