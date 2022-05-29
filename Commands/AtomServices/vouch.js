module.exports = {
    name:"vouch",
    execute(client, message, args, Discord){
        if( message.guild.id === '977196180721270784') {
            if (message.attachments.size > 0, args > 0) {
                if(args > 10){
                    message.reply('Vous avez dépassé 10 arguments! Essayez de relancer la commande avec moins de mots')
                } else {
                    let [first, second, third] = args;
                    let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null                    
                    vouchEmbed = new Discord.MessageEmbed()
                        .setFooter('Dev by Kama#4725')
                        .setAuthor(message.author.tag, message.author.avatarURL())
                        .setTitle("Vouch by " + message.author.tag)
                        .setImage(messageAttachment)
                        .addFields(
                            {name:message.author.tag+" dit :", value:`test ${first}`}
                        )
                        .setDescription(message.author.tag + ` : ${args}`)
                    message.channel.send(vouchEmbed)
                }
            } else {
                message.reply('Veuillez attacher une image et du texte. Attention a ne pas utiliser plus de 10 mots!')
            }
        }
    }
}