module.exports = {
    name:"gen a",
    description:"gen item from a list",
    execute(client, message, args, Discord) {
        const splitargs = message.content.trim().split(' ');
        const arg1 = splitargs[0];
        const toomuchargs = splitargs[1];
        var answersnumbers = [
            "1",
            "2",
            "3",
            "4",
            "5"
        ]
        
        var answerswords = [
            "a",
            "b",
            "c",
            "d",
            "e"
        ]
        
        var randomAnswer = answersnumbers[Math.floor(Math.random() * answers.length)];
        if (arg1 === number) {
            const loadingGen = new Discord.MessageEmbed()
                .setColor('#1F136B')
                .setTitle('En train de générer.')
                .setDescription("Merci d'attendre 10s")
                .setFooter("Dev by Kama")
            const gen = new Discord.MessageEmbed()
                .setColor('#1F136B')
                .setTitle('Votre item généré.')
                .setDescription('Gen.')
                .addFields(
                    { name:"Votre génération", value:(randomAnswer)}
                )
                .setFooter("Dev by Kama")
            message.channel.send(loadingGen).then(msg => {
                msg.delete({ timeout: 10000 })
            })
            setTimeout(function(){ 
                message.channel.send(gen)
            }, 10000)
        } else if (arg1 === word) {
            var randomAnswer = answersnumbers[Math.floor(Math.random() * answers.length)];
            const loadingGen = new Discord.MessageEmbed()
                .setColor('#1F136B')
                .setTitle('En train de générer.')
                .setDescription("Merci d'attendre 10s")
                .setFooter("Dev by Kama")
            const gen = new Discord.MessageEmbed()
                .setColor('#1F136B')
                .setTitle('Votre `word` généré.')
                .setDescription('Gen.')
                .addFields(
                    { name:"Votre génération", value:(randomAnswer)}
                )
                .setFooter("Dev by Kama")
            message.channel.send(loadingGen).then(msg => {
                msg.delete({ timeout: 10000 })
            })
            setTimeout(function(){ 
                message.channel.send(gen)
            }, 10000)
        }
    }
} 