// Finalizes installation of bot by saving team information for use in message verification
module.exports = controller => {
    controller.on('oauth:success', (payload) => {
        console.log('Got a successful login!', payload);
        if (!payload.identity.team_id) {
          // TODO: Throw better type of error here?
          console.log('Error: received an oauth response without a team id', payload);
        }
        controller.storage.teams.get(payload.identity.team_id, (err, team) => {
            if (err) {
              // TODO: Throw better type of error here?
              console.log('Could not load team from storage system', payload.identity.team_id, err);
            }

            console.log("*** Team information***:", team);

            var new_team = false;
            if (!team) {
                team = {
                    slackId: payload.identity.team_id,
                    createdBy: payload.identity.user_id,
                    url: payload.identity.url,
                    name: payload.identity.team,
                };
                var new_team= true;
            }

            team.bot = {
                token: payload.bot.bot_access_token,
                user_id: payload.bot.bot_user_id,
                createdBy: payload.identity.user_id,
                app_token: payload.access_token,
            };

            var testbot = controller.spawn(team.bot);

            testbot.api.auth.test({}, (err, bot_auth) => {
                if (err) {
                  // TODO: Throw better type of error here?
                  console.log('Error: could not authenticate bot user', err);
                } else {
                    team.bot.name = bot_auth.user;
                    console.log("**TEST BOT NAME**", team.bot.name);

                    // This information is expect by Botkit
                    testbot.identity = bot_auth;
                    testbot.team_info = team;

                    console.log("**TEST BOT IDENTITY**", testbot.identity);
                    console.log("**TEST BOT TEAM INFO**", testbot.team_info);

                    // Comment from Botkit here: Replace this with your own database!
                    // TODO: Can this be changed out for our own database?
                    controller.storage.teams.save(team, (err, id) => {
                        console.log("**IS THIS A NEW TEAM THAT WE ARE SAVING?**", new_team);
                        if (err) {
                            // TODO: Throw better type of error here?
                            console.log('Error: could not save team record:', err);
                        } else {
                            if (new_team) {
                                console.log("**TEAM CREATED FOR THE NEW TEAM?**", new_team);
                                controller.trigger('create_team', [testbot, team]);
                            } else {
                                console.log("**DID WE UPDATE AN OLD TEAM?**");
                                controller.trigger('update_team', [testbot, team]);
                            }
                        }
                    });
                }
            });
        });
    });

    controller.on('create_team', (bot, team) => {
      // TODO: Should we chage the way we are sending these messages? 
      console.log("create_team event")
      console.log('Team created:', team);

        // Trigger an event that will cause this team to receive onboarding messages
        controller.trigger('onboard', [bot, team]);
    });

    controller.on('update_team', (bot, team) => {
        console.log('Team updated:', team);
    });
}
