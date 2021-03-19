const discord = require('discord.js');
const client = new discord.Client();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

client.on("ready", () => {
    console.log(getLogText() + "Bot Working :D");
    //client.channels.get("").send(getLogText() + "Bot Working :D");
    client.user.setActivity("Developed By Kamilslo :3");
});

client.on("message", (message) => {

    let input1 = message.content.split(" ")[1];
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    newCommand = command.toLowerCase();
    let args = message.content.split(" ").slice(1);

    if (message.author.bot) return;

    if (message.content.startsWith(prefix)) {
        if (newCommand === "hello") {
            console.log(getLogText() + "[Hello] By " + message.author.username.toString());
            client.channels.get("503586373744459818").send(getLogText() + "[Hello] By " + message.author.username.toString());
            message.reply("Hello :3");
        }
    }
});
client.login(token);
