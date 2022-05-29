module.exports = {
    name: 'help',
    description: "Affiche l'aide",
    execute(client, message, args, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#1F136B')
            .setTitle('Help')
            .addFields(
                { name: 'ping', value: 'Temps de réponse entre le moment ou le message est envoyé et le moment ou le bot répond' },
                { name: 'server', value: 'Infos sur le serveur' },
                { name: 'prefix', value: 'Affiche le préfixe du bot' },
                { name: 'help', value: 'Affiche ce menu' },
                { name: 'clear', value: 'Supprime un nombre de messages donné' },
                { name: 'mute', value: 'Mute un membre' },
                { name: 'unmute', value: 'Unmute un membre' },
                { name: 'kick', value: 'Expulse un membre du serveur' },
                { name: 'ban', value: 'Ban un membre du serveur' },
                { name: 'invite', value: 'Affiche les invite du serveur et du bot' },
            )
            .setImage("https://i.imgur.com/jCGrlk8.gif")
            .setFooter("Dev by Kama")
            .setTimestamp();

        message.channel.send(helpEmbed);


    }
}