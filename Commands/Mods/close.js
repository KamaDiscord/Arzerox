
module.exports = {
    name : 'close',
    execute (client, message, args, Discord) {
        let ticketCategory = client.channels.cache.find(c => c.name == "Ticket" && c.type == "category");
        let transcriptID = client.channels.cache.find(c => c.name == "transcript" && c.type == "text");
        if(!ticketCategory){
            message.guild.channels.create("Ticket", {
                type: "category",
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
            })
            if(!transcriptID){
                message.guild.channels.create("transcript", {
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
                })
                if(message.channel.parentID !== ticketCategory.id) return message.channel.send('You can only use this command in a ticket!');
                const transcriptChannel = message.guild.channels.cache.get(transcriptID.id)
                message.channel.send('Deleting ticket in 5 seconds.....')
                setTimeout(() => {
                    message.channel.delete().then(async ch=> {
                        client.ticketTranscript.findOne({ Channel : ch.id }, async(err, data) => {
                            if(err) throw err;
                            if(data) {
                                fs.writeFileSync(`../${ch.id}.txt`, data.Content.join("\n\n"))
                                transcriptChannel.send(`${message.guild.members.cache.get(ch.name).user.username}'s ticket have been closed.`)
                                await transcriptChannel.send(new MessageAttachment(fs.createReadStream(`../${ch.id}.txt`)));
                                client.ticketTranscript.findOneAndDelete({ Channel : ch.id })
                            }
                        })
                    })
                }, 5000)
            }
            }
    }
}