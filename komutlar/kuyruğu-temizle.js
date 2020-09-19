const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<:x_x:751923344407789579>| Kuyruğu temizleyebilmek için bir ses kanalında olmanız gerekmektedir!` }});
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<:x_x:751923344407789579>| Şu anda hiçbir müzik çalmamaktadır!` }})
client.player.clearQueue(message.guild.id);
message.channel.send({embed: {color: FynxDogru, description: `<a:tik:751910144996016200>| Kuyruk başarılı bir şekilde temizlendi!` }})
};

module.exports.config = {
    name: "kuyruğu-temizle",
    aliases: ["kuyruk-temizle"]
};
