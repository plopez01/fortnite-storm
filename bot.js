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
		let name = message.author.username;
		let messageauthot = message.author;
		messageauthot.lastMessage.delete;
		let image = message.author.avatarURL;
		message.channel.send({embed: {
   					color: 3447003,
   					author: {
      					name: name,
      					icon_url: image
    					},
    					fields: [{
        					name: "Objeto a la venta",
        					value: atr[0] + " x" + atr[1]
      					},
      					{
        				name: "Objeto que se pide a cambio",
        				value: atr[2] + " x" + atr[3]
      					}
    					],
    					timestamp: new Date(),
    					footer: {
      					icon_url: client.user.avatarURL,
      					text: "© Fortnite ESP"
    					}
  				}
			});
		message.channel.send(".").then(function (message) {
		message.react("🤝")
	});
		
	}

	if (message.content.startsWith(config.prefix + "hola")) {
		let atributes = message.content.split(config.prefix + "sell ")[1];
		let name = message.author.username
		message.channel.send("Hola " + name);
	}
	
});
client.login(process.env.BOT_TOKEN); //Login del token
