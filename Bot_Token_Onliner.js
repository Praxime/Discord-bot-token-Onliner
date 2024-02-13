const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds],
});

client.login(
  "Put your Bot token here");

client.once('ready', () => {
  process.title = `Your bot is Online!`;
console.log(`Logged in as ${client.user.tag}!`);
console.log("Your bot is surely onlined!")
console.log("By praxime")
})
