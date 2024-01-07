const {Telegraf} = require("telegraf")
require("dotenv").config();
const  bot = new Telegraf(process.env.API_KEYS)
bot.command("start",ctx=>{
    ctx.reply("سلام سلام خوش اومدی ...");
    ctx.telegram.sendMessage(ctx.chat.id,"اسمت چیه؟...")
})
bot.command("help",ctx=>{
ctx.reply(":برای استفاده از راهنما به تنظیمات برو ")
});
bot.command(["setting","tools"],ctx=>{
    ctx.reply("یک لیست از تنظیمات برات گذاشتم که راحتر گزینها رو انتخاب کنی:")
})
bot.command("ctx",ctx=>{
    const {from,chat,message,botInfo} = ctx;
    console.log(JSON.stringify({from,chat,message,botInfo},null,4));
    ctx.reply("about ctx...")
})
bot.launch()