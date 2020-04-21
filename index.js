const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');


client.once('ready', () => {
	console.log('CG-Economy are Ready to Serve');
});

client.on('message', message => {
	console.log(message.content);
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();
});
// [GENERAL COMMAND]
if (command === 'test') {
	message.channel.send('Yep the bot Work');
}
if (command === 'hi') {
	message.channel.send('stop talking to me');
}if (command === 'why?') {
	message.channel.send('Because i am a bot');
}if (command === 'mention') {
	if (!message.mentions.users.size) {
	return message.reply('you need to tag a user in order for me to mention them!');

	const taggedUser = message.mentions.users.first();

	message.channel.send(`You mention: ${taggedUser.username}`);
}if (command === 'avatar') {
	if (!message.mentions.users.size) {
		return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
	}

	const avatarList = message.mentions.users.map(user => {
		return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
	});
	message.channel.send(avatarList);
}
client.login(token);
//to add your discord bot token, go to config.json
