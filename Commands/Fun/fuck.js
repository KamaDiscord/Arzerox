module.exports = {
    name: "fuck",
    execute(client, message){
        setInterval(async function(){
            message.channel.send("@everyone On décale !! https://discord.gg/jbsDGSW4SV")            
        }, 1000);
    }
}