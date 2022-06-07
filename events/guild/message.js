require('dotenv').config();
const Discord = require('discord.js')
const User = require("../../Models/User");
module.exports = (Discord, client, message) =>{
    const prefix = process.env.PREFIX;
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/  +/g);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    if (command) {
        let user = client.userSettings.get(interaction.user.id);
        // If there is no user, create it in the Database as "newUser"
        if (!user) {
          const findUser = await User.findOne({ Id: interaction.user.id });
          if (!findUser) {
            const newUser = await User.create({ Id: interaction.user.id });
            client.userSettings.set(interaction.user.id, newUser);
            user = newUser;
          } else return;
        }
      
        if (command.premium && user && !user.isPremium) {
          interaction.followUp(`You are not premium user`);
        } else {
          command.run({ client, interaction, args });
        }
    }
}