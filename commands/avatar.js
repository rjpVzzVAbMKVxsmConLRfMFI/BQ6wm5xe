module.exports.run = async (bot, message, args) => {
  //let filtype = args.join(".")

    // To hide lag
    let msg = await message.channel.send({embed:{
      title:"Generating Avatar",
      description:"Please Wait..",
      color:0xE2E200
    }})

    let target = message.mentions.users.first() || message.author;

    //message.channel.send(`${message.author}`)
    //message.channel.send(`Here is ${message.mentions.users.first()}`)
    //message.channel.send(target.avatarURL.replace('?size=2048', ''));

    let targetavatar = target.avatarURL.replace('?size=2048', '')
    var avatartype = targetavatar.substr(targetavatar.length - 4)

    await message.channel.send({files: [
      {
        attachment:`${targetavatar}`,
        name:`avatar.${avatartype}`
      }
  ]});

  msg.delete();
}

module.exports.config = {
  command: "avatar"
}
