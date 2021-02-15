const Discord = require("discord.js");
const db = require("quick.db")
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
  
  //if (message.author.id !== "698110850434727986") return message.reply("sahibim kullanabilir sadece")

        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`Buna yetkin yok!`);    
  
  let user = message.mentions.users.first()
    let veri = db.fetch(`blacklist.${user.id}`)                  
  
  if (!user) return message.reply("Birini Etiketlemelisin")
  
message.channel.send(`${user} adlı kişi ${veri || `Karalistede Değil`}`)            
  

  
  
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "blsorgu",
  description: "",
  usage: "taslak"
}; 