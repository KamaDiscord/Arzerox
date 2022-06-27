const client = require("../../main.js");
const User = require("../../models/User");

client.on("ready", async () => {
  console.log(`${client.user.username} Is Online`);
  client.user.setActivity({
    name: `+help ● Dev by Kama#4725`,
    type: "WATCHING",
    url:"https://twitch.tv/lordkama_fr",
  });

  // code
  const users = await User.find();
  for (let user of users) {
    client.userSettings.set(user.Id, user);
  }

  require('../handlers/premium')(client)
});
