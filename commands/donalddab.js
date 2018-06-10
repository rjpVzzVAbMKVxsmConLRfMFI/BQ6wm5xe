module.exports.run = async (bot, message, args) => {

if (['166002586351042560', '195886898747670529'].includes(message.author.id)) {
    message.channel.send(`${message.author} Here is your picture of Donald Trump dabbing!`);
    message.channel.send('https://i.imgur.com/AGsjzQQ.png');
}

  if (!['166002586351042560', '195886898747670529'].includes(message.author.id)) {

    message.channel.send({embed:{
      title:"Error:",
      description:`You do not have permission for this command!`,
      color:0xE20000
    }})
  }
}

module.exports.config = {
  command: "donalddab"
}
