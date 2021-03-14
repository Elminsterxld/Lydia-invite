const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
    
    .setThumbnail(message.author.avatarURL({dynamic:true}))
      .setDescription(":x: ``Bu komutu kullanabilmek için Üyeleri At yetkisine sahip olmalısın!``")
      .setColor("RED");
 
    message.channel.send(embed);
    return;
  }
 
  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL({dynamic:true}))
        .setDescription(":x: Lütfen atılacak kişiyi etiketleyiniz!")
        .setColor("RED")
        .setFooter(bot.user.username, bot.user.avatarURL({dynamic:true}))
    );
  }
 
  const embed = new Discord.MessageEmbed()
    .setColor("#AF00FF")
  .setThumbnail(message.author.avatarURL({dynamic:true}))
    .setDescription(`${u} Adlı şahsın sunucudan atılmasını onaylıyor musunuz?`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit(":x: İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `✅ İşlem onaylandı! ${u} adlı şahıs sunucudan atıldı!`
        );
 
        message.guild.member(u).kick();
      }
    });
  });
};
 
module.exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};
 
module.exports.help = {
  name: "kick",
  description: "kick",
  usage: "kick"
};