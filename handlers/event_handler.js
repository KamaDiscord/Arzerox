const fs = require('fs');

module.exports = (Discord, client) => {
    const init = async () => {
        const load_dir = (dirs) =>{
            const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

            for(const file of event_files){
                
                const event = require(`../events/${dirs}/${file}`);
                if (typeof event?.bind === 'function');
                client.on(event_name, event.bind(null, Discord, client))
            }
        }

        ['client', 'guild'].forEach(e => load_dir(e));
    };
    
init();
}
