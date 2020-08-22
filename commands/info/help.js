const discord = require("discord.js")

module.exports = {
    name: 'help',
    description: 'Helper',
    category: "Public",
    run: (client, message, args) =>{

  const embed = new discord.MessageEmbed()
  .setAuthor(`Help Commands`,client.user.avatarURL())
  .setColor('BLUE')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription('<:discord:744839749621121114> Prefix This Bot Is \`C!\` You Have Change The Prefix With \`prefix {new_valuable}\`') //ini cuma contoh
  .addField('**💸 | Economy**', '`work`,`crime`,`bal`,`dep`,`with`,`top`', true)
  .addField('**❇️ | Fun**', '`meme`,`penis`,`ship`,`avatar`,`cat`,`dog` ', true)
  .addField('**🎶 | Music**', '`Cooming Soon` ', true)
  .addField('**🔞 | NFSW**', '`hentai`,`porn`')
  .addField('**⚙️ | Utility**', '`ping`,`help`,`stats`,`uptime`,`say`,`emsay`', true)
  .addField('**👑 | Moderator**','`ban`,`kick`')
  .addField('**🌐 | Link**', `**[INVITE](https://discord.com/oauth2/authorize?client_id=746289961204056164&scope=bot&permissions=288374865) | [DONASI](https://trakteer.id/depian) | [SERVER](https://discord.gg/rVWxzQQ)**`)
  message.channel.send(embed)
} 
    }

