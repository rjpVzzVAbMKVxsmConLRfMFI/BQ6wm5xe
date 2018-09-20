const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');

// The bot's login Token
const loginToken = "MzcyMDY0NjM2NzIxNDMwNTI4.DM_XVw.gzSuXzAsHQZJ_iFezt60ekmFGf8";


bot.commands = new discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if(err) console.error(err);

var jsfiles = files.filter(f => f.split('.').pop() === 'js');
  if (jsfiles.length <= 0) {return console.log('No commands found...')}
  else { console.log(jsfiles.length + ' commands found.') }

  jsfiles.forEach((f, i) => {
    var cmds = require(`./commands/${f}`);
    console.log(`Command ${f} loading...`); // Logs to the console that the command <name> is Loading.
    bot.commands.set(cmds.config.command, cmds);
  })
})

// Listener Event: Message Recieved ( This will run every time a message is recieved)
bot.on('message', message => {

  // Variables
  var sender = message.author; // The person who sent the message
  var msg = message.content.toUpperCase(); // Takes the message, and makes it all uppercase
  var prefix = '$' // The text before the commands
  var cont = message.content.slice(prefix.length).split(" "); // This slices off the prefix, then puts it in an array.
  var args = cont.slice(1); // This is everything after the command in an array.

  if (!message.content.startsWith(prefix)) return;

  var cmd = bot.commands.get(cont[0]) // This tries to grab the command that you called in chat.
  if (cmd) cmd.run(bot, message, args); // This checks if it exists, and if it does it runs the command.

})

// Bot Login
bot.login(loginToken);

// Code executed on launch.
bot.on('ready', () => {
  bot.user.setStatus('online');
});


// Status command.
bot.on('message', (message) => {
  if(message.content === '!status') {
    console.log("I can hear you loud and clear sir!");
  }
})


// Ping Pong command.
//bot.on('message', (message) => {
 //if(message.content == 'r!ping' || message.content == 'r!Ping') {
    //  message.channel.send("Pong!")
    //}
//  })

// r!dm command will send you a DM/PM from the bot saying "Haha, you're gay!".
//bot.on('message', (message) => {
  //if(message.content == 'r!dm') {
    //message.author.send("Haha, you're gay!")
  //}
//})


// My failure of a r!Stats command.
//bot.on('message', (message) => {
  //if(message.content == 'r!stats' || message.content == 'r!Stats') {
    //message.channel.send("**Bot Statistics**\n" +
    //"Servers: " + bot.servers.)
  //}
//})
