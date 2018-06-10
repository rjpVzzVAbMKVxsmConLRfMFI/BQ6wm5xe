module.exports.run = async (bot, message, args) => {

if(message.author.id === "195886898747670529") {
  message.delete();

  message.channel.send({embed:{
    title:"Note:",
    description:"The bot is back online!",
    color:0x50FC00
  }})
}
else

  message.channel.send({embed:{
    title:"Error:",
    description:"You are not the founder!",
    color:0xE20000
  }})

}

module.exports.config = {
  command: "online"
}
