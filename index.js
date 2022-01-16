const aoi = require('aoi.js')

const bot = new aoi.Bot({
  token: "OTMyMDY2ODQ1NzUyNzA1MDc2.YeNk5A.4UyuTWkCyhl-8J7GQm1dW-dfeXw",
  prefix:"r.",
  intents: "all"
})
bot.status({
text: "$djseval[client.users.cache.size;yes] usuarios | $djseval[client.guilds.cache.size;yes] Servidores ;)",
type: "WATCHING",
time: 12,
status: "dnd"
})
bot.status({
text: "visitia ",
type: "PLAYING",
time: 12,
status: "idle"
})