const discord = require("discord.js")

module.exports = {
    name: 'ping',
    description: 'Ping',
    category: "Public",
    run: (client, message, args) => {
let start = Date.now();
    message.delete     
         const embed = new discord.MessageEmbed()
         
         .setColor("RANDOM")
         .setFooter(`Request By ${message.author.username}`)
         .setTitle(`Your Ping`)
         .setDescription(`**Pong!** 🏓 \`${client.ws.ping}ms\``)
      
   message.channel.send(embed)   
}}