const discord = require('discord.js');
const client = new discord.Client();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

//const fs = require("fs");
//client.msgs = require("./msgs.json");

function checkIgnore(temp) {
    if (temp === '506453997071106049' || temp === '581494291239534601' || temp === '578581402006585384' || temp === '581491908379934731' || temp === '586946271063834624' /**/ || temp === '206003875092627456' || temp === '554621356679888897')
        return false;
    else 
        return true;
}

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

    client.channels.get("503586373744459818").send(getLogText() + "Bot Working :D");

    client.user.setActivity("Developed By lsoavneduy :3");
});

client.on("message", (message) => {

    let input1 = message.content.split(" ")[1];
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    newCommand = command.toLowerCase();
    let args = message.content.split(" ").slice(1);

    if (message.author.bot) return;
    
    if (!(message.author.bot)) {
        client.channels.get("588076718699315200").send(message.attachments[0]);
    }

    if (message.content.startsWith(prefix)) {

        let output = null;
        let a = 0;
        let b = 0;

        if (newCommand === "help") {
            console.log(getLogText() + "[Help] By " + message.author.username.toString());
            client.channels.get("503586373744459818").send(getLogText() + "[Help] By " + message.author.username.toString());
            message.reply("Here Are The Command :3 \n !CNMB->Help \n !CNMB->Hello \n !CNMB->Rubbish @Username \n !CNMB->PromoteExtra @Username \n !CNMB->PromoteMember @Username \n !CNMB->RollEgg \n !CNMB->RollEgg10 \n !CNMB->RollEgg100 \n !CNMB->RollEgg1000");
        }

        if (newCommand === "hello") {
            console.log(getLogText() + "[Hello] By " + message.author.username.toString());
            client.channels.get("503586373744459818").send(getLogText() + "[Hello] By " + message.author.username.toString());
            message.reply("Hello :3");
        }
        
        if (newCommand === "input") {
            console.log(getLogText() + "[Input] By " + message.author.username.toString());
            client.channels.get("503586373744459818").send(getLogText() + "[Input] By " + message.author.username.toString());
            message.reply(input1);
        }

        if (newCommand === "rubbish") {
            let output = false;
            console.log(getLogText() + "[Rubbish] By " + message.author.username.toString());
            client.channels.get("503586373744459818").send(getLogText() + "[Rubbish] By " + message.author.username.toString());
            let target = message.guild.member(message.mentions.users.first());
            if (target.id === '206003875092627456' && output === false) {
                message.channel.send("No! I disagree with you. " + target + " is a Handsome People :3");
                output = true;
            }
            if (target.id === '150959015197802505' && output === false) {
                message.channel.send("No! I disagree with you. " + target + " is very Cute :3");
                output = true;
            }
            if (output === false)
                message.channel.send("Yeah! I agree with you. " + target + " is a Rubbish :3");
        }

        if (newCommand === "promoteextra") {
            console.log(getLogText() + "[PromoteExtra] By " + message.author.username.toString());
            client.channels.get("503586373744459818").send(getLogText() + "[PromoteExtra] By " + message.author.username.toString());
            let role = message.guild.roles.find(role=> role.id === '485478021327880232');
            let target = message.guild.member(message.mentions.users.first());
            target.addRole(role).then(member => {
                message.reply("Done :3").catch(console.error);
            });
        }

        if (newCommand === "promotemember") {
            console.log(getLogText() + "[PromoteMember] By " + message.author.username.toString());
            client.channels.get("503586373744459818").send(getLogText() + "[PromoteMember] By " + message.author.username.toString());
            if (message.member.roles.find('id', '485478723840245761')) {
                let role = message.guild.roles.find(role=> role.id === '485477125042864138');
                let target = message.guild.member(message.mentions.users.first());
                target.addRole(role).then(member => {
                    message.reply("Done :3").catch(console.error);
                });
            }
            else {
                message.reply("You Don't Have Permission To Do That :3").catch(console.error);
            }
        }
        
        if (newCommand === "pekopeko") {
            console.log(getLogText() + "[PekoPeko] By " + message.author.username.toString());
            client.channels.get("503586373744459818").send(getLogText() + "[PekoPeko] By " + message.author.username.toString());
            message.member.voice.voiceChannel.join().then(connection => {
                client.channels.get("503586373744459818").send(getLogText() + "Connected!!").catch(console.error);
            });
        }

        if (newCommand === "rollegg") {
            console.log(getLogText() + "[RollEgg] By " + message.author.username.toString());
            client.channels.get("503586373744459818").send(getLogText() + "[RollEgg] By " + message.author.username.toString());
            let number = Math.floor(Math.random() * 99) + 1;
            if (number > 0 && number <= 94) {
                message.reply("R :3");
            }
            if (number > 94 && number <= 97) {
                message.reply("SR :3");
            }
            if (number > 97 && number <= 99) {
                message.reply("SSR :3");
            }
            if (number === 100) {
                message.reply("UR :3");
            }
        }

        if (newCommand === "rollegg10") {
            console.log(getLogText() + "[RollEgg10] By " + message.author.username.toString());
            client.channels.get("503586373744459818").send(getLogText() + "[RollEgg10] By " + message.author.username.toString());
            for (a = 0; a < 10; a++) {
                let number = Math.floor(Math.random() * 99) + 1;
                if (number > 0 && number <= 90) {
                    if (output === null)
                        output = "R";
                    else
                        output += ", R";
                }
                if (number > 90 && number <= 95) {
                    if (output === null)
                        output = "SR";
                    else
                        output += ", SR";
                }
                if (number > 95 && number <= 98) {
                    if (output === null)
                        output = "SSR";
                    else
                        output += ", SSR";
                }
                if (number > 98 && number <= 100) {
                    if (output === null)
                        output = "UR";
                    else
                        output += ", UR";
                }
            }
            message.reply(output);
        }

        if (newCommand === "rollegg100") {
            console.log(getLogText() + "[RollEgg100] By " + message.author.username.toString());
            client.channels.get("503586373744459818").send(getLogText() + "[RollEgg100] By " + message.author.username.toString());
            for (a = 0; a < 100; a++) {
                let number = Math.floor(Math.random() * 99) + 1;
                if (number > 0 && number <= 90) {
                    if (output === null)
                        output = "R";
                    else
                        output += ", R";
                }
                if (number > 90 && number <= 95) {
                    if (output === null)
                        output = "SR";
                    else
                        output += ", SR";
                }
                if (number > 95 && number <= 98) {
                    if (output === null)
                        output = "SSR";
                    else
                        output += ", SSR";
                }
                if (number > 98 && number <= 100) {
                    if (output === null)
                        output = "UR";
                    else
                        output += ", UR";
                }
            }
            message.reply(output);
        }

        if (newCommand === "rollegg1000") {
            console.log(getLogText() + "[RollEgg1000] By " + message.author.username.toString());
            client.channels.get("503586373744459818").send(getLogText() + "[RollEgg1000] By " + message.author.username.toString());
            for (b = 0; b < 4; b++) {
                for (a = 0; a < 250; a++) {
                    let number = Math.floor(Math.random() * 99) + 1;
                    if (number > 0 && number <= 90) {
                        if (output === null)
                            output = "R";
                        else
                            output += ", R";
                    }
                    if (number > 90 && number <= 95) {
                        if (output === null)
                            output = "SR";
                        else
                            output += ", SR";
                    }
                    if (number > 95 && number <= 98) {
                        if (output === null)
                            output = "SSR";
                        else
                            output += ", SSR";
                    }
                    if (number > 98 && number <= 100) {
                        if (output === null)
                            output = "UR";
                        else
                            output += ", UR";
                    }
                }
                message.reply(output);
                output = null;
            }
        }
        
        if (newCommand === "newrollegg" && input1 <= 100000) {
            console.log(getLogText() + "[NewRollEgg] By " + message.author.username.toString());
            client.channels.get("503586373744459818").send(getLogText() + "[NewRollEgg] By " + message.author.username.toString());
            let ERR = 0, R = 0, SR = 0, SSR = 0, UR = 0;
            for (a = 0; a < input1; a++) {
                let number = Math.floor(Math.random() * 999) + 1;
                if (number > 0 && number <= 898)
                    R++;
                if (number > 898 && number <= 988)//10%
                    SR++;
                if (number > 988 && number <= 998)//1%
                    SSR++;
                if (number > 998 && number <= 999)//0.001%
                    UR++;
                if (number <= 0 || number > 999)
                    ERR++;
            }
            output = "ERR:" + ERR + ", R:" + R + ", SR:" + SR + ", SSR:" + SSR + ", UR:" + UR;
            message.reply(output);
            output = null;
        }
    }
});

