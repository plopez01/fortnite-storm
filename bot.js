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
		message.channel.send(message.author.username +  " vende un/a " + atr[0] + " con nivel " + atr[1] + " a cambio de " + atr[2]);
		message.channel.send({embed: {
   					color: 3447003,
   					author: {
      					name: client.user.username,
      					icon_url: client.user.avatarURL
    					},
    					title: "This is an embed",
    					url: "http://google.com",
    					description: "This is a test embed to showcase what they look like and what they can do.",
    					fields: [{
        					name: "Fields",
        					value: "They can have different fields with small headlines."
      					},
      					{
       					 name: "Masked links",
        				 value: "You can put [masked links](http://google.com) inside of rich embeds."
      					},
      					{
        				name: "Markdown",
        				value: "You can put all the *usual* **__Markdown__** inside of them."
      					}
    					],
    					timestamp: new Date(),
    					footer: {
      					icon_url: client.user.avatarURL,
      					text: "© Example"
    					}
  				}
			});
	}
	if (message.content.startsWith(config.prefix + "hola")) {
		let atributes = message.content.split(config.prefix + "sell ")[1];
		let name = message.author.username
		message.channel.send("Hola " + name);
	}
	
});
client.login(process.env.BOT_TOKEN); //Login del token
