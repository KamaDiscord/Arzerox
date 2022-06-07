require('dotenv').config();
const Discord = require('discord.js')
module.exports = (Discord, client, message) =>{
    const prefix = process.env.PREFIX;
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/  +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command, interaction.commandName);

    const User = require("../Models/User");
    if (cmd) {
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
    if (cmd.premium && user && !user.isPremium) {
      interaction.followUp(`You are not premium user`);
    } else {
      cmd.execute(client, message, args, Discord);
    }
  }
}