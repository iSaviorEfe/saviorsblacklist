const Discord = require("discord.js");
const db = require("quick.db")
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
  
 // if (message.author.id !== "698110850434727986") return message.reply("sahibim kullanabilir sadece")
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`Buna yetkin yok!`);    
  
  let user = message.mentions.users.first()
    let sebep = args.slice(1).join('')                                                 
      
   let veri = db.fetch(`blacklist.${user.id}`)        
   
  if (!user) return message.reply("Birini Etiketlemelisin")
  if (!sebep) return message.reply("Sebep yazmadın")
  
  if (veri) return message.reply("bu kişi karalistede zaten")
  
  message.channel.send("karalisteye aldım")
  
  db.set(`blacklist.${user.id}`, sebep)
    const isaviorefe = new Discord.RichEmbed()
  .setDescription("BlackListe Alındı!")
 // .setColor("Blue")
  .addField(`Sunucu İsmi Ve İd`,`${message.guild.name} |-| ${message.guild.id}`)
  .addField(`Karalisteye Alınan Kişi`,`${user} |-| ${user.id}`)
  .addField(`Karalisteye Alan Kişi`,`${message.author} |-| ${message.author.id}`)
    .addField(`Karaliste Alınma Sebebi`,`**${sebep}**`)
    client.channels.get("745061577371156570").send(isaviorefe)
  user.send(`Saviors Blacklist Adlı Bot Üzerinden **${sebep}** Nedeniyle Karalisteye Alındın`)
  
//  client.channels.get("745060531999866903").send(`${user} Adlı Kişi ${message.guild.name} (${message.guild.id}) Adlı Sunucuda ${message.author} (${message.author.id}) Tarafından Karalisteye Alındı`)
  
  
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "blacklist",
  description: "",
  usage: "taslak"
}; 