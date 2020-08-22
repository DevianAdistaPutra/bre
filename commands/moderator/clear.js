const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
  //..clear 15
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("oof.");
  if(!args[0]) return message.channel.send("oof.");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Chat Di Bersihkan ${args[0]}`).then(msg => msg.delete(100));
    message.delete()
  })
    }