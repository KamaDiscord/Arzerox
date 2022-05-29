module.exports = {
    name: 'invite',
    description: "Affiche les invites du serveur et du bot",
    execute(client, message, args, Discord) {
        const inviteEmbed = new Discord.MessageEmbed()
            .setColor('#1F136B')
            .setTitle('Invite')
            .setDescription('Invitez moi !')
            .addFields(
                { name: 'Serveur support', value: 'https://bit.ly/2graphisme' },
                { name: 'Inviter le bot', value: 'https://bit.ly/zerotwobt' },
            )
            .setImage("https://i.imgur.com/VPtlBxQ.gif")
            .setFooter('Dev by Kama')
            .setTimestamp()
        message.channel.send("https://i.imgur.com/jCGrlk8.gif")

    }
}