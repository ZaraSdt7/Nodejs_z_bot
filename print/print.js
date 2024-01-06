const {Telegraf} = require("telegraf");
const path = require("path");
const { createReadStream } = require("fs");
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
//>>>>>>>>>cities-bot<<<<<<<<<<<<<
bot.command("cities",ctx=>{
    ctx.sendChatAction("typing")
    const cities = `List of Cities:
    /sari - Iran mazandaran
    / Newyork - USA
    /Dubai - AUE
    /Berlin - Germany`;
    ctx.reply(cities);
})
bot.command(["sari","mazandaran"],ctx=>{
    ctx.sendChatAction("upload_photo");
    ctx.sendPhoto({
        source:createReadStream(path.join(__dirname,"cities","sari.jpg"))
    },{
        caption:"This is Sari city in Mazandaran Iran",
        reply_to_message_id:ctx.message.message_id
    })
}),
bot.command(["Newyork","newyork","usa","USA"],ctx=>{
    ctx.sendChatAction("upload_photo");
    ctx.sendPhoto({
        source:createReadStream(path.join(__dirname,"cities","newyork.jpg"))
    },{
        caption:"This is NEWYORK city in USA ",
        reply_to_message_id:ctx.message.message_id
    })
}),
bot.command(["Dubai","dubai","aue","AUE"],ctx=>{
    ctx.sendChatAction("upload_photo");
    ctx.sendPhoto({
        source:createReadStream(path.join(__dirname,"cities","dubai.jpg"))
    },{
        caption:"This is Dubai country",
        reply_to_message_id:ctx.message.message_id
    })
}),
bot.command(["berlin","Berlin","germany","Germani"],ctx=>{
    ctx.sendChatAction("upload_photo");
    ctx.sendPhoto({
        source:createReadStream(path.join(__dirname,"cities","berlin.jpg"))
    },{
        caption:"This is Berlin  Capital city in Germany",
        reply_to_message_id:ctx.message.message_id
    })
})

bot.launch()