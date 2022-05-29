module.exports = {
    name:"yaourt",
    description:"Yaourt",
    execute(client, message, args, Discord) {
        //SI serveur x alors :
        if ( message.guild.id === '978320790212730920', '977196180721270784') {
            //si user x alors:
            const userId = client.users.cache.find(m => m.id === "851028619337007134");
            if (message.author === userId) {
                const yaourtEmbed = new Discord.MessageEmbed()
                    .setFooter('Dev by Kama#4725')
                    .setTitle("Yaourt is sus")
                    .setImage("https://i.imgur.com/U1TEVjF.jpeg")
                message.author.send(yaourtEmbed)
            } else {
                const nopeEmbed = new Discord.MessageEmbed()
                .setFooter("Dev by Kama#4725")
                .setTitle("You are not allowed to do this but yaourt is still sus")
                .setImage("https://i.imgur.com/U1TEVjF.jpeg")
                message.author.send(nopeEmbed)
            }
        }
}
}