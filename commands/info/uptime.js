const discord = require("discord.js")

module.exports = {
    name: 'uptime',
    description: 'Deskripsi Command',
    category: "Public",
    run: (client, message, args) =>{
//Codenya ada disini
let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
  
  
const embed = new discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`UPTIME`)
.setDescription(`\`\`\`${days}d ${hours}h ${minutes}m ${seconds}s\`\`\``);
    
      message.channel.send(embed)
    }
}