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
	
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
  let userat = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setDescription(`Bir Kullanıcı Etiketlemelisin!`)
  .setColor(`#E70000`)
  .setThumbnail(message.author.avatarURL({dynamic:true}))
  .setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))
  .setTimestamp()

  if(!user) return message.channel.send(userat);
  let elminstr = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setDescription(`Hatalı Bir Sayı Girdin (sadece sayı giriniz)`)
  .setColor(`#E70000`)
  .setThumbnail(message.author.avatarURL({dynamic:true}))
  .setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))
  .setTimestamp()

 if(!args[1]) return message.channel.send(elminstr);
 if(isNaN(args[1])) return message.channel.send(elminstr);
 let userinvites = db.get(`invites_${message.guild.id}_${user.id}`)
 if(!userinvites) {
return message.channel.send(`Kullanıcıdan Çıkartılacak Dave Zaten Yok!`)
}


  
 
 db.subtract(`invites_${message.guild.id}_${user.id}.invites`, args[1])
 db.subtract(`invites_${message.guild.id}_${user.id}.bouns`, args[1])

 
let a = {
    added: `[-] ${args[1]} adet davet ${message.author.username} adlı kullanıcı tarafından çıkartıldı!`
}
 db.push(`logs_${message.guild.id}_${user.id}`, a)
 let oldu = new Discord.MessageEmbed()
 .setAuthor(message.guild.name, message.guild.iconURL())
 .setDescription(`Başarılıyla ${args[1]}adet davet  ${user.username} adlı kullanıcıdan çıkartıldı!`)
.setColor(`#E70000`)
  .setThumbnail(message.author.avatarURL({dynamic:true}))
 .setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))
 .setTimestamp()
message.channel.send(oldu)
 }
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["davet-sil","removeInvıtes","removeınvıtes","removeinvites"],
  permlevel: 0
}
exports.help = {
  name: 'davet-sil',
  category: 'eko',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}
