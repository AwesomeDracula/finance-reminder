const {Telegraf} = require("telegraf");

const BOT_TOKEN = "5377677646:AAHzf4F7YX3vprwzKJVPXRxEwTpQunZjv-Y";

const bot = new Telegraf(BOT_TOKEN);

// const chat_Id = 5076419767;

const sendMessage = (chatId, message) => {
  bot.telegram.sendMessage(chatId, message);
};

module.exports = {
  sendMessage: sendMessage,
};
