//_______________________________________________________________________________________________________________________________
const { Client, Collection } = require("discord.js")
const db = require("quick.db")
const fs = require('fs')
const client = new Client()
const discord = require("discord.js")
//_____________________________________________________________________________________________________________________________
client.on("ready", () => {
  console.log(`${client.user.username} Sukses login`)
  client.user.setPresence({
            status: 'dnd',
            activity: {
                name: 'C!help | 🔒Beta v.0.1.2',
                type: 'STREAMING'
            }
        });
});
//________________________________________________________________________________________________________________________________
client.commands = new Collection();
client.aliases = new Collection();
const Eco = require('./EconomyController');
client.eco = new Eco(client);
client.db = require('quick.db');
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
 
client.on("message", async message => {
 //___________________________________________________
  if (message.channel.type === "text"){

    let prefix = await db.fetch(`prefix_${message.guild.id}`)
    if (prefix == null) {
      prefix = "C!"
    }

    if (message.author.bot) return;
    if (!message.guild) return;
    //    if (!message.content.startsWith(prefix) || !message.content.startsWith(`${client.user.toString()}`)) return;

    if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) return message.channel.send(`Hi ${message.author.username} PREFIX KU ADALAH : \`${prefix}\``)
    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    let pre = message.content.startsWith(prefix) ? prefix : `${client.user.toString()}`

    const args = message.content.slice(pre.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) {
      command.run(client, message, args);
    }
  }
});
  client.on("message", async message => {
const cooldowns = new discord.Collection();
let prefix = await db.fetch(`prefix_${message.guild.id}`)
    if (prefix == null) {
      prefix = "C!"
    }    
const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();


if (!cooldowns.has(command.name)) {
	cooldowns.set(command.name, new discord.Collection());
}

const now = Date.now();
const timestamps = cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 3) * 1000;

if (timestamps.has(message.author.id)) {
	// ...
}
    if (timestamps.has(message.author.id)) {
	const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

	if (now < expirationTime) {
		const timeLeft = (expirationTime - now) / 1000;
		return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
	}
}
    timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

});
const login = process.env.ID;

client.login("NzQ2Mjg5OTYxMjA0MDU2MTY0.Xz-KsA.MKG1qRMP8DC6MFSM-Vq0vY-WQqo")
//NzM4MjkzNTEzOTYzMzA3MDYx.XyJzag.VN0fp_xrJxuai-cPMZTMHyMAejk")//woi lagi ngapain? 
//NzM4MjkzNTEzOTYzMzA3MDYx.XyJzag.VN0fp_xrJxuai-cPMZTMHyMAejk