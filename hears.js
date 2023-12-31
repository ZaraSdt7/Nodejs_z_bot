const {Telegraf} = require("telegraf")
require("dotenv").config();
const  bot = new Telegraf(process.env.API_KEYS)
bot.hears(["گاو","احمق","بیشعور","عن آقا","حیوان"],ctx=>{
    ctx.deleteMessage();
    ctx.reply(+ctx.chat.id,"ادب داشته باش 🤨")
})
