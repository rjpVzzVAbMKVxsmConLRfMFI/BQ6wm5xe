const api = "https://jsonplaceholder.typicode.com/posts";
const snekfetch = require('snekfetch');
const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  snekfetch.get(api).then(r => {
    let body = r.body;
    let id = args [0]

    if(!id) return message.channel.send({embed:{
      title:"Error:",
      description:"Please supply an ID.",
      color:0xE20000
    }})

    if(isNaN(id)) return message.channel.send({embed:{
      title:"Error",
      description:"Please supply a valid number.",
      color:0xE20000
    }})

    let entry = body.find(post => post.id == id);
    console.log(entry);
 })
}

module.exports.config = {
  command: "randomthing"
}

// Idk what this is tbh. Maybe delete?
