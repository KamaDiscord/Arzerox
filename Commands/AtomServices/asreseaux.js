module.exports = {
    name: '785',
    description: "Boost Réseaux",
    execute(client, message, args, Discord) {
        const socialEmbed = new Discord.MessageEmbed()
            .setColor('#1F136B')
            .setTitle('Boost Réseaux. ')
            .setDescription('Différents prix.')
            .addFields(
                { name: 'Instagram <:Logo_Instagram:977446165052293191>', value: "**300 abos** : 0,75€ ou 3 invites <a:BlobWelcome:977501583732527124>\n**500 abos **: 1€ ou 5 invites <a:BlobWelcome:977501583732527124>\n**1000 abos** : 2€ ou 10 invites <a:BlobWelcome:977501583732527124>", inline:true},
                { name: "Tiktok <:Logo_Tiktok:977446160790872134>", value:"**1000 vues** : 0,30€ ou 1 invite <a:BlobWelcome:977501583732527124>\n**100 partages** : 0.30€ ou 1 invite <a:BlobWelcome:977501583732527124>\n**50 likes sur commentaire** : 0,30€ ou 1 invite\n**10 abonnés** : 0,50€ ou 2 invites <a:BlobWelcome:977501583732527124>", inline:true},
                { name: "Twitch <:Logo_Twitch:977446193414172686>", value: "**25 follows** : 0,50€ ou 3 invites <a:BlobWelcome:977501583732527124>\n**100 follows** : 2€ ou 9 invites <a:BlobWelcome:977501583732527124>", inline:true},
                { name: "Youtube <:Logo_Youtube:977446196853477396>", value:"**100 vues** : 0,50€ ou 3 invites <a:BlobWelcome:977501583732527124>\n**50 likes** : 1€ ou 5 invites <a:BlobWelcome:977501583732527124>\n**50 abos** : 1€ ou 5 invites <a:BlobWelcome:977501583732527124>", inline:true}
            )
            .setFooter('Dev by Kama')
            .setTimestamp()
        const streamingEmbed = new Discord.MessageEmbed()
            .setColor('#1F136B')
            .setTitle('Streaming ')
            .setDescription('Différents prix.')
            .addFields(
                { name: "Films", value:"Disney+ <:Logo_DisneyPlus:977446460767494204> : 0,50€/3 invites\nHulu <:Logo_Hulu:977446434334969897> : 0,50€/3 invites\nPrime Video <:Logo_PrimeVideo:977446444745244703> : 1,50€/8 invites", inline:true},
                { name:"Anime", value:"ADN <:Logo_AnimeDigitalNetwork:977446447530262549> : 3€/15 invites\nWakanim <:Logo_Wakanim:977446433206718504> : 4€/20 invites", inline:true},
            )
            .setImage('https://i.imgur.com/jCGrlk8.gif')
        message.channel.send(socialEmbed)
        message.channel.send(streamingEmbed)
}}