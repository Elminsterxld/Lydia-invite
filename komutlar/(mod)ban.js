const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(":x: ``Bu komutu kullanabilmek için Üyeleri Yasakla yetkisine sahip olmalısın!``")
      .setColor("RED").setThumbnail(message.author.avatarURL({dynamic:true}));
    message.channel.send(embed);
    return;
  }
 ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
  let u = message.mentions.users.first();////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
  if (!u) {////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
    return message.channel.send(////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
      new Discord.MessageEmbed()////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
      .setThumbnail(message.author.avatarURL({dynamic:true}))
        .setDescription(" Lütfen banlanacak kişiyi etiketleyiniz!")
        .setColor("RED")
        .setFooter(bot.user.username, bot.user.avatarURL({dynamic:true}))
    );
  }
 
  const embed = new Discord.MessageEmbed()
    .setColor("#AF00FF")
  .setThumbnail(message.author.avatarURL({dynamic:true}))
    .setDescription(` ${u} Adlı şahsın sunucudan banlanmasını onaylıyor musunuz?`)
    .setFooter(bot.user.username, bot.user.avatarURL({dynamic:true}));
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
          `✅ İşlem onaylandı! ${u} adlı şahıs sunucudan banlandı!`
        );
 
        message.guild.member(u).ban();
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
  name: "ban",
  description: "kick",
  usage: "ban"
};