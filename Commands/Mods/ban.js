module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(client, message, args){
        if(message.member.permissions.has("BAN_MEMBERS")){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send(`<@${memberTarget.user.id}> à bien été banni !`);
        }else{
            message.channel.send("Vous n'avez pas pu bannir ce membre !");
        }}else{
            message.reply("Vous n'avez pas les permissions nécéssaires !")
        }
    }
}