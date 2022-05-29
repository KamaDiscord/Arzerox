module.exports = {
    name: 'prefix',
    description: "Affiche le préfixe du bot",
    execute(client, message, args, Discord) {
        const prefixEmbed = new Discord.MessageEmbed()
            .setColor('#1F136B')
            .setTitle('Prefix')
            .setDescription('Mon prefix est `.` BG !')
            .setImage("https://i.imgur.com/jCGrlk8.gif")
            .setFooter('Dev by Kama')
            .setTimestamp()
        message.channel.send(prefixEmbed)

    }
}