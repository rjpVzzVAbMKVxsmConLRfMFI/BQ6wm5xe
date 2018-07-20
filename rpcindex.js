const DiscordRPC = require("discord-rpc");

const ClientId = '372064636721430528';

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log("ready");
  rpc.setActivity({
    details: `Never Gonna`,
    state: 'Give You Up',
    // largeImageKey: 'test',
    // largeImageText: 'test',
    // smallImageKey: 'test',
    // smallImageText: 'test',
    instance: false,
  });
});

rpc.login(ClientId).catch(console.error);
