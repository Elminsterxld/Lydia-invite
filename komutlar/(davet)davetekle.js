const Discord = require("discord.js")
const db = require("quick.db")
const config = require('../config.js')
const { evaluate } = require('mathjs')
exports.run = async (client, message, args) => {
  const yarrak = new Discord.MessageEmbed()
.setTitle('__Hata__')
.setColor('#E70000')
.setDescription(`<a:hyr:802638369972027452>  Bu Komutu kullanabilmek için **Yönetici** Yetkisine İhtiyacin Var`)
. setTimestamp ()
.setThumbnail(message.author.avatarURL({dynamic:true}))
if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(yarrak)
		//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) 	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  let eetiketgavat = new Discord.MessageEmbed()	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  .setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}))	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  .setDescription(`Bir Kullanıcıyı Etiketlemeyi Dene!`)	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  .setColor(`#E70000`)	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  .setThumbnail(message.author.avatarURL({dynamic:true}))	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  .setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  .setTimestamp()	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  if(!user) return message.channel.send(eetiketgavat);	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  let davetkooc = new Discord.MessageEmbed()	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  .setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}))	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  .setDescription(`Bir Sayı Belirtmelisin! (Sadece Sayılar Çalışır!)`)	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
   .setColor(`#E70000`)	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  .setThumbnail(message.author.avatarURL({dynamic:true}))	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  .setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007v
  .setTimestamp()	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
 if(!args[1]) return message.channel.send(davetkooc);	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
 if(isNaN(args[1])) return message.channel.send(davetkooc);	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
 let userinvites = db.fetch(`invites_${message.guild.id}_${user.id}`)	//Elminstêr#0007	//Elminstêr#0007
 if(!userinvites) {
    let data = {
        invites: 0,
        regular: 0,//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
        leaves: 0,//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
        joins: 0,//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
        by: null,//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
        bouns: 0   //Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
      }

      db.set(`invites_${message.guild.id}_${user.id}`, data)
      db.add(`invites_${message.guild.id}_${user.id}.invites`, args[1])
      db.add(`invites_${message.guild.id}_${user.id}.bouns`, args[1])
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
let a = {
    added: `[+] Davet Eklendi ${args[1]} kadar ekleyen Kişi : ${message.author.name} adlı kullanıcı Ekledi`
}
 db.push(`logs_${message.guild.id}_${user.id}`, a)
 let olduoc = new Discord.MessageEmbed()
 .setAuthor(message.guild.name, message.guild.iconURL())
 .setDescription(`Başarıyla ${args[1]} adet davet ${user.username} adlı kullanıcıya eklendi!`)
   .setColor(`GREEN`)
  .setThumbnail(message.author.avatarURL({dynamic:true}))
 .setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))
 .setTimestamp()
return message.channel.send(olduoc);
 }//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
 db.add(`invites_${message.guild.id}_${user.id}.invites`, args[1])
 db.add(`invites_${message.guild.id}_${user.id}.bouns`, args[1])
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
let a = {//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
    added: `[+] Davet Eklendi ${args[1]} kadar ekleyen kişi : ${message.author.name} `
}
 db.push(`logs_${message.guild.id}_${user.id}`, a)
 let olduoc = new Discord.MessageEmbed()//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
 .setAuthor(message.guild.name, message.guild.iconURL())//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
 .setDescription(`Başarıyla {args[1]} adet davet ${user.username} adlı kullanıcıya eklendi!`)//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
   .setColor(`GREEN`)//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  .setThumbnail(message.author.avatarURL({dynamic:true}))//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
 .setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
 .setTimestamp()//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
message.channel.send(olduoc)//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
 }//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007

exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['davet-ekle'],
  permlevel: 0
}
exports.help = {
  name: 'davet-ekle',
  category: 'eko',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}