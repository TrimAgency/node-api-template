import * as Botkit from "botkit";
import { default as Team, TeamModel } from "../models/team.model";
import { config } from "../config/config";

// Finalize the bot installation with oauth
export const teamRegistration = (botConfigController: any) => {
  botConfigController.on("oauth:success", (payload: any) => {
    if (!payload.identity.team_id) {
      // Throw error here : Received an oauth response without a team id
      console.log("Received an oauth response without a team id");
    }

    botConfigController.storage.teams.get(payload.identity.team_id, (err: any, team: any) => {
      if (err) {
        // Throw error here : Could not load team from storage system
        console.log("Could not load team from storage system");
      }

      const newTeam = false;
      if (!team) {
        const team = {
          id: payload.identity.team_id,
          name: payload.identity.team,
          url: payload.identity.url,
          createdBy: payload.identity.user_id
        };
        const newTeam = true;
        console.log("**TEAM**", team);
        console.log("**NEW TEAM**", newTeam);
      }

      team.bot = {
        token: payload.bot.bot_access_token,
        userId: payload.bot.bot_user_id,
        createdBy: payload.identity.user_id,
        appToken: payload.access_token
      };

      const testBot = botConfigController.spawn(team.bot);

      testBot.api.auth.test({}, (err: any, botAuth: any) => {
        if (err) {
          // Throw error Could not authenticate bot user
          console.log("Could not authenticate bot user");
        } else {
          team.bot.name = botAuth.user;

          console.log("TEST BOT NAME", team.bot.name);

          // add in info that is expected by Botkit
          // Issue with the botkit declaration file and identity
          // testBot.identity = botAuth.user;
          // testBot.teamInfo = team;

          botConfigController.storage.teams.save(team, (err: any, id: any) => {
            if (err) {
              // Throw error Could not save team
              console.log("Could not save team");
            } else {
              // Issue with .trigger
              if (newTeam) {
                botConfigController.trigger("create_team", [testBot, team]);
              } else {
                botConfigController.trigger("update_team", [testBot, team]);
              }
              console.log("Team saved");
            }
          });
        }
      });


    });
  });

  // Issue with .trigger
  botConfigController.on("create_team", (bot: any, team: any) => {
    console.log("create_team event");

     // Trigger an event that will cause this team to receive onboarding messages
    botConfigController.trigger("onboard", [bot, team]);
  });

  botConfigController.on("update_team", (bot: any, team: any) => {
    console.log("create_team event");
  });
};