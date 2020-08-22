
const discord = require("discord.js");
const db = require("quick.db");
//off mo sholat jumat ..!
module.exports = {
    name: 'bal',//di singkat
    description: 'Check your money',
    category: "economy",
    run: (client, message, args) =>{
      
      
      let user = message.mentions.users.first() || message.author;
      if (user.bot) return message.reply(":x: | bot don't have money")
      

      let bal = db.get(`account.${user.id}.balance`)
      if (bal === null) bal = 0;
      
      let balbank = db.get(`banks.${user.id}.banks`)
      if (balbank === null) balbank = 0;
      
      const embed = new discord.MessageEmbed()
      .setColor("BLUE")
      .setTimestamp()
      .setAuthor(user.username + '', user.displayAvatarURL())
      .addField("Balance:", `💸${bal}`, true)
      .addField("Bank:", `💸${balbank}`, true)
      .setColor("RANDOM")
      
      message.channel.send(embed)
    }
}