import * as Botkit from "botkit";

// Onboarding message received after bot is successfully installed
export const onboarding = (botConfigController: Botkit.SlackController) => {
  botConfigController.on("onboard", (bot: any) => {
      console.log("Starting an onboarding experience!");
      console.log("**Bot**", bot);
      // This message can be customized to share instructions for the team admin
      bot.startPrivateConversation({user: bot.config.createdBy}, (err: Error, convo: any) => {
        if (err) { console.log("Could not send onboarding message", err); }

        convo.say("Hello! I am a bot that has just joined your workspace!");
      });
  });
};
