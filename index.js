// Consts
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [ Intents.FLAGS.GUILDS_MESSAGES, Intents.FLAGS.GUILD_MEMBER_ADD ]});


// Ready
client.once('ready', () => {
	console.log('Ready!');
  client.user.setActivity(`Senxixty`, { type: 'LISTENING' });
});

// Welcomer
client.on('guildMemberAdd', member => {
  const guild = member.guild;
  // Channel
  const channel = member.guild.channels.cache.find(ch => ch.name === '〖👋〗welcome');
  if (!channel) return;
  channel.send({ content: `Hey ${member}, welcome to **${guild.name}!**` });
  member.send({ content: `Have a good time here in **${guild.name}**! Please make sure to read the rules before sending in #rules. If you have a problem with this server, don't be afraid to ask!` });
});

client.login('NzY0MDQ4MzI5MzQzNjMxMzYy.X4AldQ.AEFVr2ALs18Eg8ZK-dJcovJDIGI');