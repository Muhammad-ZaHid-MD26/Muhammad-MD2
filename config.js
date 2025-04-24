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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_18_04_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDczLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI3LFxuICAgICAgICA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzLFxuICAgICAgICA3NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODIsXG4gICAgICAgIDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3LFxuICAgICAgICA4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUYTJwMVZyZzI0K0ZBTkVmMC9EZTZQeUMvMWZXbzBMY1VPR3o5Y0lmSEdrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwb3B1U2htb1RCNlh3NS0yS1cwOElnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU0MGMxYjVkLTRiODgtNDRlNC05N2E1LTM2MjFkN2M2NWU2OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICAyNTQsXG4gICAgICAxNDYsXG4gICAgICA3MyxcbiAgICAgIDE0NCxcbiAgICAgIDk1LFxuICAgICAgMTQ0LFxuICAgICAgNDIsXG4gICAgICA1MixcbiAgICAgIDQ0LFxuICAgICAgMzYsXG4gICAgICAyMDgsXG4gICAgICA0NyxcbiAgICAgIDE4NSxcbiAgICAgIDE3NyxcbiAgICAgIDIxNixcbiAgICAgIDYwLFxuICAgICAgNTUsXG4gICAgICA2NyxcbiAgICAgIDk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDE0LFxuICAgICAgOTIsXG4gICAgICA0OSxcbiAgICAgIDY3LFxuICAgICAgMTI1LFxuICAgICAgMCxcbiAgICAgIDM4LFxuICAgICAgNTUsXG4gICAgICAyNDksXG4gICAgICAxOCxcbiAgICAgIDIzMyxcbiAgICAgIDQzLFxuICAgICAgNixcbiAgICAgIDQzLFxuICAgICAgNDEsXG4gICAgICAxMTksXG4gICAgICAxMzgsXG4gICAgICAyMDksXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKTFg1NExCTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjg4MzMwMDI2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJg8J2SgfCdkorwnZmZ8J2SivCdkorhmprht5/Nk8ytzY7MrMylzK3Mpcys5L2T6Z2i55qE4Zqa4bemzZPMrc2OzKzMpcytzKXMrPCdla3wnZCO8J2QmGBcXG7hmprht59cXG7hmprht6ZcXG7wk4qI56mG572V6buY5b638JOKiVxcbvCThqnwk4KN8JOGqlxcbuGamuG3n1xcbuGamuG3plxcbvCThqnEqy5hbS/miY7kvIrov6rwk4aqXCIsXG4gICAgXCJsaWRcIjogXCIyMTc5NTMwMTQ0MzU5NTk6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOenhuSXNCRVBMYXBzQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjd1SU40cUZRVnpqY0hUbk9Yb0NZeGNuVElnKyt1R1E0TDBBR1diVzI4Rkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM3Mzb09LMXFrZ0ZMekxHNjBYRlRjdTlMQlcyYVZWcGFQeHhOc2JBbCtrYUtPS29DL0lJRzZDYzZUT0lKOEsrWnZ1Zm4vbzJ0L0NyS25FNlNRbXVuRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYWRHVFIvcFpCYVRJQkdZVDh0NXMyNGdkN0pMKzNZOWY4YUR3VUYrSFY1UHhpZVVCSUNhQlJZa2o4RndFZWYvVUdMeEh5Mkp6MFRXd0RHY2xoNDZqZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjg4MzMwMDI2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTQ2NDY5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJPWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQk9ZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMWxCbmVvZFpkNTFvMTZpWVNMQW9SN0VuSnRyb1JEa0lqSUl2NDJML0FtND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTE5Nzc0MzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTQ2NDY5OTUzMVwifSIKfQ=="  // PUT your SESSION_ID 


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
