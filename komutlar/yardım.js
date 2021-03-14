const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {

   const sistem = new Discord.MessageEmbed()
   .setTitle(`Lydia - Davet Sistemi`)
   .setColor("#E70000")
   .setThumbnail(message.author.avatarURL({dynamic: true}))
   .addField(` Komutlar `,` > !davetlerim \`Davetlerinizi Gösterir.\`\n > !davetlog #kanal \`Davet Log Kanalını Ayarlar\`\n > !message \`Giriş Ve Çıkış Mesajlarını Düzenlemenizi Sağlar\`\n > !rank \`Davet Karşılığı Alınacak Rolü Ayarlar\`\n > !davet-ekle \`İstediğiniz Kullanıcıya İstediğiniz Kadar Davet Eklersiniz\`\n > !davet-sil \`İstediğiniz Kullanıcıdan İstedğiniz Kadar Davet Silersiniz\`\n > !davetinfo \`İstediğiniz Kişinin Davet Bilgisine Bakarsınız\`\n`)
message.channel.send(sistem)

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['invite-system'], 
    permLevel: 0,
};

exports.help = {
    name: 'davet-sistemi',
    usage: 'kullanımı',
    description: 'açıklama',
};