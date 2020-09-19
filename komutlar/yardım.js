const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client();
const fynx = require("../ayarlar/bot.json");
 
module.exports.run = (client, message, args) => { 
let pages = [
`**void kullanıcıları bilginize;**\n\n  Yardım menüsünü görmeden önce void music'i kullandığınız için sizlere teşekkür ederiz.\n\n  Umarım botumuzu beğenerek kullanıyorsunuzdur.\n\n  Sizler sayesinde botumuz daha iyi yerlere geliyor.\n\n  Eksiklerimiz veya hatalarımızı bizimle paylaşabilirsiniz. __**eğer botu davet etmek istersen**__ [tıkla](https://discord.com/api/oauth2/authorize?client_id=746803219887292427&permissions=66061056&scope=bot) __**ama davet etmek zorunda değilsin iyi dinlemeler**__`,
"",          
`**void kullanıcı komutları**\n\n` + `\`${fynx.prefix}yardım\`` + `\n<a:kod:748832498821103647>  Bütün komutları ve açıklamaları gösterir. \n\n` + `\`${fynx.prefix}oynat <Şarkı İsmi>\`` +`\n<a:kod:748832498821103647>  Belirtilen isimli şarkıları arar ve bulunduğunuz odaya bağlanıp müziği oynatır. \n\n` + `\`${fynx.prefix}durdur\`` +`\n<a:kod:748832498821103647>  void müzik oynatmayı durdurur ve ses kanalından ayrılır.\n\n ` + `\`${fynx.prefix}atla\`` + `\n<a:kod:748832498821103647>  Oynatılmakta olan müziği atlar. Kuyrukta müzik var ise müzikler sırayla oynatılır. \n\n ` + `\`${fynx.prefix}duraklat\`` +` \n<a:kod:748832498821103647>  Oynatılan olan müziği duraklatır. \n\n ` + `\`${fynx.prefix}devam\`` +`\n<a:kod:748832498821103647>  Duraklatılan müziği devam ettirir.`,
`**void kullanıcı komutları**\n\n` + `\`${fynx.prefix}karıştır\`` +`\n<a:kod:748832498821103647>  Müzik kuyruğundaki müzikleri karıştırır. \n\n ` + `\`${fynx.prefix}döngü\`` +`\n<a:kod:748832498821103647>  Müzik kuyruğundaki müzikleri döngü içerisine alır. \n\n ` + `\`${fynx.prefix}çalan\`` +`\n<a:kod:748832498821103647>  Oynatılan olan müziği gösterir.\n\n  ` + `\`${fynx.prefix}kuyruk\`` +`\n<a:kod:748832498821103647>  Müzik kuyruğunu gösterir. \n\n ` + `\`${fynx.prefix}kuyruğu-temizle\`` +`\n<a:kod:748832498821103647>  Müzik kuyruğunu temizler.\n\n ` + `\`${fynx.prefix}ses <1/100>\`` +`\n<a:kod:748832498821103647>  Oynatılan müziğin ses seviyesini ayarlar.`,
''
];
let page = 1; 
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail('https://cdn.discordapp.com/attachments/750458897776509077/750656409653215262/20200902_125651.jpg')
.setAuthor(`void Yardım Menüsü`, client.user.avatarURL)
.setFooter(`Sayfa ${page} / ${pages.length}`)
.setDescription(pages[page-1])
message.channel.send(embed).then(msg => {
msg.react('⬅')
.then(r => {
msg.react('➡')
const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
forwards.on('collect', r => {
if(page === pages.length) return;
page++;
embed.setDescription(pages[page-1]);
embed.setColor('RANDOM')
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
})
backwards.on('collect', r => {
if(page === 1) return;
page--;
embed.setColor('RANDOM')
embed.setDescription(pages[page-1]);
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
}) 
})
})
};
 
module.exports.config = {
name: 'yardım',
aliases: ["help", "y", "h"]
};
 
