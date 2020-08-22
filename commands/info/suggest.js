const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Suggestiom",
  category: "main",
  cooldown: 60,
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Fill You Suggestion")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "┗📝┛suggestion" || x.name === "┗📝┛suggestion"))
    
    
    if(!channel) {
      return message.channel.send("")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send(`**Check Your Suggestion In ${channel}**`)
    
  }
}