module.exports = controller => {
  controller.hears(['^hello','^hi','^hey','^howdy','^yo','^hola'], 'direct_message,direct_mention', 
      (bot, message) => {
          bot.reply(message, `Hi <@${message.user}>! 😄`);
  });

  controller.hears(['^thanks','^thank you','^gracias'], 'direct_message,direct_mention', 
      (bot, message) => {
          bot.reply(message, 'You\'re welcome! ✌️');
  });
};
