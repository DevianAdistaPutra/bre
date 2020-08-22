const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "dog",
    description: "Gives you a dog",
    async run (client, message, args) { 
        const subReddits = ["doggy", "dog", "anjing"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor('🐕DOGGY🐕')
        .setFooter(`Request By ${message.author.username}`)
        .setImage(img)
        .setURL(`https://random.dog/woof.json/${random}`)
  
        message.channel.send(memeEmbed);
    }
}