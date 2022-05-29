module.exports = {
    name: 'server',
    description: "Affiche le lien vers le serveur",
    execute(client, message, args, Discord) {
        const serverEmbed = new Discord.MessageEmbed()
            .setColor('#1F136B')
            .setTitle('Infos serveur')
            .setDescription('Infos sur le serveur')
            .addFields(
                { name: 'Nom du serveur', value: "Le serveur s'appele Les 2 graphistes" },
                { name: 'Propriétaires du serveur', value: 'Les propriétaires du serveur sont Kama et Cheater140' },
                { name: 'Date de création du serveur', value: 'Le serveur à été créé le 15/11/2020' },
                { name: 'Premier raid du serveur', value: 'Le premier raid du serveur à été effectué par zilbazil#3858' }
            )
            .setImage('https://i.imgur.com/jCGrlk8.gif')
            .setFooter('Dev by Kama')
            .setTimestamp()

        message.channel.send(serverEmbed)
    }
}