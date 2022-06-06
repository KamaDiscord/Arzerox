module.exports = {
    name:"gens",
    description:"gen item from a list",
    execute(client, message, args, Discord) {
        args = global.args
        console.log(message.content + args)
        const arg1 = args[1];
        if(arg1 === "a"){
            console.log("a")
        } else if(arg1 === "b"){
            console.log("b")
        }
    }
}