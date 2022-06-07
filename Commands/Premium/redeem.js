const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const moment = require("moment");
const schema = require("../../Models/code");
const User = require("../../Models/User");

module.exports = new Command({
  // options
  name: "redeem",
  description: `redeem preium code`,
  userPermissions: [],
  category: "Premium",
  options: [
    {
      name: "code",
      description: `give me code`,
      type: "STRING",
      required: true,
    },
  ],
  // command start
  run: async ({ client, interaction, args }) => {
    // Code
    // Check if the user with a unique ID is in our database.
    let user = await User.findOne({
      Id: interaction.user.id, // if you are using slash commands, swap message with interaction.
    });

    // Check Users input for a valid code. Like `!redeem ABCD-EFGH-IJKL`
    let code = interaction.options.getString("code");

    // Return an error if the User does not include any Premium Code
    if (!code) {
      interaction.followUp(`**Please specify the code you want to redeem!**`);
    }

    // If the user is already a premium user, we dont want to save that so we return it.
    if (user && user.isPremium) {
      return interaction.followUp(`**> You already are a premium user**`);
    }

    // Check if the code is valid within the database
    const premium = await schema.findOne({
      code: code.toUpperCase(),
    });

    // Set the expire date for the premium code
    if (premium) {
      const expires = moment(premium.expiresAt).format(
        "dddd, MMMM Do YYYY HH:mm:ss"
      );

      // Once the code is expired, we delete it from the database and from the users profile
      user.isPremium = true;
      user.premium.redeemedBy.push(interaction.user);
      user.premium.redeemedAt = Date.now();
      user.premium.expiresAt = premium.expiresAt;
      user.premium.plan = premium.plan;

      // Save the User within the Database
      user = await user.save({ new: true }).catch(() => {});
      client.userSettings.set(interaction.user.id, user);
      await premium.deleteOne().catch(() => {});

      // Send a success message once redeemed
      interaction.followUp(
        `**You have successfully redeemed premium!**\n\n\`Expires at: ${expires}\``
      );

      // Error message if the code is not valid.
    } else {
      return interaction.followUp(
        `**The code is invalid. Please try again using valid one!**`
      );
    }
  },
});