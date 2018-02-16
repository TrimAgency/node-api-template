import * as Botkit from "botkit";

// Onboarding message received after bot is successfully installed
export const onboarding = (botConfigController: Botkit.SlackController) => {
  botConfigController.on("onboard", (bot: any) => {
      console.log("Starting an onboarding experience!");

      bot.startPrivateConversation({user: bot.config.createdBy}, (err: Error, convo: any) => {
          if (err) {
              console.log(err);
          } else {
              convo.say("Hello! I am a bot that has just joined your workspace!");
          }
      });
  });
};
