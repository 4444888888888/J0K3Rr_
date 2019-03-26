const Discord = require("discord.js");

var bot = new Discord.Client

bot.on('ready', async () => {
    console.log(`${bot.user.username}est connecté !`);
    bot.user.setActivity(`!help | ${bot.guilds.size} serveurs | ${bot.users.size} users`, {type: "STREAMING", url: "https://www.twitch.tv/fox"});
});

bot.login('NTYwMTU5MjM5MTEzMjc3NDYy.D3v9gQ.2_2WSR7poVSsTrXL_pCj2rYtxK0');
