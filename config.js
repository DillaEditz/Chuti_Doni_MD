const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'dilukahetttiarachchi3@gmail.com'
global.github = 'https://github.com/DillaEditz/Chuti_Doni_MD'
global.location = 'Colombo LK'
global.gurl = 'https://instagram.com/dilla.editz' // add your username
global.devs = '94764570094';
global.website = 'https://github.com/DillaEditz/Chuti_Doni_MD' //wa.me/+94764570094
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/AM2J9rY.png'
module.exports = {
  OPENAI_API_KEY:process.env.OPENAI_API_KEY || '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',
  botname: process.env.BOT_NAME || 'Chuti Doni-MD',
  dl_limit: process.env.DL_SIZE || '300',
  art: process.env.AUTO_RESTART || 'true',
  sudo: process.env.SUDO || '94764570094',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/81d0bbe5364e959ab4537.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*POWERD BY Chuti Doni-MD* 🎊',
  ownername:process.env.OWNER_NAME || 'Dilla Editz',
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author: process.env.PACK_INFO.split(";")[0] || 'dilla', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname: process.env.PACK_INFO.split(";")[1] || 'Chuti Doni-MD',
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'put your herokuapp name',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || 'put your heroku_api_key',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.5.0.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'Chuti_Doni-MD',
  WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
