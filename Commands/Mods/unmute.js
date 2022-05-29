module.exports = {
    name: 'unmute',
    description: "Unmutes a member",
    execute(client, message, args) {
        if (message.member.permissions.has("MANAGE_ROLES")) {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Membre');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> a bien été unmute !`);
            } else {
                message.reply("Je n'ai pas pu trouver cet utilisateur !")
            }
        } else {
            message.reply("Vous n'avez pas les permissions nécéssaires !")
        }
    }
}