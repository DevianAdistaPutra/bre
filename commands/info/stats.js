const discord = require("discord.js")

module.exports = {
    name: 'stats',
    description: 'Deskripsi Command',
    category: "Public",
    run: (client, message, args) =>{
  let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
      
  
const embed = new discord.MessageEmbed()
.setAuthor(`STATS AND INFORMATION`,client.user.avatarURL()) 
.setColor("BLUE")
.setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
.setDescription(`


**📝 | About**
\`\`\`
Name Bot   :: Bongo Cat#5211
Owner Bot  :: Devian#9651
Thanks     :: jeffsay#6430
Support    :: Vins 2106#7613
Uptime     :: ${days}d ${hours}h ${minutes}m ${seconds}s
Guild      :: ${client.guilds.cache.size} Server
Users      :: ${client.users.cache.size} User\`\`\`
**⚙️ | Sistem**
\`\`\`
Ping       :: ${client.ws.ping}ms
Disk Usage :: ${Math.floor(Math.random() * 50.39)}mb
Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(0)}mb
Platform   :: ${process.platform}\`\`\``)
.addField('🌐 | Link',`**[INVITE](https://discord.com/oauth2/authorize?client_id=746289961204056164&scope=bot&permissions=288374865) | [DONASI](https://trakteer.id/depian) | [SERVER](https://discord.gg/rVWxzQQ)**`)
message.channel.send(embed)
    }
}