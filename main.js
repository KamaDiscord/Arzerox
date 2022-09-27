const { Client, Discord, GatewayIntentBits, IntentsBitField } = require('discord.js');
require('dotenv').config();
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
const { Collection } = require('discord.js')
const mongoose = require('mongoose');
const CatLoggr = require('cat-loggr');
const log = new CatLoggr();

//Client dependecies
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.userSettings = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

// For ticket system
let ticketCategory = client.channels.cache.find(c => c.name == "Ticket" && c.type == "category");
client.ticketTranscript = mongoose.model('transcripts', 
    new mongoose.Schema({
        Channel : String,
        Content : Array
    })
)

client.on('message', async(message) => {
    if(message.channel.parentID !== ticketCategory) return;
    client.ticketTranscript.findOne({ Channel : message.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
           console.log('there is data')
           data.Content.push(`${message.author.tag} : ${message.content}`) 
        } else {
            console.log('there is no data')
            data = new client.ticketTranscript({ Channel : message.channel.id, Content: `${message.author.tag} : ${message.content}`})
        }
        await data.save()
            .catch(err =>  console.log(err))
        console.log('data is saved ')
    })

})

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
}).then(()=>{
    console.log("Connected to the database.")
}).catch((err) =>{
    console.log(err);
});

//To push:
//git add *
//git commit -m "commit name"
//git push origin main

//Token
client.login(process.env.DISCORD_TOKEN);
