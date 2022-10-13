const client = require("../../main.js");
const User = require("../../models/User");

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setActivity({
		    name: `+help ● Dev by Kama#4725`,
		    type: "WATCHING",
		    url:"https://twitch.tv/lordkama_fr",
		});
		const users = User.find();
		for (let user of users) {
			client.userSettings.set(user.Id, user);
		}

		require('../handlers/premium')(client)
		};

	},
};