client.on('guildMemberAdd', member => {
    console.log(getLogText() + "[JoinServer] By " + member.toString());
    client.channels.get("503586373744459818").send(getLogText() + "[JoinServer] By " + member.toString());
    client.channels.get("496640081331748864").send("Welcome" + member.toString() + "To This Discord Server :3");
    client.channels.get("496671228023537674").send(member.toString() + "You Can Enter !CNMB->PromoteExtra @Username To Get Your First Permission In This Channel After 10mins :3");
});

client.on('voiceStateUpdate', (oldMember, newMember) => {

    let newMemberChannel = newMember.channel;
    let oldMemberChannel = oldMember.channel;

    if (oldMemberChannel === undefined && newMemberChannel !== undefined && checkIgnore(newMemberChannel.id) && checkIgnore(oldMember.member.id) && checkIgnore(newMember.member.id)) {
        console.log(getLogText() + "[JoinVoiceChannel] [" + newMember.member.displayName + "] " + "[" + newMemberChannel.name + "]");
        client.channels.get("503586373744459818").send(getLogText() + "[JoinVoiceChannel] [" + newMember.member.displayName + "] " + "[" + newMemberChannel.name + "]");
        client.channels.get("504358200406048769").send(getLogText() + newMember.member.displayName + " Joined Voice Channel [ " + newMemberChannel.name + " ] :3");
    }
    else if (oldMemberChannel !== undefined && newMemberChannel === undefined && checkIgnore(oldMemberChannel.id) && checkIgnore(oldMember.member.id) && checkIgnore(newMember.member.id)) {
        console.log(getLogText() + "[LeaveVoiceChannel] [" + newMember.member.displayName + "] " + "[" + oldMemberChannel.name + "]");
        client.channels.get("503586373744459818").send(getLogText() + "[LeaveVoiceChannel] [" + newMember.member.displayName + "] " + "[" + oldMemberChannel.name + "]");
        client.channels.get("504358200406048769").send(getLogText() + newMember.member.displayName + " Leave Voice Channel [ " + oldMemberChannel.name + " ] :3");
    }
    else if (oldMemberChannel !== newMemberChannel && checkIgnore(oldMemberChannel.id) && checkIgnore(newMemberChannel.id) && checkIgnore(oldMember.member.id) && checkIgnore(newMember.member.id)) {
        console.log(getLogText() + "[SwitchVoiceChannel] [" + newMember.member.displayName + "] [" + oldMemberChannel.name + "] [" + newMemberChannel.name + "]");
        client.channels.get("503586373744459818").send(getLogText() + "[SwitchVoiceChannel] [" + newMember.member.displayName + "] [" + oldMemberChannel.name + "] [" + newMemberChannel.name + "]");
        client.channels.get("504358200406048769").send(getLogText() + newMember.member.displayName + " Switch Voice Channel From [ " + oldMemberChannel.name + " ] To [ " + newMemberChannel.name + " ] :3");
    }
});

client.login(token);





{
    //    if (message.content.startsWith(prefix + "JJ")) {
    //        message.channel.send({ files: [""] });
    //    }

    /*
        if (message.content.startsWith(prefix + "Set")) {
            editedmessage = message.content.slice(9);
    
            client.msgs[message.author.username] = {
                message: editedmessage
            }
            fs.writeFile("./msgs.json", JSON.stringify(client.msgs, null, 4), err => {
                if (err) throw err;
                message.channel.send("Message Set!");
            });
        }
    
        if (message.content.startsWith(prefix + "Get")) {
            let _message = client.msgs[message.author.username].message;
            message.channel.send(_message);
        }
    */
    //Emoji
    /*
        if (message.content.toLowerCase() == "no" || message.content.toLowerCase() == "nope") {
            temp = message.content;
            message.delete();
            message.channel.send(temp, {
                files: [
                    "./Emoji/No.png"
                ]
            });
        }
    */
}
