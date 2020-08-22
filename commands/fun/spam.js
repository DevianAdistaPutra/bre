const discord = require("discord.js")

module.exports = {
    name: 'spam',
    description: 'di isi apa ya?',
    category: "fun",
    run: (client, message, args) =>{
let spam = args.join(" ");     
if(!spam) return message.channel.send("\`\`\`❌ Fill Something\`\`\`")
      const ownerID = "691222645764784168"
      if(message.author.id !== ownerID) return;
      for (let i = 0; i<30; i++) {
        message.channel.send(spam);
      }
      
    }
}