module.exports.run = async (bot, message, args) => {

    // To hide lag
    let msg = await message.channel.send({embed:{
      title:"Generating Avatar",
      description:"Please Wait..",
      color:0xE2E200
    }})

    let target = message.mentions.users.first() || message.author;

    await message.channel.send({files: [
      {
        attachment: target.displayAvatarURL,
        name:"avatar"
      }
  ]});

  msg.delete();
}

module.exports.config = {
  command: "avatar"
}
