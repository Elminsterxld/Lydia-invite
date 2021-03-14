const Discord = require("discord.js")
const config = require('../config.js')
const db = require("quick.db")
const hastebin = require("hastebin-gen");
const moment = require('moment')

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
  let embeduser = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
 .setColor("#E70000")
  .setDescription(`Bir Kullanıcıyı Etiketlemelisin!`)
      .setThumbnail(message.author.avatarURL({dynamic:true}))
  .setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))
  .setTimestamp()
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  if(!user) return message.channel.send(embeduser);
  //Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  let invites = db.get(`invites_${message.guild.id}_${user.id}`)
  if(!invites) {
    let data = {
      invites: 0,
      regular: 0,//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
      //Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
      leaves: 0,
      joins: 0,
      by: null,
      bouns: 0   
      }
      db.set(`invites_${message.guild.id}_${user.id}`, data)
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
      let embed = new Discord.MessageEmbed()//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
      .setTitle(`${user.username} `)//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
      .setColor("#E70000")//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
      .setThumbnail(message.author.avatarURL({dynamic:true}))//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
      .addField('Sunucuya Katılma Zamanı', moment(message.guild.member(user.id).joinedAt).format('DD/MM/YYYY hh:mm A') ,true)
      .addField('Davet Eden', 'Bilinmiyor' , true)//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
      .addField('Davetleri', `0 Toplam (0 Düzgün 0 Ayrılan 0 Bonus)`, true)//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
      .addField('Eklenen/Çıkarılan Davetleri', `${data.join("\n") || '[0/0]'}`, true)//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
      .setFooter(message.guild.name  , message.guild.iconURL())//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
      .setTimestamp();//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
    
      return message.channel.send(embed)

  }
  let data = []
  let logs = db.get(`logs_${message.guild.id}_${user.id}`)
  if(logs && logs.length) {
  logs.forEach(x => {
      data.push(x.added)
  })}
  let omg = data.length;
  console.log()
  if(omg  > 10) {
    hastebin(data.join("\n"), { extension: "txt" }).then(haste => {
      data = haste;
      console.log()
     });
  }
     let embed = new Discord.MessageEmbed()

     .setColor("#E70000")
      .setThumbnail(message.author.avatarURL({dynamic:true}))
        .setTitle(`${user.username} `)
        .addField('Sunucuya Katılma Zamanı', moment(message.guild.member(user.id).joinedAt).format('DD/MM/YYYY hh:mm A') ,true)
        .addField('Davet Eden', invites.by || 'Bilinmiyor' , true)
        .addField('Davetleri', `${invites.invites || '0'} Toplam (${invites.regular || '0'} Düzgün ${invites.leaves || '0'} Ayrılan ${invites.bouns || '0'} Bonus)`, true)
        .addField('Eklenen/Çıkarılan Davetleri', `${data.join("\n") || '[0/0]'}`, true)
        .setFooter(message.guild.name  , message.guild.iconURL())
        .setTimestamp();
        return message.channel.send(embed)
    }

exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['davetinfo'],
  permlevel: 0
}
exports.help = {
  name: 'davetinfo',
  category: 'eko',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}