module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async  execute(client, message, args) {
        if(message.member.permissions.has("MANAGE_MESSAGES"))
	if (!args[0]) return message.reply("Veuillez entrer le nombre de messages à supprimer !");

        if (isNaN(args[0])) return message.reply("Veuillez entrer un vrai nombre !");

        if (args[0] > 100) return message.reply("Vous ne pouvez pas supprimer plus de 100 messages !");
        
        if (args[0] < 1) return message.reply("Vous devez supprimer au moins un message !");

	deleteCount = parseInt(args[0]);    
        await message.channel.messages.fetch({limit: deleteCount}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
    }
}
