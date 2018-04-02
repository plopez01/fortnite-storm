const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
	console.log(`[Start] ${new Date()}`); //Hora a la que se inicio el server
	client.user.setActivity('Surviving the storm')
	console.log("Bot iniciado correctamente!");
});

client.on("message", (message) => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;
	if (message.content.startsWith(config.prefix + "sell")) {
		let atributes = message.content.split(config.prefix + "sell ")[1];
		let atr = atributes.split(" ");
		message.channel.send(atr);
	}
	
});
client.login(process.env.BOT_TOKEN); //Login del token
