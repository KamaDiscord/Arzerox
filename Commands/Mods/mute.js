const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "Mutes a member",
    execute(client, message, args) {
        if (message.member.permissions.has("MANAGE_ROLES")) {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Membre');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');

                let memberTarget = message.guild.members.cache.get(target.id);

                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> a bien été mute !`);
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> a été mute pour ${ms(ms(args[1]))} !`);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));
            } else {
                message.reply("Je n'ai pas pu trouver cet utilisateur !")
            }
        } else {
            message.reply("Vous n'avez pas les permissions nécéssaires !")
        }
    }
}