// const TG = require('telegram-bot-api')
// const fetch = require('node-fetch')

// const api = new TG({
//     token: "1689127461:AAF50wwFnlT7ep0B1Mm4eDfxtQRZL-WBTJo"
// })

// api.getMe()
// .then(console.log)
// .catch(console.err)

// api.sendMessage()
// .then(console.log)
// .catch(console.err)

const TelegramBot = require('node-telegram-bot-api');
const token = '1689127461:AAF50wwFnlT7ep0B1Mm4eDfxtQRZL-WBTJo';
const bot = new TelegramBot(token, {polling: true});

bot.sendMessage('1689127461', 'Received your message: Hi there');
