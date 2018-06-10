module.exports.run = async (bot, message, args) => {
  let suffix = args.join(" ")

  if(message.author.id === "195886898747670529") {
    if(suffix) {
      bot.user.setGame(suffix)
      message.channel.send('Changed game status to ' + '__**' + (suffix) + '**__')
    }
    if(!suffix) {
      message.channel.send('Please provide a valid game name.')
    }
  } else

  message.channel.send('You are not the owner!');

}

module.exports.config = {
  command: "game"
}
