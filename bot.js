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
		let name = message.author.displayName;
		message.channel.send(name +  "vende un/a " + atr[0] + " con nivel " + atr[1] + " a cambio de " + atr[2]);
	}
	if (message.content.startsWith(config.prefix + "hola")) {
		let atributes = message.content.split(config.prefix + "sell ")[1];
		let name = message.author.displayName;
		message.channel.send("Hola " + name);
	}
	
});
client.login(process.env.BOT_TOKEN); //Login del token
