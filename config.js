const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Muhammad786:Muhammad786@cluster0.fwvspqh.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Muhammad786:Muhammad786@cluster0.fwvspqh.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://www.instagram.com/zidii_decent_boy?igsh=MXVobjVlMXBrYzcxbg==";
global.website=process.env.GURL || "https://www.instagram.com/zidii_decent_boy?igsh=MXVobjVlMXBrYzcxbg==" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/WgIJbMt.jpeg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙-𝙈𝘿`" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923174977136,923288330023,923276326230";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923288330026";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/WgIJbMt.jpeg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923288330026,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_25_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI3LFxuICAgICAgICA0NixcbiAgICAgICAgMjA4LFxuICAgICAgICA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY2LFxuICAgICAgICA1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAwLFxuICAgICAgICA1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk5LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjIsXG4gICAgICAgIDg2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyLFxuICAgICAgICAyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY2LFxuICAgICAgICA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNixcbiAgICAgICAgNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY5LFxuICAgICAgICA1NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNixcbiAgICAgICAgODEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDgzLFxuICAgICAgICA1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMTjI3ck9vN3RTVVZNOVpOT2piNjNJU0YybWFWWUNDdm5Zd0tqdVBFN01nPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyVkpveFVxcVRleThzaWVETGRBNVlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc5NTUwZDY3LTg0YjEtNDRmZC04MzU5LTA4NDI3NTY1OWJjY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAyLFxuICAgICAgMzYsXG4gICAgICAxMTMsXG4gICAgICAxNjYsXG4gICAgICAxODQsXG4gICAgICA1OCxcbiAgICAgIDEzNSxcbiAgICAgIDYxLFxuICAgICAgMTAwLFxuICAgICAgMTM0LFxuICAgICAgMjUxLFxuICAgICAgMTcwLFxuICAgICAgMTE1LFxuICAgICAgMTU0LFxuICAgICAgMzEsXG4gICAgICAxNDgsXG4gICAgICAyMjIsXG4gICAgICA5NSxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxNjIsXG4gICAgICAxNjcsXG4gICAgICAxMjksXG4gICAgICAxMDcsXG4gICAgICAyNTEsXG4gICAgICAyMTYsXG4gICAgICA3MSxcbiAgICAgIDcxLFxuICAgICAgMTIyLFxuICAgICAgMjIzLFxuICAgICAgMTk5LFxuICAgICAgNjYsXG4gICAgICAyMjgsXG4gICAgICA2LFxuICAgICAgMTE1LFxuICAgICAgMTA3LFxuICAgICAgNjIsXG4gICAgICAyMzMsXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFg0N0VQU1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI1NTU5MDE2NTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTA0MzI2NzEzNDk5OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2YyK09BRkVJSHdnN2dHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwUHU1WjYvY042MUFYcUhpZ2hmTUNkckNhNzRTQWEzdFg3em1hdFNkd1hRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZxY0JYYTRhbjlUekExNnp0MS9LQklXNk41WldvZzY3MUNJYkR1dVNVWU8zOFp0NDI4c2JPTHlYcC9vcGJiV21LY3drZHUrTGtERHhwMjRpMTIyaERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVyTEF3NzBPc0cyVDhrUmJmM3cwMjhnSGJaNzJuWTlmeWQwVzBkenZEcU9WSFk5UEJsbWVDRUNPTDRQSlVjRmJSUWxLZHVvKytLUVVxZ3ZpQnFacEJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI1NTU5MDE2NTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgxMTY3NDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHM3JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUczci5qc29uIjogIntcImtleURhdGFcIjpcInFLVkpZb0s4UjdoM1BaQ1pjdVF4R0lrTlI2aVFGdWdUWnhWV0pmbGtVWGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU0NTQ4NTA5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4MTE2NzQ4NjE2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".,>",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "`𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙-𝙈𝘿`" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🦄",
  packname: process.env.PACK_NAME || "𝒁𝒊𝙙𝒊𝒊-𝑫𝙚𝙘𝙚𝙣𝙩-𝕭𝐎𝐘",
  botname : process.env.BOT_NAME  || "`𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙-𝙈𝘿`",
  ownername:process.env.OWNER_NAME|| "𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙-𝙈𝘿",


  errorChat : process.env.ERROR_CHAT || "923288330026",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
