module.exports.run = async (bot, message, args) => {

  if(message.author.id === "195886898747670529") {
    message.delete();

    message.channel.send({embed:{
      title:"URGENT:",
      description:"The bot is restarting...",
      color:0xE20000
    }})
  }
  else

  message.channel.send({embed:{
    title:"Error:",
    description:"You do not have enough permissions!",
    color:0xE20000
  }})

}

module.exports.config = {
  command: "restart"
}
