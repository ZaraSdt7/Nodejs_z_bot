const {Telegraf} = require("telegraf");
const {message} = require("telegraf/filters")
require("dotenv").config();
const  bot = new Telegraf(process.env.API_KEYS)
bot.on(message("document"),async(ctx)=>{
try {
ctx.sendChatAction("upload_document");
const docid = ctx.message.document.file_id;
const link = await bot.telegram.getFileLink(docid);
ctx.reply("Your link:" + link , {reply_to_message_id:ctx.message.message_id})    
} catch (error) {
   ctx.reply(error?.message??error.description??"some error") 
}    
})
bot.on(message("photo"),async(ctx)=>{
try {
ctx.sendChatAction("upload_photo");
const photoid = ctx.message.photo[0].file_id;
const link = await bot.telegram.getFileLink(photoid);
ctx.reply("Your link:" + link , {reply_to_message_id:ctx.message.message_id})   
} catch (error) {
   ctx.reply(error?.message??error.description??"some one error")
}   
})
bot.launch()