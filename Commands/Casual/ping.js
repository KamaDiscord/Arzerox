module.exports = {
    name: 'ping',
    description: "Commande pour connaître le ping du bot.",
    execute(client, message, args, Discord) {
        var ping = Date.now() - message.createdTimestamp + " ms";
        message.channel.send("Votre ping est `" + `${Date.now() - message.createdTimestamp}` + " ms`");
    }
}