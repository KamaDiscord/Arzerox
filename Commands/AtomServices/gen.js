module.exports = {
    name:"gen a",
    description:"gen item from a list",
    execute(client, message, args, Discord) {
        var answers = [
            "1",
            "2",
            "3",
            "4",
            "5"
          ]
          
        var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
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
         }, 10000);
    }
} 