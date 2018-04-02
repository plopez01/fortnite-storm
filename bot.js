const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`[Start] ${new Date()}`); //Hora a la que se inicio el server
	client.user.setActivity('Surviving the storm')
	console.log("Bot iniciado correctamente!");
});
client.login(process.env.BOT_TOKEN); //Login del token
