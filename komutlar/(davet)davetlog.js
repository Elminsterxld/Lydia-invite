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
    .setDescription(`Bir Seçenek Seç
    1️⃣ Giriş Kanalını Ayarlamak İçin
    2️⃣ Ayrılma Kanalını Ayarlamak İçin
    3️⃣ Şuan ki Ayarlanan Log Kanallarını Gösterir
    ❌ Komutu İptal Etmek İçin
    `)
    .setColor(`#E70000`)
    .setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
    .setTimestamp()
    message.channel.send(embed).then(async react => {
        react.react('1️⃣')
        react.react('2️⃣')
        react.react('3️⃣')
        react.react('❌')
        const select = react.createReactionCollector((reaction, user) =>
        reaction.emoji.name === "1️⃣" || "2️⃣" || "3️⃣"  || "❌" &&
        user.id === message.author.id,
      {          
         time: 60000,
         errors: ['time']
});
      select.on("collect", async (reaction, user) => {
        if(user.id === client.user.id) return;
     if(reaction.emoji.name === "1️⃣"){
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Bir Kanal Etiketle!')
.setDescription(`
İptal Etmek İçin **iptal**
`)
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
  let channel = msg.mentions.channels.first() || message.guild.channels.cache.get(msg.content);
  if(!channel) { msg.channel.send(`Hata Böyle Bir Kanal Bulamadım!`) 
await join.stop()
return;
}
 let napimsa = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('__Başarılı__')
.setDescription(`
Giriş Kanalı Başarıyla Güncellendi!`)
.setColor(`GREEN`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()

await react.edit(napimsa)
await db.set(`join_channel_${message.guild.id}`, channel.id)
await join.stop()
})
    }   
if(reaction.emoji.name === "2️⃣") {
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Bir Kanal Etiketle!')
.setDescription(`
iptal etmek için **iptal**
`)
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
  let channel = msg.mentions.channels.first() || message.guild.channels.cache.get(msg.content);
  if(!channel) { msg.channel.send(`Hata Böyle Bir Kanalı Bulamadım!`) 
await join.stop()
return;
}

 
let olduoc = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('__Başarılı__')
.setDescription(`
Ayrılma Kanalı Başarıyla Güncellendi!`)
.setColor(`GREEN`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()

await react.edit(olduoc)
await db.set(`leave_channel_${message.guild.id}`, channel.id)
await join.stop()
})

}  
if(reaction.emoji.name === "3️⃣") {
  await react.reactions.removeAll()
await select.stop()
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setDescription(`
Giriş Kanalı => 
${message.guild.channels.cache.get(db.get(`join_channel_${message.guild.id}`)) || "Yok"}
Ayrılma Kanalı => 
${message.guild.channels.cache.get(db.get(`leave_channel_${message.guild.id}`)) || "Yok"}
`)
.setColor(`E70000`) 
.setFooter( message.guild.name , client.user.displayAvatarURL())
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
    })        .catch(select => {
      return message.channel.send(`Zaman Aşımı!`)
    })
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['davetlog',"invitelogs","invitelog"],
  permlevel: 0
}
exports.help = {
  name: 'davetlog',
  category: 'eko',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}