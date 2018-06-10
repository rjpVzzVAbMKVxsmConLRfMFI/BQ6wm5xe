module.exports.run = async (bot, message, args) => {

  var lairylevel = (Math.floor((Math.random() * 100) + 1))

//  message.channel.send(`${message.author} Your Lairy levels are currently at: ` + ())
if(message.author.id === '300331822519156746') {
  message.channel.send(`${message.author},`)
  message.channel.send({embed:{
    title: "Your **Lairy** level is currently at:",
    description:"100",
    color:0xff0000
  }})
} else {
  message.channel.send(`${message.author},`)
  message.channel.send({embed:{
    title: "Your **Lairy** level is currently at:",
    description:(lairylevel),
    color:0xE5914B
  }})
}
}

module.exports.config = {
  command: "lairy"
}
