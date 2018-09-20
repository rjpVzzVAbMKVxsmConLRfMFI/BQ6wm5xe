module.exports.run = async (bot, message, args) => {

  // 8ball command.
  message.content = message.content.slice(0,6);
    if(message.content === '$8ball') {
      var rng1 = (Math.floor((Math.random() * 3) + 1))

      if(rng1 === 1) {
        var yesnoanswer = 'Yes.'
      }
      if(rng1 === 2) {
        var yesnoanswer = 'No.'
      }
      if (rng1 === 3) {
        var yesnoanswer = 'Maybe..'
      }
      message.channel.send(`${message.author} ${yesnoanswer}`);
    }
  }

module.exports.config = {
  command: "8ball"
}
