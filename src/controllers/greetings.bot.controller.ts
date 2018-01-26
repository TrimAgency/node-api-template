import * as Botkit from "botkit";

export const greeting = (botConfigController: Botkit.SlackController) => {
    botConfigController.hears(["^hello", "^hi", "^hey", "^howdy", "^yo", "^hola"], "direct_message,direct_mention",
      (bot, message) => {
          bot.reply(message, `Hi <@${message.user}>! 😄`);
  });

  botConfigController.hears(["^thanks", "^thank you", "^gracias"], "direct_message,direct_mention",
      (bot, message) => {
          bot.reply(message, "You're welcome! ✌️");
  });
};
