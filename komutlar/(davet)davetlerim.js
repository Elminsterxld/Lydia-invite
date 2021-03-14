const Discord = require("discord.js")
const db = require("quick.db")
const config = require('../config.js')

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
  let invites = db.get(`invites_${message.guild.id}_${user.id}`)
    if(user.id === message.author.id) {
      if(!invites) {
        let data = {
          invites: 0,
          regular: 0,
          leaves: 0,
          joins: 0,
          by: null,
          bouns: 0       
        }
        db.set(`invites_${message.guild.id}_${user.id}`, data)
        let embed = new Discord.MessageEmbed()
        .setAuthor(user.username , user.displayAvatarURL({dynamic:true}))
        .setTitle(`Davetlerin`)
        .setColor("#E70000")
        .setThumbnail(message.author.avatarURL({dynamic:true}))
            .setDescription(`0 Toplam (0 Düzgün 0 Ayrılan 0 Bonus)`)
        .setFooter(message.guild.name  , message.guild.iconURL())
        .setTimestamp();
        return message.channel.send(embed)
      
      }
  let embed = new Discord.MessageEmbed()
  .setAuthor(user.username , user.displayAvatarURL({dynamic:true}))
  .setTitle(`Davetlerin`)
          .setColor("#E70000")//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  //Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  //Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  .setThumbnail(message.author.avatarURL({dynamic:true}))//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  .setDescription(`${invites.invites || '0'} Toplam (${invites.regular || '0'} Düzgün ${invites.leaves || '0'} Ayrılan ${invites.bouns || '0'} Bonus)`)
  .setFooter(message.guild.name  , message.guild.iconURL())//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  .setTimestamp();//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  return message.channel.send(embed)//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
    }//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
    if(!invites) {
      let data = {
        invites: 0,
        regular: 0,
        leaves: 0,
        joins: 0,
        by: null,
        bouns: 0   
      }
      db.set(`invites_${message.guild.id}_${user.id}`, data)
      let embed = new Discord.MessageEmbed()
      .setAuthor(user.username , user.displayAvatarURL({dynamic:true}))
      .setTitle(`${user.username} Adlı Kullanıcının Davetleri`)
      .setColor("#E70000")
      .setThumbnail(message.author.avatarURL({dynamic:true}))
      .setDescription(`0 Toplam (0 Düzgün 0 Ayrılan 0 Bonus)`)
      .setFooter(message.guild.name  , message.guild.iconURL())
      .setTimestamp();
      return message.channel.send(embed)
    }
  
  //Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  
  //Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  //Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  //Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  //Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  //Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  //Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  //Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007	//Elminstêr#0007
  
    let embed = new Discord.MessageEmbed()
    .setAuthor(user.username , user.displayAvatarURL({dynamic:true}))
    .setTitle(`${user.username} Adlı Kullanıcının Davetleri`)
    .setColor("#E70000")
      .setThumbnail(message.author.avatarURL({dynamic:true}))
    .setDescription(`${invites.invites || '0'} Toplam (${invites.regular || '0'} Düzgün ${invites.leaves || '0'} Ayrılan ${invites.bouns || '0'} Bonus)`)
    .setFooter(message.guild.name  , message.guild.iconURL())
    .setTimestamp();
    return message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["davetlerim","invites"],
  permlevel: 0
}
exports.help = {
  name: 'davetlerim',
  category: 'eko',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}