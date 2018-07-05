const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

client.on('ready', () => {
	console.log(`[Start] ${new Date()}`); //Hora a la que se inicio el server
	client.user.setActivity('Surviving the storm')
    	console.log("Bot iniciado correctamente!");
});


client.on("message", (message) => {
if (message.member != null){
	if (message.member.roles.find("name", "👤 Visitante 👤")){ //Visitante
			if (message.content == "aceptar"){
				message.delete(1000);
				let member = message.member;
				let role = member.guild.roles.find("name", "👤 Visitante 👤");
				let role2 = member.guild.roles.find("name", "🐣 Recluta 🐣");
				member.removeRole(role).catch(console.error);
				member.addRole(role2).catch(console.error);
			} else {
				message.delete(1000);
			}

		}
	}
	let canalComandos = client.channels.get("428654624082362378")
	let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
	if (msg.includes("HTTPS://DISCORD.GG/")) {
		if (!msg.includes("HTTPS://DISCORD.GG/UDADR2J")){
			if (!msg.includes("HTTPS://DISCORD.GG/S7QRRJM")){
				let channelLogs = client.channels.get("428669999188803586");
				console.log(channelLogs);
				message.delete(1000);
				channelLogs.send({embed: {
							color: 3447003,
							author: {
							name: "Invitacion de discord",
							icon_url: message.author.iconURL
							},
							fields: [{
								name: "Infractor",
								value: message.author.username
							},
							{
							name: "Canal y hora a la que se ralizo la infraccion",
							value: message.channel + " " + new Date()
							}
							],
							timestamp: new Date(),
							footer: {
							icon_url: client.user.avatarURL,
							text: "© Fortnite ESP"
							}
						}
					});
			}
		}
	}
	
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;
	
	//Variables	
	
	
	if (msg.startsWith(config.prefix + "SELL") && message.channel.id == "430457656470142983") {
		message.delete();
		let atributes = msg.split(config.prefix + "SELL ")[1];
		let atr = atributes.split(" ");
		let name = message.author.username;
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
	if (msg.startsWith(config.prefix + "NIVEL") && message.channel.id == "428654624082362378"){
		if (message.content != undefined){
			let atr = message.content.split(" ")[1];
			if(atr != undefined || null && isNaN){
				let nombre = message.author.username + "⚡" + atr;
				message.member.setNickname(nombre);
				message.channel.send("Nivel acualizado :white_check_mark: ");
			} else {message.channel.send("No puedes dejar el atributo vacio")}
		} else {message.channel.send("No puedes dejar el atributo vacio")}
	}
	 if (msg.startsWith(config.prefix + 'PURGE')) { 
		if (!message.member.roles.find("name", "Staff")) { // This checks to see if they DONT have it, the "!" inverts the true/false
			message.channel.send('Neccesitasel rol \`Staff\` para usar ese comando.'); // This tells the user in chat that they need the role.
			return;
        let cont = message.content.slice(config.prefix.length).split(" ");
        let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.

        async function purge() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.


            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \n Usage: ' + config.prefix + 'clear <cantidad>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

		}
	}
	if(msg.startsWith(config.prefix + "PREFIX")) {
		// Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
		let newPrefix = message.content.split(" ").slice(1, 2)[0];
		// change the configuration in memory
		config.prefix = newPrefix;
	  
		// Now we have to save the file.
		fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
		message.channel.send("Prefix cambiado " + newPrefix);
	  }

});
client.login(process.env.BOT_TOKEN); //Login del token
