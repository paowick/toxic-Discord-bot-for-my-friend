
const { Client,GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client(
    {
        intents:[
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent
            
        ]
    }
);
client.on('ready',()=>{
    console.log("in");
})
client.on('messageCreate',msg=>{
    if(msg.content == 'odoodo'){
        msg.reply(`บูมหน้าหี`)
    }
} )
client.login(process.env.TOKEN);