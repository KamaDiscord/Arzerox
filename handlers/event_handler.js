const fs = require('fs');

module.exports = (Discord, client) => {
    const load_dir = (dirs) =>{
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

        for(const file of event_files){
            if (typeof event?.bind === 'function');
            const event = require(`../events/${dirs}/${file}`);
            client.on(event_name, event.bind(null, Discord, client))
        }
    }

    ['client', 'guild'].forEach(e => load_dir(e));
}
