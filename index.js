const TelegramBot = require('node-telegram-bot-api');
const token = 'token_id';
const bot = new TelegramBot(token, {polling: true});

var cron = require('node-cron');
var chat_id = 'contact person id by telegram-bot'

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
  bot.sendMessage(chat_id, 'Hello, there! Testing here')
  var photoUrl = __dirname+'\\pic1.jpg';
  console.log(photoUrl)
//   bot.sendPhoto({
//     chatId: chat_id,
//     caption: 'Test caption',
//     photo: photoUrl
//   }, function(err, msg) {
//     console.log(err);
//     console.log(msg);
//   });
    bot.sendPhoto(chat_id, photoUrl, {caption: "I'm a bot!"})
    .then(console.log)
    .catch(console.error)
});


