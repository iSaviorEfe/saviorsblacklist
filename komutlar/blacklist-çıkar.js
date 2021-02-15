const Discord = require("discord.js");
const db = require("quick.db")
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
  
//  if (message.author.id !== "335075079090339851") return message.reply("Bu Kodu Sadece <@335075079090339851>")
  
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`Buna yetkin yok!`);    
  
  let user = message.mentions.users.first()
  if (!user) return message.reply("Birini Etiketlemelisin")  
  let veri = db.fetch(`blacklist.${user.id}`)  
  
  
    if (!veri) return message.reply("bu karalistede değil")
  
message.channel.send(`çıkardım`) 
  
  
  db.delete(`blacklist.${user.id}`)
  
  const isaviorefe = new Discord.RichEmbed()
  .setDescription("BlackListten Çıkarıldı!")
 // .setColor("RED")
  .addField(`Sunucu İsmi`,`${message.guild.name}`)
  .addField(`Çıkarılan Kişi`,`${user}`)
  .addField(`Çıkaran Kişi`,`${message.author} `)
    client.channels.get("750628415379341342").send(isaviorefe)
  
  user.send(`Saviors Blacklist Adlı Bot Üzerinden Karalisteden Çıkarıldı`)
    //client.channels.get("745060531999866903").send(`${user} Adlı Kişi ${message.guild.name} (${message.guild.id}) Adlı Sunucuda ${message.author} (${message.author.id}) Tarafından Karalisteden çıkartıldı`)
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "blacklist-çıkar",
  description: "",
  usage: "taslak"
}; 