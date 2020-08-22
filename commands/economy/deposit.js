const discord = require("discord.js");
const db = require("quick.db");
//off mo sholat jumat ..!
module.exports = {
    name: 'dep',//di singkat
    description: 'Deposit your money',
    category: "economy",
    run: (client, message, args) =>{
      const amount = args.join(" ")
      if (!amount) return message.reply(":x: | Missing amount!")
      
      let bal = db.get(`account.${message.author.id}.balance`)
      
      if (bal < amount) return message.reply(`:x: | your money on wallet not enough to deposit!`)
      db.add(`banks.${message.author.id}.banks`, amount)
      db.subtract(`account.${message.author.id}.balance`, amount)

      let bank = db.get(`banks.${message.author.id}.banks`)
      
      const embed = new discord.MessageEmbed()
      .setDescription(`
✅ Succesfuly deposit ${amount} to your bank!`)
      .setColor("RANDOM")
      .setTimestamp()
      
      message.channel.send(embed)
      
     
    }
}