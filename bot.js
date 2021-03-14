const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");
require("./util/eventLoader.js")(client);
const db = require("quick.db");
const queue = new Map();
const config = require('./config.js');
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

//-----------------------------------------------\\
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " PİNGLENDİ ");
  response.sendStatus(200);
});
app.listen(8000);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//-----------------------------------------------\\

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

///==========komutlar==========\\\
const guildInvites = new Map();
  
  client.on("inviteCreate", async invite =>
    guildInvites.set(invite.guild.id, await invite.guild.fetchInvites())
  );
  client.on("ready", () => {
    client.guilds.cache.forEach(guild => {
      guild
        .fetchInvites()
        .then(invites => guildInvites.set(guild.id, invites))
        .catch(err => console.log(err));
    });
  });
  
  client.on("guildMemberAdd", async member => {
    const catchedInvites = guildInvites.get(member.guild.id);
  const newInvites = await member.guild.fetchInvites();
  guildInvites.set(member.guild.id, newInvites);
  try {
    const usedInvite = newInvites.find(
      inv => catchedInvites.get(inv.code).uses < inv.uses
    );
    
    
    if(!usedInvite) {
      let vanity = config.unkown.split("[user]")
      .join(client.users.cache.get(member.id).username)
      .split("[inviter]")
      .join(client.users.cache.get(usedInvite.inviter.id).username)
      .split("[invites]")
      .join(db.get(`invites_${member.guild.id}_${usedInvite.inviter.id}.invites`))
      .split("[total]")
      .join(db.get(`invites_${member.guild.id}_${usedInvite.inviter.id}.regular`))
      .split("[leaves]")
      .join(db.get(`invites_${member.guild.id}_${usedInvite.inviter.id}.leaves`))
      .split("[jointimes]")
      .join(db.get(`invites_${member.guild.id}_${usedInvite.inviter.id}.joins`))
       member.guild.channels.cache.get(join).send(vanity)
    
    let user = db.get(`invites_${member.guild.id}_${member.id}`)
    if(!user) {
    let data = { 
      invites: 0,
      regular: 0,
      leaves: 0,
      joins: 0,
      by: client.users.cache.get(usedInvite.inviter.id).username,
      bouns: 0   
    }
    db.set(`invites_${member.guild.id}_${member.id}`, data) 
    }
    }
    if(!usedInvite) return;
    db.add(`invites_${member.guild.id}_${member.id}.joins`, 1)
    let invites = db.get(`invites_${member.guild.id}_${usedInvite.inviter.id}`)
    if(!invites) {
      let brr = { 
        invites: 0,
        regular: 0,
        leaves: 0,
        joins: 0,
        by: client.users.cache.get(usedInvite.inviter.id).username,
        bouns: 0   
      }
      db.set(`invites_${member.guild.id}_${usedInvite.inviter.id}`, brr)
    }
    db.set(`author_${member.guild.id}_${member.id}`, usedInvite.inviter.id);  
    db.add(`invites_${member.guild.id}_${usedInvite.inviter.id}.invites`, 1)

    db.add(`invites_${member.guild.id}_${usedInvite.inviter.id}.regular`, 1)
    
    let join = db.get(`join_channel_${member.guild.id}`)
    let customize = db.get(`join_message_${member.guild.id}`)
    if(!customize) customize = config.join
    if(!join) return;
    let elminster = customize
    .split("[user]")
    .join(client.users.cache.get(member.id).username)
    .split("[inviter]")
    .join(client.users.cache.get(usedInvite.inviter.id).username)
    .split("[invites]")
    .join(db.get(`invites_${member.guild.id}_${usedInvite.inviter.id}.invites`))
    .split("[total]")
    .join(db.get(`invites_${member.guild.id}_${usedInvite.inviter.id}.regular`))
    .split("[leaves]")
    .join(db.get(`invites_${member.guild.id}_${usedInvite.inviter.id}.regular`))
    .split("[jointimes]")
    .join(db.get(`invites_${member.guild.id}_${usedInvite.inviter.id}.joins`))

     member.guild.channels.cache.get(join).send(elminster)
 
  } catch (err) {
  console.log()
  }
  })
  client.on("guildMemberRemove", member => {
    try {
  let user = db.get(`author_${member.guild.id}_${member.id}`)
  if(!user) {
   let channel = db.get(`leave_channel_${member.guild.id}`)
   if(!channel) return;
   member.guild.channels.cache.get(channel).send(`${member.username} sunucudan ayrıldı, ama ben onu kim davet ettiğini bulamadım!`)
   return
  }

  let channel = db.get(`leave_channel_${member.guild.id}`)
  if(!channel) return;
  let leave = db.get(`leave_message_${member.guild.id}`)
  if(!leave) leave = config.leave;
  db.add(`invites_${member.guild.id}_${user}.leaves`, 1)
  db.subtract(`invites_${member.guild.id}_${user}.invites`, 1)
  let elminsterr = leave.split("[user]")
  .join(client.users.cache.get(member.id).username)
  .split("[inviter]")
  .join(client.users.cache.get(user).username)
  .split("[invites]")
  .join(db.get(`invites_${member.guild.id}_${user}.invites`))
  .split("[total]")
  .join(db.get(`invites_${member.guild.id}_${user}.regular`))
  .split("[leaves]")
  .join(db.get(`invites_${member.guild.id}_${user}.leaves`))
  .split("[jointimes]")
  .join(db.get(`invites_${member.guild.id}_${user}.joins`))

  member.guild.channels.cache.get(channel).send(elminsterr)
     } catch(err) {
      console.log()
    }
  })


 setInterval(() => {
client.guilds.cache.forEach(x =>{
  let ranks = db.get(`ranks_${x.id}`)
  if(!ranks) return;
  x.members.cache.forEach(o => {
  if(o.user.bot === true) return;
    let invites = db.get(`invites_${x.id}_${o.id}`)
    if(!invites) {
      let data = {
        invites: 0,
        regular: 0,
        leaves: 0,
        joins: 0,
        by: null,
        bouns: 0       
      }
      db.set(`invites_${x.id}_${o.id}`, data)
    return; 
    }    
    ranks.forEach(r => {
      let g = x.roles.cache.get(r.role)
if(!g) return;
x.members.fetch(o.id).then(member => {  
if(invites.invites > r.invites-1) {
       if(member.roles.cache.has(r.role)) return
        member.roles.add(r.role, { reason: "yeteri kadar daveti var!" })
       db.set(`r_${x.id}_${o.id}_${r.role}`, true)
    }
    if(invites.invites < r.invites-1) {
      console.log()
      if(member.roles.cache.has(r.role)) {
        let check = db.get(`r_${x.id}_${o.id}_${r.role}`)
        if(!check) return;
        member.roles.remove(r.role, { reason: "yeteri kadar daveti yok"})
        db.delete(`r_${x.id}_${o.id}_${r.role}`)
      } 
      }
    })
    })
  })
})
 }, 5500);