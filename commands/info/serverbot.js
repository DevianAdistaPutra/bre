const discord = require("discord.js")

module.exports = {
    name: 'server',
    description: 'Deskripsi Command',
    category: "Public",
    run: (client, message, args) =>{
//Codenya ada disini
      const embed = new discord.MessageEmbed()
      .setTitle(`CLICK TO JOIN`)
      .setURL(`https://discord.gg/rVWxzQQ`)
      message.channel.send(embed)
    }
}