const discord = require("discord.js")

module.exports = {
    name: 'say',
    description: 'Deskripsi Command',
    category: "Public",
    run: (client, message, args) =>{
let say = args.join(" ");     
if(!say) return message.channel.send("\`\`\`❌ Fill Something\`\`\`")
      
message.delete()
message.channel.send(say); 
   }
}