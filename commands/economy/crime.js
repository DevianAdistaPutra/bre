const talkedRecently = new Set();
const discord = require("discord.js");
const db = require("quick.db");
const workersay = require("./crimesay.json")
//off mo sholat jumat ..!
module.exports = {
    name: 'crime',//di singkat
    description: 'For add your money',
    category: "economy",
  cooldown: 30,
    run: async (client, message, args) =>{
      
      const random = workersay[Math.floor(Math.random() * workersay.length)];
      
      const amount = Math.floor(Math.random() * 500) + 1;
      
          if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30s before getting typing this again. - " + message.author.username);
    } else {

      const embed = new discord.MessageEmbed()
      .setAuthor(`Crime Results`) 
      .setColor("BLUE")
      .setFooter(`Request By ${message.author.username}`,client.user.displayAvatarURL())
      .setDescription(`${random} 💸 ${amount}`)
      db.add(`account.${message.author.id}.balance`, amount);
      message.channel.send(embed)
      
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 10000);
    }

      
      
      
    }
}