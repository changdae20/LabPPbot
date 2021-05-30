const Discord = require('discord.js');
const client = new Discord.Client();
const token = require("./token.json");

function check_sleep(text){
    let corpus = ["졸려","잠와","피곤해","피곤행","졸령","잘까","일어남","기상","자야지","자기","졸리다","피곤하","자야징","잘까","아프다","자려고","잘라고","졸리네","자야하","자러감","개피곤","잔다","자야하나","자야겠다","힘들다","힘드네","힘드넹","어지럽","아프네","아프넹","아파","자러간다","자러가기"];
    for(let i=0; i<corpus.length;i++){
        if(text.indexOf(corpus[i])!=-1) return true;
    }
    return false;
}

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
    if (msg.content === '!자라' ) {
        msg.delete();
        msg.channel.send('자라');
    }
    if(check_sleep(msg.content)){
        setTimeout(function(){
            msg.channel.send('자라');
        },3000);
    }
    if(msg.content.substring(0,5)==="!say "){
        if(msg.member.user.username == "관성" && msg.member.user.discriminator=="7730"){
            msg.delete();
            msg.channel.send(msg.content.substring(5,msg.content.length));
        }
    }

});

client.login(token.token);