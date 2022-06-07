module.exports = {
    name:"gens ",
    description:"gen item from a list",
        /**
     * @param {Array[]} args Arguments splitted by spaces after the command name
     */
    execute(client, message, args, Discord) {
        const splitargs = message.content.trim().split(' ');
        console.log(args[0])
        const service = args[0]
        console.log(service);
        message.channel.send(`Looking for \`${args[0]}\`.`)
    }
}