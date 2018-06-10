module.exports.run = async (bot, message, args) => {
  const discord = require('discord.js');
  let question = args.join(" ")

  var rng2 = (Math.floor((Math.random() * 10) + 1))

  message.content = message.content.slice(0,5);

  // The embeded response that shows up when there is an argument
  const embed = new discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
  .setTitle(`I'd rate ${question} a`)
  .setDescription(`${rng2}/10!`)
  .setColor(0x2A9200)

  // The embeded error that shows up when there is no argument
  const embederror = new discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
    .setTitle("Error:")
    .setDescription("Please give me something to rate.")
    .setColor(0xE20000)

  if(!question) {
    message.channel.send(embederror)
  }

  if(question) {
    message.channel.send(embed)
  }

}

module.exports.config = {
  command: "rate"
}
