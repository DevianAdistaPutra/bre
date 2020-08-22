const discord = require("discord.js")

module.exports = {
    name: 'avatar',
    description: 'Ngga tau mau diisi apa',
    category: "Public",
    run: (client, message, args) =>{
//Codenya ada disini
    let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
 
  
  const embed = new discord.MessageEmbed()
  .setTitle(`${user.tag} avatar`)
  .setFooter(`Request By ${message.author.username}`)
  .setDescription(`[Avatar URL](${avatar})`)
  .setColor(0x1d1d1d)
  .setImage(avatar)
    
    
    
  return message.channel.send(embed)
    }
}