const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const moment = require("moment");
const schema = require("../../Models/code");
const User = require("../../Models/User");

module.exports = new Command({
  // options
  name: "rempremium",
  description: `remove preium from user`,
  userPermissions: [],
  category: "Premium",
  options: [
    {
      name: "user",
      description: `mention a premium user`,
      type: "USER",
      required: true,
    },
  ],
  // command start
  run: async ({ client, interaction, args }) => {
    // Code
    let user = interaction.options.getUser("user");
    let data = client.userSettings.get(user.id);
    if (!data.isPremium) {
      return interaction.followUp(`${user} is Not a Premium User`);
    } else {
      await User.findOneAndRemove({ Id: user.id });
      await client.userSettings.delete(user.id);
      interaction.followUp(`${user} Removed From Premium`);
    }
  },
});
