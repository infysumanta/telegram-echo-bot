const { config } = require("dotenv");
const Telegraf = require("telegraf");
config();
const bot = new Telegraf(process.env.TOKEN);

const helpMessage = `
Say something to me
/start - start the bot
/help - command reference
/echo - say "You said echo"
/echo <msg> - echo a message
`;

bot.start((ctx) => {
  ctx.reply("Hi, I am Echo Bot!");
  ctx.reply(helpMessage);
});

bot.help((ctx) => {
  ctx.reply(helpMessage);
});

bot.command("echo", (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" ");
  let message = "";
  if (inputArray.length == 1) {
    message = "You said echo";
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
  }
  ctx.reply(message);
});

bot.launch();
