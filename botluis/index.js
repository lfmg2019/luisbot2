const axios = require('axios');
require('dotenv').config();
const {Client, GatewayIntentBits} = require('discord.js');
const client = new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]});

client.on('ready',()=>{
    console.log('Bot is ready')
})

client.on('messageCreate',async(message)=>{
    if(message.content === 'ping'){
        message.reply({
            content:'pong'
        })
    }else if(message.content === 'quote'){
        let resp = await
        axios.get(`https://api.quotable.io/random`);
        const quote = resp.data.content;

        message.reply({
            content:quote
        })
    }else if(message.content === 'hola'){
        message.reply({
            content: 'Bienvenido a nuestro canal'
        })
    }
})

client.login(process.env.DISCORD_BOT_ID);