const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<:x_x:751923344407789579>| Duraklatılan bir müziği devam ettirebilmek için bir ses kanalında olmanız gerekmektedir!` }})
const sarki = await client.player.resume(message.guild.id);
if(!sarki) return message.channel.send({embed: {color: FynxHata, description: `<:x_x:751923344407789579>| Şu anda hiçbir müzik çalmamaktadır!` }})
message.channel.send({embed: {color: FynxDogru, description: `<a:tik:751910144996016200>| \`${sarki.name}\` adlı müzik devam ettiriliyor.` }})
};

module.exports.config = {
    name: "devam",
    aliases: ["devamet", "devam-et"]
};