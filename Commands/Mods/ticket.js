var num = '0';

module.exports = {
    name:"ticket",
    execute(client, message, args, Discord){
        num++;
        const ch = message.guild.channels.cache.find(ch => ch.name === message.author.id)
        if(ch) return message.channel.send("You already have a ticket opened.")
        let ticketCategory = client.channels.cache.find(c => c.name == "Ticket" && c.type == "category");
        message.guild.channels.create("ticket-" + num + `-${message.member.displayName}`, {
            type: "text",
            setParent: ticketCategory,
            permissionOverwrites : [
                {
                    id : message.guild.id,
                    deny : ['VIEW_CHANNEL']
                },
                {
                    id : message.author.id,
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES']
                }
            ]
        }).then(async channel =>{
            message.reply(`click <#${channel.id}> to view your ticket`)
            channel.send(`${message.author}, welcome to your ticket!`)
        })
    }
}