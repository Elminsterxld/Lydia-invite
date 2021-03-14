const Discord = require("discord.js")
const db = require("quick.db")
const config = require('../config.js')

exports.run = async (client, message, args) => {
	const yarrak = new Discord.MessageEmbed()
.setTitle('__Hata__')
.setColor('#E70000')
.setDescription(`<a:hyr:802638369972027452>  Bu Komutu kullanabilmek için **Yönetici** Yetkisine İhtiyacin Var`)
. setTimestamp ()
.setThumbnail(message.author.avatarURL({dynamic:true}))
if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(yarrak)
	
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
    .setDescription(`**Bir Seçenek Belirt**
    1️⃣ Giriş Mesajını Ayarlar
    2️⃣ Çıkış Mesajını Ayarlar
    3️⃣ Giriş ve çıkış Mesajları nelerdir Gösterir
    ❌ Komutu İptal Eder
    `)
    .setColor(`#E70000`)
    .setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
    .setTimestamp()
    . setThumbnail (message.author.avatarURL({dynamic:true}))
    message.channel.send(embed).then(async react => {
        react.react('1️⃣')
        react.react('2️⃣')
        react.react('3️⃣')
        react.react('❌')
        const select = react.createReactionCollector((reaction, user) =>
        reaction.emoji.name === "1️⃣" || "2️⃣" || "3️⃣"  || "❌" &&
        user.id === message.author.id,
      { time: 60000 });
      select.on("collect", async (reaction, user) => {
        if(user.id === client.user.id) return;
     if(reaction.emoji.name === "1️⃣"){
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Yeni Giriş Mesajınızı Yazınız!')
.setDescription(`
Değişkenler:
[inviter] = Davet Eden İsim
[invites] = Davet Eden Davet Sayısı
[user] = Sunucuya Katılan İsim
[total] = Davet Eden Toplam Davet Sayısı
[leaves] = Davet Eden Ayrılan Sayısı
[jointimes] = Kaç Defa Katıldığını Gösterir
iptal etmek için **iptal**
`)
.setColor(`#E70000`)
. setThumbnail (message.author.avatarURL({dynamic:true}))
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
let joina = m => m.author.id === message.author.id;
let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });

join.on('collect', async msg => {
if(msg.content.toLowerCase() === "iptal") {
    msg.channel.send(`İptal Edildi!`)
    await react.delete()
    await join.stop()
 return
}
let anasıkaşar = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('__Başarılı__')
.setDescription(`
Giriş Mesaji Başarıyla Güncellendi`)
. setThumbnail (message.author.avatarURL({dynamic:true}))
.setColor(`GREEN`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()

await react.edit(anasıkaşar)
await db.set(`join_message_${message.guild.id}`, msg.content)
await join.stop()
})
    }   
if(reaction.emoji.name === "2️⃣") {
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Ayrılma Mesajınızı Ayarlayın!')
.setDescription(`
Değişkenler:
[inviter] = Davet Eden İsim
[invites] = Davet Eden Davet Sayısı
[user] = Sunucuya Giren Kişi İsim
[total] = Davet Eden Toplam Davet Sayısı
[leaves] = Davet Eden Ayrılma Sayısı
[jointimes] = Kaç Defa Katıldığını Gösterir
iptal etmek için **iptal** yazınız!
`)
. setThumbnail(message.author.avatarURL({dynamic:true}))
.setColor(`#E70000`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
let joina = m => m.author.id === message.author.id;
let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });

join.on('collect', async msg => {
if(msg.content.toLowerCase() === "iptal") {
    msg.channel.send(`İptal Edildi!`)
    await react.delete()
    await join.stop()
 return
}
let olduoc = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle(' ')
.setDescription(`
Başarıyla Ayrılma Mesajı Güncellendi!`)
.setColor(`GREEN`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()

await react.edit(olduoc)
await db.set(`leave_message_${message.guild.id}`, msg.content)
await join.stop()
})

}  
if(reaction.emoji.name === "3️⃣") {
await react.reactions.removeAll()
await select.stop()
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setDescription(`
Giriş Mesajı => 
${db.get(`join_message_${message.guild.id}`) || config.join}
Ayrılma Mesajı => 
${db.get(`leave_message_${message.guild.id}`) || config.leave}
URL Katılımı => 
${config.unkown} [Değişmedi]
`)
.setColor(`#E70000`) 
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
return react.edit(embed)
}
if(reaction.emoji.name === "❌") {
    await react.reactions.removeAll()
    await select.stop()
    let embedo = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
     .setDescription(`
     Komut İptal Edildi! 
     `)
    .setColor(`#E70000`)
    .setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
    .setTimestamp()
  return  react.edit(embedo)
    }
})
    })
}

exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["message","config-message","joinmessage","leavemessage","leaveMessage","joinMessage"],
  permlevel: 0
}
exports.help = {
  name: 'config-message',
  category: 'eko',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}