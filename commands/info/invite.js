const discord = require("discord.js")

module.exports = {
    name: 'invite',
    description: 'Deskripsi Command',
    category: "Public",
    run: (client, message, args) =>{
let embed = new discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`Click Here To Invite`)
.setURL(`https://discord.com/oauth2/authorize?client_id=746289961204056164&scope=bot&permissions=288374865`)
message.channel.send(embed)
      
    }
}