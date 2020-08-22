function ubah(input) {
  return input.split(" ").join("tos ") + "tos";
}
module.exports = {
    name: 'tos',
    description: 'Ubahtos katamutos jaditos',
    category: "fun",
    run: (client, message, args) =>{
      let word = args.join(' ');
      if (word) {
        message.channel.send(ubah(word));
      } else message.reply('Fill something?')
    }
}

// FlockNet#2020