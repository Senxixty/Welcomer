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
  const channel = member.guild.channels.cache.find(ch => ch.name === '〖👋〗welcome'); // Change to your Channel
  if (!channel) return;
  channel.send({ content: `Hey ${member}, welcome to **${guild.name}!**` });
  member.send({ content: `Have a good time here in **${guild.name}**! Please make sure to read the rules before sending in #rules. If you have a problem with this server, don't be afraid to ask!` });
});

client.login('Your Token');
