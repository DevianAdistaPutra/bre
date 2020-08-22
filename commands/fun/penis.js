const discord = require('discord.js')
module.exports = {
 name: "penis",
 description: "Melihat seberapa panjang penis seseorang.",
 alias: ["kontol"],
 usage: "kontol @user",
 run: async (bot, message, args) => {
   const num = Math.floor(Math.random() * 20); // sampai 20 cm.
   const panjang_kontol = "8" + "=".repeat(num) + "D";

   let user = message.mentions.users.first() || message.author;
   if (user.bot) return message.channel.send("\`\`\`❌ Bot Dont Have Penis\`\`\`");
   let m = await message.channel.send(`Guessing Penis Length ${user.username} ...`);
   setTimeout(() => {
    m.delete();
    message.channel.send(`${num < 12 ? "😣" : "😋"} **Penis ${user.toString()} Throughout :**\n\`\`\`${panjang_kontol}\`\`\``);
   }, 3000);
 }
};

