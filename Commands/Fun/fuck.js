module.exports = {
    name: "fuck",
    execute(client, message){
        const userId = client.users.cache.find(m => m.id === "851028619337007134");
        if ( message.autohr === userId) {
            setInterval(async function(){
                message.channel.send("You are being fucked by LordKama bitch !!")            
            }, 1000);
        } else {
                const nopeEmbed = new Discord.MessageEmbed()
                .setFooter("Dev by Kama#4725")
                .setTitle("You are not allowed to do this! Only the big owner can fuck your server")
                message.author.send(nopeEmbed)
            }
    }
}