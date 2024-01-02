const {Telegraf} = require("telegraf")
require("dotenv").config();
const  bot = new Telegraf(process.env.API_KEYS);
bot.on("photo",ctx=>{
    ctx.reply(ctx.chat.username,"عکس فرستادی شیطون!😋")
})
bot.on("voice",ctx=>{
    ctx.reply(ctx.chat.username,"وویس فرستاد گوش کنین!😃")
})
bot.on("new_chat_members",ctx=>{
    const username = ctx.message.new_chat_member.username?? ctx.message.new_chat_member.first_name
    ctx.reply(ctx.chat.first_name , "خوش اومدی عزیزم")
})

bot.launch();