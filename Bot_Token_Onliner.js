const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds],
});

client.login(
  "Put your Bot token here");
