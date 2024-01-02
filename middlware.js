const {Telegraf} = require("telegraf")
require("dotenv").config();
const  bot = new Telegraf(process.env.API_KEYS);
bot.use((ctx,next)=>{
const msg = ctx.message.text;
if(msg == "zara") return next();
})
bot.hears("zara",(ctx)=>{
    ctx.reply("welcome zara")
})
bot.launch();