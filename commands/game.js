module.exports.run = async (bot, message, args) => {
  let suffix = args.join(" ")

  if(message.author.id === "195886898747670529") {
    if(suffix) {
      bot.user.setGame(suffix)
      message.delete()
      message.channel.send({embed:{
        title:"Game Status Updated",
        description:(suffix),
        color:0xE2E200
      }})

    }
    if(!suffix) {
      message.channel.send('Please provide a valid game name.')
    }
  } else
  message.channel.send({embed:{
    title:"Error:",
    description:`You do not have enough permissions!`,
    color:0xE20000
  }})

}

module.exports.config = {
  command: "game"
}
