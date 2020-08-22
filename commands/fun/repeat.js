const discord = require("discord.js")

module.exports = {
    name: 'repeat',
    description: 'Deskripsi Command',
    category: "Public",
    run: (client, message, args) =>{
//Codenya ada disinih
      let say = args.join(" ")
      const ownerID = "691222645764784168"
      if(message.author.id != ownerID)return;
      
      message.channel.send(`${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say} ${say}`)
    }
}