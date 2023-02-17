
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
    console.log(msg.author.username);
    if(msg.content == 'odoodo'){
        msg.reply(`บูมหน้าหี`)
    }
    if(msg.author.username == 'Onelife'){
        msg.reply(`${msg.author.username}หน้าหี`)
    }
} )


client.login(process.env.TOKEN);