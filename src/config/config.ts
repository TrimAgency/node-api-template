import * as dotenv from "dotenv";


const env = process.env.NODE_ENV;

// Attach .env variables to process.env
if (env !== "production") {
  dotenv.config();
}

interface Config {
  [key: string]: Environment;
}

interface Environment {
  app: { [key: string]: string | number };
  db: { [key: string]: string | number };
  bot: { [key: string]: string };
}


const development = {
 app: {
   port: parseInt(process.env.DEV_APP_PORT) || 4000,
   mandrill: process.env.MANDRILL
 },
 db: {
   name: process.env.DEV_DB_NAME,
   connect: process.env.MONGODB_URI
 },
 bot: {
  slackClientId: process.env.SLACK_CLIENT_ID,
  slackClientSecret: process.env.SLACK_CLIENT_SECRET,
  slackVerificationToken: process.env.SLACK_VERIFICATION_TOKEN
 }
};
const test = {
 app: {
   port: parseInt(process.env.TEST_APP_PORT) || 5000,
   mandrill: process.env.MANDRILL
 },
 db: {
   name: process.env.TEST_DB_NAME,
   connect: process.env.MONGODB_URI_TEST
 },
 bot: {
  slackClientId: process.env.SLACK_CLIENT_ID,
  slackClientSecret: process.env.SLACK_CLIENT_SECRET,
  slackVerificationToken: process.env.SLACK_VERIFICATION_TOKEN
 }
};
const production = {
  app: {
    port: parseInt(process.env.PORT) || 8080,
    mandrill: process.env.MANDRILL
  },
  db: {
    name: process.env.PROD_DB_NAME,
    connect: process.env.MONGODB_URI
  },
  bot: {
    slackClientId: process.env.SLACK_CLIENT_ID,
    slackClientSecret: process.env.SLACK_CLIENT_SECRET,
    slackVerificationToken: process.env.SLACK_VERIFICATION_TOKEN
  }
};

export const config: Config = {
 development,
 test,
 production
};
