const TelegramBot = require('node-telegram-bot-api');
const token = '1689127461:AAF50wwFnlT7ep0B1Mm4eDfxtQRZL-WBTJo';
const bot = new TelegramBot(token, {polling: true});

var cron = require('node-cron');
 
cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
  bot.sendMessage('1474733292', 'Hello, there! Testing here')
  var photoUrl = __dirname+'\\pic1.jpg';
  console.log(photoUrl)
//   bot.sendPhoto({
//     chatId: '1474733292',
//     caption: 'Test caption',
//     photo: photoUrl
//   }, function(err, msg) {
//     console.log(err);
//     console.log(msg);
//   });
    bot.sendPhoto('1474733292', photoUrl, {caption: "I'm a bot!"})
    .then(console.log)
    .catch(console.error)
});


