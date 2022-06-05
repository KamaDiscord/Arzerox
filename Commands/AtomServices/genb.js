module.exports = {
    name:"gens",
    description:"gen item from a list",
    execute(client, message, args, Discord) {
        const splitargs = message.content.trim().split(' ');
        console.log(args)
        console.log(splitargs)
        const arg1 = splitargs[1];
        if(arg1 === "a"){
            console.log("a")
        } else if(arg1 === "b"){
            console.log("b")
        }
    }
}