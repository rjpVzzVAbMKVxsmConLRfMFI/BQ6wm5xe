module.exports.run = async (bot, message, args) => {

  message.channel.send({embed:{
    title:"Ben is",
    description:"**BOOSTED**",
    color:0x2A9200
  }})

}

module.exports.config = {
  command: "ben"
}
