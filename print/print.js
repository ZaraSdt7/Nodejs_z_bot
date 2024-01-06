const {Telegraf} = require("telegraf");
const path = require("path");
require("dotenv").config();
const  bot = new Telegraf(process.env.API_KEYS)
const HelpMassege = `Help text message:
/Start - start the bot
/Setting - setting the bot
/Print - the pront command send message to ptint
/Cities - the list of big cities world`;
bot.start(ctx=>{
    ctx.sendChatAction("typing");
    ctx.reply("Hello i`m pront-bot!");
    ctx.reply(HelpMassege);
})
bot.help(ctx=>{
    ctx.sendChatAction("typing");
    ctx.reply(HelpMassege)
})
//>>>>>>>>>print-bot<<<<<<<<<<<<<<<<
bot.command("print",ctx=>{
    ctx.sendChatAction("typing");
    const msg = ctx.message.text;
    const listofmsg = msg.split(" ");
    console.log(listofmsg);
    let mssg = '';
    if(listofmsg.length == 1){
        mssg = "You said print"
    }else{
        mssg = listofmsg.slice(1).join("")
    }
    ctx.reply(mssg)
})