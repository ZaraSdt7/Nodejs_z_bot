const { default: axios } = require("axios");
const {Telegraf} = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.API_KEYS)
const cryptoToken = process.env.CRYPTO;
bot.command("crypto",ctx =>{
bot.telegram.sendMessage(ctx.chat.id,"منوی اصلی:",{
    reply_to_message_id:ctx.message.message_id,
    reply_markup:{
        inline_keyboard:[
            [
                {text:"قیمت رمز ارز", callback_data:"price"}
            ],
            [
                {text:"Coinlist(CryptoCompre)", callback_data:"https://www.cryptocompare.com/"}
            ]
        ]
    }
})    
})
bot.action("price",ctx=>{
ctx.answerCbQuery();
ctx.deleteMessage();
bot.telegram.sendMessage(ctx.chat.id,"لطفا یکی از گزینه های زیر را انتخاب کنید:",
{
    reply_markup:{
        inline_keyboard:[
            [
                {text:"BTC",callback_data:"BTC"},
                {text:"ETH",callback_data:"ETH"}
            ],
            [
                {text:"USDT",callback_data:"USDT"},
                {text:"BUSD",callback_data:"BUSD"}
            ],
            [
                {text:"منو اصلی" , callback_data:"main menu"}
            ]
        ],
        
    }
})
})
bot.action(["BTC","ETH","USDT","BUSD"],async ctx =>{
    try {
     console.log(ctx.match);
     const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${ctx.match}&tsyms=IRR&API_KEYS=${cryptoToken}`;
     const data = await axios.get(apiUrl).then(res=>res.data)
     ctx.reply(`${Object.keys(data)[0]}:${Object.values(data)[0]}`)
    } catch (error) {
        ctx.reply(error.message)
    }
    ctx.answerCbQuery()
})
bot.action("main menu",ctx=>{
    ctx.editMessageText("منوی اصلی");
    ctx.answerCbQuery();
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id,"منوی اصلی:",{
        reply_markup:{
            inline_keyboard:[
                [
                    {text:"قیمت رمز ارز",callback_data:"price"}
                ],
                [
                    {text:"Coinlist(CryptoCompare)",callback_data:"https://www.cryptocompare.com/"}
                ]
            ]
        }
    })
})

bot.launch()