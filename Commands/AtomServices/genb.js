module.exports = {
    name:"gens",
    description:"gen item from a list",
    execute(client, message, args, Discord) {
        const splitargs = message.content.trim().split(' ');
        const arg1 = splitargs[0];
        if(arg1 === "a"){
            message.channel.send("a")
        } else if(arg1 === "b"){
            message.channel.send("b")
        }
    }
}