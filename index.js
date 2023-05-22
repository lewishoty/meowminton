require("dotenv").config();
const axios = require("axios");
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TOKEN;

// Created instance of TelegramBot
const bot = new TelegramBot(token, {
  polling: true,
});

const getPost = (text) => {
  axios
    .get(
      "https://api.telegram.org/bot6219383439:AAHpWp7eOb0c1KaoDyyuS7JGVq_rwv10B-c/sendMessage?chat_id=-1001765394563&text=" +
        text
    )
    .then((res) => console.log(res))
    .catch((err) => {
      console.log("Error: ", err.message);
    });
};

const getFact = async () => {
  const fact = await axios.get("https://catfact.ninja/fact");
  const send = () =>
    axios
      .get(
        "https://api.telegram.org/bot6219383439:AAHpWp7eOb0c1KaoDyyuS7JGVq_rwv10B-c/sendMessage?chat_id=-1001765394563&text=" +
          fact.data.fact
      )
      .then((res) => console.log(res))
      .catch((err) => {
        console.log("Error: ", err.message);
      });

  await send();
};

bot.onText(/\/list/, (msg) => {
  const chatId = msg.chat.id;
  const catOwner = 253374216;

  if (msg.from.id !== catOwner) {
    bot.sendMessage(chatId, "I only listen to polulu");
    return;
  }

  getPost(encodeURIComponent(msg.text.slice(5)));
  bot.sendMessage(chatId, "Sent meows");
});

bot.onText(/\/catfact/, (msg) => {
  getFact();
});
