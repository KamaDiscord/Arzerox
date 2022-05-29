module.exports = {
    name:"status",
    execute(client, message, args, Discord) {
        userStatus = message.author.presence.status
        author = message.author
        if(userStatus === 'dnd'){
            message.channel.send(`<@${author.id}> vous êtes en ne pas déranger. **Merci de ne pas lui envoyer de messages !!**`)
        } else if(userStatus === 'online'){
            message.channel.send(`<@${author.id}> vous êtes en ligne. Eh le chat! Il veut parler !`)
        } else if(userStatus === 'offline'){
            message.channel.send(`<@${author.id}> tu es en train de m'envoyer un message alors que tu es hors-ligne. Cacherais-tu donc quelque chose?`)
        } else {
            message.channel.send("Tu es inactif! Dors bien !")
        }
}
}