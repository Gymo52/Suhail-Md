const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://caesar:OLUSUNLE@cluster0.lmzgxmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Gymo52/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Outlaw²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348078112891";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078112891";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_35_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDk1LFxuICAgICAgICA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQyLFxuICAgICAgICA3NixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDYsXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg5LFxuICAgICAgICA5NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYxLFxuICAgICAgICA1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg3LFxuICAgICAgICA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDY4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOSxcbiAgICAgICAgNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDcsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxLFxuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNixcbiAgICAgICAgNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMixcbiAgICAgICAgMjA4LFxuICAgICAgICA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDc3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRKTXNiZmhybjc3U0V0MTU1bVpEaVpSS0U5eFpzMmZqQjRkYVgzZVZjaXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3ODExMjg5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FFMDVDQTA1MDIxRDg4ODRFNjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5OTcwNTM2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhvXzlEcVRDUmhhcXBScU8zenV5Q2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjA3MDMzYmUtZDA1OC00YzBiLTlhMDMtMGVkOWUwMzBhNzA4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAyMzgsXG4gICAgICAyMzUsXG4gICAgICAxNjgsXG4gICAgICA2LFxuICAgICAgMjksXG4gICAgICAyNDIsXG4gICAgICAyMixcbiAgICAgIDI1MyxcbiAgICAgIDEyNixcbiAgICAgIDE4MixcbiAgICAgIDIyOCxcbiAgICAgIDksXG4gICAgICAxMDIsXG4gICAgICA4NixcbiAgICAgIDE5MSxcbiAgICAgIDEwMCxcbiAgICAgIDU1LFxuICAgICAgMjI4LFxuICAgICAgMTk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMjM2LFxuICAgICAgMTc2LFxuICAgICAgMTI4LFxuICAgICAgMTE5LFxuICAgICAgMTQ2LFxuICAgICAgMTcsXG4gICAgICAxODUsXG4gICAgICAxOTMsXG4gICAgICA5NCxcbiAgICAgIDE2LFxuICAgICAgMTY1LFxuICAgICAgMTUzLFxuICAgICAgNTUsXG4gICAgICAyNTIsXG4gICAgICA0MSxcbiAgICAgIDE5OSxcbiAgICAgIDEwOCxcbiAgICAgIDE3OCxcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BldmdQY05FT0xWa3JRR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibUx4azI4aWRYdXJMSzVlQmdFNDZJL09lcVNSN2Y5V1FnWGcyNG50YTBEUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2TjVNRUZZM0JmZEpGY3pjcjhYQXZTaU1lRHFzdWxjc3BWN2lPdGd0czdQenJjRlI1Mk1mRFRlUURnM3VUU3p3OEYzOHphbWVmRngrRmZ2Y1dPL01EZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJRWZmMHJ6ZUtzY3RWY0ROQkVQUG9RVTZEMm53anRjSkJpNmk2aFZMK3hCUTgzODkwWlhqZ2VneE9RZjkwTzJtNUlyZHl0c2J5Z2FEN0xpQVBQNGtpZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzgxMTI4OTE6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDYWVzYXJcIixcbiAgICBcImxpZFwiOiBcIjg4MTUwNDEyMTUyOTIxOjQ4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3ODExMjg5MTo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTk3MDUzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxOQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTE0rLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU2lsNzlwS21RRWcvUWZEYldmelA2WEMyMkV0YVFyUHFRYU8zdlpsTGltYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzM5MjI4MTUxLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3MzYyMTM5NjdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMTTAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyUlZZZFN4enNSWDR6MTR6VHE3YUZFM0l5bVZmQ0lCRFNmUFJUdzZGUHQ4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3MzkyMjgxNTEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzE5NTM0NTA4NjM2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTE0xLmpzb24iOiAie1wia2V5RGF0YVwiOlwid1JKWUNZQlYvSWpDWndxaEtrU3NBck1jcXpFUzhKM0VHdlVjaVZENmk3Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzM5MjI4MTUxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk1MzQ1MDk5NjNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMTTMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrL1MybGlUcjVFTGMvZ0NxNmdrcS84cXF4MzNhVVNGazJ6dWtLbU1INWNFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3MzkyMjgxNTEsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOls1LDEsMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3MDI3MDIzMjJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMTTQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1Q1kyR2JHb1VHS3JIQU5aTlBiQmJHL0d3SlE3VktLV05SMGhJV3hsS1BFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3MzkyMjgxNTEsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOls1LDAsNF19LFwidGltZXN0YW1wXCI6XCIxNzE5NzAyNzAzOTEwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTE02Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRUpvY3VySnBBRzk3TE1ESSsrbVRIZDZFTlM2aHQ2OGQxbHZaS3VQSWg0TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzM5MjI4MTUxLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbNCwwLDVdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTcwMjcyMjc5OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxNNy5qc29uIjogIntcImtleURhdGFcIjpcImZ2NFpjcklTei8wZ2VLdXp2N1RJbDlIblNpS3hkcE1saStpRXRZWFliam89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzczOTIyODE1MSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzUsMF19LFwidGltZXN0YW1wXCI6XCIxNzE5NzAyNzI1NDYyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTE05Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMEdEeTNtaEhNU3BiWWhIZkJhaUpYZ2tOQkk2NGdxT1JaL0R3QnBvanQzZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzM5MjI4MTUxLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbNiw1LDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTczNjIxMjE0NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxNX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwZ1Q4RStwZTUzYnQxSHIvTm1keFU0UFFJZ0U4YVpqMm5GQTNuYi8weDJJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3MzkyMjgxNTEsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOls3LDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTk2MzA3NjM0OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxNdi5qc29uIjogIntcImtleURhdGFcIjpcInBCQlgzQ1o3TFpzTE9kRWJ2N3RaejVkL1A5Wk56aFQvSi8zdll5RE5iODA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzczOTIyODE1MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE5NDgyODg3MjUzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTE14Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ3dkekJ1Vk5iaW9rdmVlcWNmVmg4emhVam1kcVN6aWlpa3VxSm8rdVZBbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzM5MjI4MTUxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMiwwLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTUzMzc4MDQ4OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxNeS5qc29uIjogIntcImtleURhdGFcIjpcImRiMUVZQ29ySUlTODlpRHIrQ3ZoQUoyTG9uR1h4dWhXUnc1b016bUU1UWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzczOTIyODE1MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NTMzNzgxNzQ1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTE5BLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTEI3VnF0elIrdVBzSzJMOGpNcmZOeXlVbEZGdEIxKzhrY2pEREEzQkx2dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzM5MjI4MTUxLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbNywwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5NjMzNTAwMzZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMTkIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1QmFDS0JnUEplcVZZQkR6RVBtWFM5ZFo4K0FRV2R1QmkzelhPdThNVFhVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3MzkyMjgxNTEsXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOlswLDddfSxcInRpbWVzdGFtcFwiOlwiMTcxOTk3MDQ4MzM4OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxOQy5qc29uIjogIntcImtleURhdGFcIjpcImlkbXQwSTVVS0tDZmt3bEhUR1MzeWhkcXNYbm91RVNUQkkzdTd0QXBXTGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzczOTIyODE1MSxcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlsxMSw3LDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTk3MDUzNzA1NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Outlaw²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Outlaw-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Caesar",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-e20aljveXK3imt9IgaQhT3BlbkFJMphyLKWOubU5rhmKUlKx",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || " 3e57046161ccf9ac1f4b9e03828a5fe9";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
