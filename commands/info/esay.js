const discord = require("discord.js")

module.exports = {
    name: 'emsay',
    description: 'Deskripsi Command',
    category: "Public",
    run: (client, message, args) =>{
let say = args.join(" "); 
  
if(!say) return message.channel.send("\`\`\`❌ Fill Something\`\`\`")
      message.delete()
let embed = new discord.MessageEmbed()
.setColor("BLUE")
.setDescription(`**${say}**`)
message.channel.send(embed)
}
}