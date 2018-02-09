// Initiate oauth for the bot and start installation process
module.exports = (webserver, controller) => {

    var handler = {
        login: (req, res) => {
            res.redirect(controller.getAuthorizeURL());
        },
        oauth: (req, res) => {
            var code = req.query.code;
            var state = req.query.state;

            // Creating an instance of the bot for the workspace
            var slackapi = controller.spawn({});

            var opts = {
                client_id: controller.config.clientId,
                client_secret: controller.config.clientSecret,
                code: code
            };

            slackapi.api.oauth.access(opts, (err, auth) => {

                if (err) {
                    debug('Error confirming oauth', err);
                    return res.redirect('/login_error.html');
                }

                var scopes = auth.scope.split(/\,/);

                // Tests that the access token from slack oauth is valid and pulls the teamId field
                slackapi.api.auth.test({token: auth.access_token}, (err, identity) => {

                    if (err) {
                        debug('Error fetching user identity', err);
                        return res.send('Error logging in with Slack');
                    }

                    auth.identity = identity;
                    controller.trigger('oauth:success', [auth]);

                    res.cookie('team_id', auth.team_id);
                    res.cookie('bot_user_id', auth.bot.bot_user_id);
                    res.redirect(auth.identity.url);

                });


            });
        }
    }

    return handler;
}
