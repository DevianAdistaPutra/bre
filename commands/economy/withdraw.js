const discord = require("discord.js");
const db = require("quick.db");
//off mo sholat jumat ..!
module.exports = {
    name: 'with',//di singkat
    description: 'With your money',
    category: "economy",
    run: (client, message, args) =>{
      const amount = args.join(" ")
      if (!amount) return message.reply(":x: | Missing amount!")
      
      let bal = db.get(`account.${message.author.id}.balance`)
      let bank = db.get(`banks.${message.author.id}.banks`)
      
      if (bank < amount) return message.reply(`:x: | your money on bank not enough to withdraw!`)
      db.subtract(`banks.${message.author.id}.banks`, amount)
      db.add(`account.${message.author.id}.balance`, amount)

      
      
      const embed = new discord.MessageEmbed()
      .setDescription(`
✅ Succesfuly withdraw ${amount} to your wallet!`)
      .setColor("RANDOM")
      .setTimestamp()
      
      message.channel.send(embed)
      
     
    } 
}