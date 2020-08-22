const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "cat",
    description: "Gives you a dog",
    async run (client, message, args) { 
        const subReddits = ["cat", "meow", "cats"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor('🐈PICTURE CAT🐈')
        .setFooter(`Request By ${message.author.username}`)
        .setImage(img)
        .setURL(`http://aws.random.cat/meow/${random}`)
  
        message.channel.send(memeEmbed);
    }
}