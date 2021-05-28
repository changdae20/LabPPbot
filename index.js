const Discord = require('discord.js');
const client = new Discord.Client();
const token = require("./token.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!help' || msg.content === '!도움말') {
        msg.channel.send('현재 사용가능한 명령어입니다 : \n\n!ㅇ : 나도그렇게생각해\n!ㄴ : 나는그렇게생각하지않아\n!자라 : 자라\n!오늘의 운세 : 야근?칼퇴?연차?');
    }
    if (msg.content === '!ㅇ') {
        msg.delete();
        msg.channel.send('나도그렇게생각해');
    }
    if (msg.content === '!ㄴ') {
        msg.delete();
        msg.channel.send('나는그렇게생각하지않아');
    }
    if (msg.content === '!자라') {
        msg.delete();
        msg.channel.send('자라');
    }
    if (msg.content === "!오늘의 운세"){
        var value = Math.random();
        if(value < 0.65)
            msg.channel.send("슬프네요.. 오늘은 실험결과가 좋지않아 야근을 해야할 것 같아요..");
        else if(value < 0.85)
            msg.channel.send("와! 오늘은 교수님과 박사님이 안계셔요! 칼퇴할 수 있어요.");
        else if(value < 0.99)
            msg.channel.send("오늘의 대박! 오늘은 연차를 내서 집에서 쉴 수 있어요.");
        else
            msg.channel.send("오늘 드디어 퀠을 하드클 했는데 B클이네요...");
    }
});

client.login(token.token);