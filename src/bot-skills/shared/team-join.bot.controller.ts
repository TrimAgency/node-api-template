import * as Botkit from "botkit";

// Welcome message sent to new users so they can see the Bot
export const teamJoin = (botConfigController: Botkit.SlackController) => {
  botConfigController.on("team_join", (bot , message: any) => {
    // This message can be customized to say whatever you would like to a new user
    bot.startPrivateConversation({user: message.user.id}, (err, convo) => {
      if (err) { console.log("Could not send message to new user", err); }

      convo.say(`Welcome <@${message.user.id}>!`);
    });
  });
};