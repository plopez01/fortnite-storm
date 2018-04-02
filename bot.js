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
		message.delete();
		let atributes = message.content.split(config.prefix + "sell ")[1];
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

	if (message.content.startsWith(config.prefix + "hola")) {
		let atributes = message.content.split(config.prefix + "sell ")[1];
		let name = message.author.username;
		message.channel.send("Hola " + name);
	}
	 if (msg.startsWith(prefix + 'PURGE')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.roles.find("name", "bot-commander")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('You need the \`bot-commander\` role to use this command.'); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); //\n means new line.
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
});
	
});
client.login(process.env.BOT_TOKEN); //Login del token
