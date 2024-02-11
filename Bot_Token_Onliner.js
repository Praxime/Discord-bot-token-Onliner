const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds],
});

client.login(
  "Put your Bot token here");

process.title = `Your Bot is Enabled and Online!`;
console.log("Your bot is surely onlined!")
console.log("By praxime")
