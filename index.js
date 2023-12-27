const {Telegraf} = require("telegraf")
require("dotenv").config();
const  bot = new Telegraf(process.env.API_KEYS)
bot.start((ctx)=>{
    ctx.reply("welome dear...");
    ctx.telegram.sendMessage(ctx.chat.id,"Hi welcome...")
})
bot.launch()