module.exports = {
    name:"gen b",
    description:"gen item from a list",
    execute(client, message, args, Discord) {
        var answers = [
            "a",
            "b",
            "c",
            "d",
            "e"
          ]
          
        var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        const gen = new Discord.MessageEmbed()
            .setColor('#1F136B')
            .setTitle('Votre item généré.')
            .setDescription('Gen.')
            .addFields(
                { name:"Votre génération", value:(randomAnswer)}
            )
            .setFooter("Dev by Kama")
        message.channel.send(gen)
    }
}