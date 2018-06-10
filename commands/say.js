module.exports.run = async (bot, message, args) => {
  let suffix = args.join(" ")

  if(message.author.id === '195886898747670529') {
    if(suffix) {
      message.channel.send(suffix)
      message.delete()
    }
    if(!suffix) {
      message.channel.send(`${message.author} **I have nothing to say!**`)
      message.delete()
    }
  } else
  return;
}

module.exports.config = {
  command: "say"
}
