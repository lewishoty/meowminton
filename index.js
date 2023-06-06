const TelegramBot = require("node-telegram-bot-api");
const token = "6219383439:AAHpWp7eOb0c1KaoDyyuS7JGVq_rwv10B-c";
const bot = new TelegramBot(token, { polling: true });

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

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, "Ill have the tuna. No crust.");
});
