const discord = require('discord.js')

module.exports = {
 name: "ship",
 description: "Melihat seberapa bucin seseorang.",
 alias: ["pacaran"],
 usage: "ship @tag",
 run: async (bot, message, args) => {
   

   let user = message.mentions.users.first()
     if (!user) return message.channel.send("\`\`\`❌ Tag Someone\`\`\`");
   if (user.bot) return message.channel.send("\`\`\`❌ Bot Dont Have Heart\`\`\`");
   
   
   //coba pake !user.id 
   
   
   
     
   let m = await message.channel.send(`Guess the Certainty of Love ${user.username} And ${message.author.username}...`);
   //asw -_- //mari kita coba apakah bisa :v 
   //enak ya di pc bisa pilih ctrl dll 
   setTimeout(() => {
     
    m.delete();
     
     const random = Math.floor(Math.random() * 100) + 1;
     
     const embed = new discord.MessageEmbed()
     .setAuthor(`RATE COHABITASION`)
     .setColor("#FF00BF")
     .setFooter(`Request By ${message.author.username}`)
     .setDescription(`**Result From This Bot
<@${message.author.id}>
❤️ ${random} ❤️
<@${user.id}>**`);
     
     message.channel.send(embed)
   }, 3000);
 }
};

