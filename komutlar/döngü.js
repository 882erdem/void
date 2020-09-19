const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<:x_x:751923344407789579>| Döngüyü ayarlayabilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<:x_x:751923344407789579>| Şu anda hiçbir müzik çalmamaktadır!` }})
const dongu = client.player.getQueue(message.guild.id).repeatMode;
if(dongu){
client.player.setRepeatMode(message.guild.id, false);
return message.channel.send({embed: {color: FynxDogru, description: `<a:tik:751910144996016200>| Döngü deaktif edildi!` }})
    } else {
client.player.setRepeatMode(message.guild.id, true);
return message.channel.send({embed: {color: FynxDogru, description: `<a:tik:751910144996016200>| Döngü aktif edildi!` }})
    }
};

module.exports.config = {
    name: "döngü",
    aliases: []
};
