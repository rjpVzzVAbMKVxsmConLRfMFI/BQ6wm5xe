module.exports.run = async (bot, message, args) => {
  if (['195886898747670529', '227822172343762944'].includes(message.author.id)) {
      message.channel.send(`${message.author} OH YEAH, WOODY LIKES THE BROOM`);
      message.channel.send('https://i.imgur.com/hA3IW2O.png');
  }

  if (!['195886898747670529', '227822172343762944'].includes(message.author.id)) {

    message.channel.send({embed:{
      title:"Error:",
      description:`You do not have the power of the broom!`,
      color:0xE20000
    }})
  }

}

module.exports.config = {
  command: "broom"
}
