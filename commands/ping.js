module.exports.run = async (bot, message, args) => {

var fakeping = (Math.floor((Math.random() * 48) + 24))

  // Ping / Pong commands
    message.channel.send({embed:{
      title:"Pong!",
      description:"**Ping:** " + (fakeping) + "ms",
      color:0x2A9200
    }})

}

module.exports.config = {
  command: "ping"
}
