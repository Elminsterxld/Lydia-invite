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
	
    let norole = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setDescription(`**Aşağıdakilerden Birini Dene**
   :one: Eklemek İçin
   :two: Kaldırmak İçin
   :x: Komutu İptal Ettirmek İçin
    `)
      .setColor(`#E70000`)
  .setThumbnail(message.author.avatarURL({dynamic:true}))
    .setFooter(message.guild.name , client.user.displayAvatarURL())
    .setTimestamp()
   message.channel.send(norole).then(react => {
      react.react('1️⃣')
      react.react('2️⃣')
      react.react('❌')
      const select = react.createReactionCollector((reaction, user) =>
      reaction.emoji.name === "1️⃣" || "2️⃣"  || "❌" &&
      user.id === message.author.id,
    {          
       time: 60000,
       errors: ['time']
});
select.on("collect", async (reaction, user) => {
if(user.id === client.user.id) return;
if(reaction.emoji.name === "2️⃣") {
   await react.reactions.removeAll()
   await select.stop()
   let norole = new Discord.MessageEmbed()
   .setAuthor(message.guild.name, message.guild.iconURL())
   .setDescription(`Hangi Rolü ödüllerinden çıkarmak istiyorsanız o rolden bahsedin
   `)
     .setColor(`#E70000`)
  .setThumbnail(message.author.avatarURL({dynamic:true}))
   .setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))
   .setTimestamp()
react.edit(norole)
   let role = m => m.author.id === message.author.id;
   let rolecollecter = new Discord.MessageCollector(message.channel, role, { max: 1 });
rolecollecter.on('collect', async msg => {
   let role = msg.mentions.roles.first() || msg.guild.roles.cache.get(msg.content)
   if(!role) {
      msg.channel.send(`Bu Rolü Bulamıyorum Doğru Bir Rol Olduğunu Kontrol Edermisiniz ?`)
   } else {
   let data = db.get(`ranks_${message.guild.id}`)
   let database = data.find(x => x.role === role.id)
   if(!database) return msg.channel.send(`\`${role.name} \`Bu İsimli Bir Rol Datada Bulunamadı! Eklendiğine Eminmisin ?`)
   if(database) {
      let value = data.indexOf(database)
      delete data[value]
    
      var filter = data.filter(x => {
        return x != null && x != ''
      })
    
      db.set(`ranks_${message.guild.id}`, filter)
    return msg.channel.send(`Başarıyla Silindi`)
   }
   }
})
   }
   if(reaction.emoji.name === "❌") {
      await react.reactions.removeAll()
await select.stop()
let hop = new Discord.MessageEmbed()
.setAuthor(message.guild.name, message.guild.iconURL())
.setDescription(`Rank Ekleme İşlemi İptal Edildi!`)
  .setColor(`#E70000`)
  .setThumbnail(message.author.avatarURL({dynamic:true}))
.setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(hop)


   }
if(reaction.emoji.name === "1️⃣") {

await react.reactions.removeAll()
await select.stop()
let olr = new Discord.MessageEmbed()
.setAuthor(message.guild.name, message.guild.iconURL())
.setDescription(`Ekleyeceğin Rolü Etiketlermisin ?`)
  .setColor(`#E70000`)
  .setThumbnail(message.author.avatarURL({dynamic:true}))
.setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(olr)


let roleauthor = m => m.author.id === message.author.id;
let rolecollecter = new Discord.MessageCollector(message.channel, roleauthor, { max: 1 });

rolecollecter.on('collect', async msg => {
let role = msg.mentions.roles.first() || msg.guild.roles.cache.get(msg.content)
if(!role) {
   msg.channel.send(`Bu Rolü Bulamadım BirDaha Dene Veya Kontrol Et!`)
} else {
   let data = db.get(`ranks_${message.guild.id}`)
 if(!data) {
   let oky = new Discord.MessageEmbed()
   .setAuthor(message.guild.name, message.guild.iconURL())
   .setDescription(`Bu Rolün Kaç Davet Verileceğini Yaz Şimdi de`)
     .setColor(`#E70000`)
  .setThumbnail(message.author.avatarURL({dynamic:true}))
   .setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))
   .setTimestamp()
   msg.channel.send(oky)
      await rolecollecter.stop()
      let amountAuthor = m => m.author.id === message.author.id;
      let amountCollecter = new Discord.MessageCollector(message.channel, amountAuthor, { max: 1 });
   amountCollecter.on('collect', async msg => { 
      if(isNaN(msg.content)) return msg.channel.send(`Sadece Sayı Girermisin ?`)
      let amounnt = msg.content;
      if(amounnt.includes('-', '.')) return msg.channel.send(`Bunu Denemene Üzüldüm!`)
      let pogdata = {
         role: role.id,
         invites: amounnt 
      }
      db.push(`ranks_${message.guild.id}`, pogdata)
      let benims = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL())
   .setDescription(`Başarıyla Davet Karşılığı Rol Alma Oluşturuldu!\nRol: ${role.name}\n Kaç Davet Alınacak: ${msg.content}`)
    .setColor(`GREEN`)
  .setThumbnail(message.author.avatarURL({dynamic:true}))
   .setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))
   .setTimestamp()
    msg.channel.send(benims)
   await amountCollecter.stop()
     })
return;   
 }
   let database = data.find(x => x.role === role.id)
   if(database) return msg.channel.send(`Bu Rol Zaten Davt Karşılığı Veriliyor!`)
   let elminster = new Discord.MessageEmbed()
.setAuthor(message.guild.name, message.guild.iconURL())
.setDescription(`Lütfen kullanıcının bu rolü alması için gereken davet miktarını yazın`)
  .setColor(`#E70000`)
  .setThumbnail(message.author.avatarURL({dynamic:true}))
.setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
msg.channel.send(elminster)
   await rolecollecter.stop()
   let amountAuthor = m => m.author.id === message.author.id;
   let amountCollecter = new Discord.MessageCollector(message.channel, amountAuthor, { max: 1 });
amountCollecter.on('collect', async msg => { 
   if(isNaN(msg.content)) return msg.channel.send(`Sadece Sayıları Kullanmayı Denersen Çok İyi Olur`)
   let amounnt = msg.content;
   if(amounnt.includes('-', '.')) return msg.channel.send(`Bunu Denemene Üzüldüm!`)
   let pogdata = {
      role: role.id,
      invites: amounnt 
   }
   db.push(`ranks_${message.guild.id}`, pogdata)
   let babanızben = new Discord.MessageEmbed()
   .setAuthor(message.guild.name, message.guild.iconURL())
.setDescription(`Başarıyla Davet Karşılığı Rol Alma Oluşturuldu!\nRol: ${role.name}\n Kaç Davet Alınacak ${msg.content}`)
  .setColor(`GREEN`)
  .setThumbnail(message.author.avatarURL({dynamic:true}))
.setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
 msg.channel.send(babanızben)
await amountCollecter.stop()
  })
}
 
})
}

})
})
}


exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["davet-rank","davetrol","davet-rol","invites-role"],
  permlevel: 0
}
exports.help = {
  name: 'rank',
  category: 'eko',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}