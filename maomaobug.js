const discord = require('discord.js');
const client = new discord.Client();
const token = process.env.TOKEN;
const prefix = '!MMB ';

function getLogText() {
    let d = new Date();
    let hour = d.getHours() + 8;
    if (hour >= '24')
       hour -= 24;
    logMessage = "[" + hour + ":" + d.getMinutes() + ":" + d.getSeconds() + "] [Log] ";
    return logMessage;
}

client.on("ready", () => {
    console.log(getLogText() + "Bot Working :D");
    //client.channels.get("").send(getLogText() + "Bot Working :D");
    client.user.setActivity("Developed By Kamilslo :3");
});

client.on("message", (message) => {

    let command = message.content.split(" ")[1];
    newCommand = command.toLowerCase();
    let input = message.content.split(" ")[2];
    let args = message.content.split(" ").slice(1);
    console.log(command);
    console.log(input);
    console.log(args);

    if (message.author.bot) return;

    if (message.content.startsWith(prefix)) {
        if (newCommand === "hello") {
            console.log(getLogText() + "[Hello] By " + message.author.username.toString());
            message.reply("Hello :3");
        }
    }
});
client.login(token);
