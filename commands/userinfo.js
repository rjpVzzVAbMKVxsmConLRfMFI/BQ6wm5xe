module.exports.run = async (bot, message, args) => {

  const discord = require('discord.js');
  let infotarget = message.mentions.users.first() || message.author;
  let infotargetguild = message.mentions.members.first() || message.member

  let embed = new discord.RichEmbed()
    .setAuthor(infotarget.username)
    .setDescription('User Information')
    .setThumbnail(`${infotarget.displayAvatarURL}.gif`)
    .setColor(0x5B2C6F)
    .addField("Discord Tag:", `${infotarget.username}#${infotarget.discriminator}`)
    .addField("ID:", infotarget.id)
    .addField("Current VC:", infotargetguild.voiceChannel || "N/A")
    .addField("Date User Joined:", infotargetguild.joinedAt)
    .addField("Date Account Created:", infotarget.createdAt)

  message.channel.send(embed);

  return;

}

module.exports.config = {
  command: "userinfo"
}
