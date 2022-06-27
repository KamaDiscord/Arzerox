const { Command } = require("reconlx");
const User = require("../../models/User");
const moment = require("moment");
const { Collection, MessageEmbed } = require("discord.js");

module.exports = new Command({
  // options
  name: "premiumlist",
  description: `get list of all preimium user`,
  userPermissions: [],
  category: "Premium",
  // command start
  run: async ({ client, interaction, args }) => {
    // Code
    if (interaction.user.id !== "882481863661342770")
      return interaction.followUp(`You are not my Owner`);

    let data = client.userSettings
      .filter((data) => data.isPremium === true)
      .map((data, index) => {
        return ` <@${data.Id}> Expire At :- \`${moment(
          data.premium.expiresAt
        ).format("dddd, MMMM Do YYYY")}\` Plan :- \`${data.premium.plan}\` `;
      });
    interaction.followUp({
      embeds: [
        new MessageEmbed().setDescription(
          data.join("\n") || "No Premium User Found"
        ),
      ],
    });
  },
});
