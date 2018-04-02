const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`[Start] ${new Date()}`); //Hora a la que se inicio el server
	client.user.setActivity('Surviving the storm')
	console.log("Bot iniciado correctamente!");
});

client.on("message", (message) => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;
	if (message.content == "hola") {
		message.channel.send("hola que tal");
	}
	
});
client.login(process.env.BOT_TOKEN); //Login del token
