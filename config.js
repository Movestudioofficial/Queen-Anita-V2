//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0hBWkZGQml5NzFKN3VJaHZscXBQYWIwcnd0Yk8vMFBPZUxQV1YvU0dFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXVsTW5jT3lvSHFVWVUvcnFhS1Y2MDVKbkVrbFVtYnNDNGFsQUQ2bmxsdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTWdWU01vRUxKVmtCK252UCtlSEZlSEd2N2d2aTZMV2pyZnVqbHJQQ0g4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmQm5ocEpNbHYwbUZFWmxLditoaVJIVVlRandzWWxFMEMyRVpVYnE3dFhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGQVl3eTRCVXdUMW9mQjRMdzZrRkEraFBNT002akMwZkgxWVdvNXFSMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpVWk1zRW5wTXFFNHNkVzlQeHUxVk1RVWlrN1lZcU5leGFRL0ZJWlJDaWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUdGMzhodlBtWEE4SmRqY2NBTG55YUNWMitUS1BnTlZoaWlSeFdNTmNsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWZ2ZnhlOXUvY3ZmdGhpbUFNTnREdkZ4UkszVmFvR3JjaDgzZExwRWQyOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imdqa1RjSFVjQ1pqNXFIWGJrbU10dVVMS2N3N0Y5SkppdHl4OFJ2R0M0Q1FGRDZ6RTg2OXVaZGpUb0NCVEoyTkJoS2JQY2wzZzhBVTY1ODlTWlVPaUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI4LCJhZHZTZWNyZXRLZXkiOiJDOCtndVFiWjdXak9laHhYa0I1dGlFb1VzalIzYXpneFV5ZlVnbEw0QkpvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMzU0NzE0MjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E2NDZBODRFRkI3NEM0NzBFNjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzIyMTQ0N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiV3BEbE9PRDNSWW1SWHl4MzRpTnZoUSIsInBob25lSWQiOiIyYjczZDVhNS1lZjU1LTRhMGYtYjA5OC04YjU2MzA0OTgxZTgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVkvdUR4aWVHem1aOGlLU3JRT0kxSnFpejFRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRKQUhVaDFxRmlrYnhxZzIyUGFFcWc2L2JBaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJRMVFBM0ZDWCIsIm1lIjp7ImlkIjoiMjM0OTAzNTQ3MTQyNzo1M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNb3ZldHZwbHVzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOcVNrYTRJRUxPZHpiY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZWGxvVGNydmxCMS9TNE5vUGtOd3IyOUwxMWlTNzk5RkJUdXl2QXMvdnk0PSIsImFjY291bnRTaWduYXR1cmUiOiJTU1JKckhHdlovOUdnQUQrbStMMDQxSTFGZnpFOStjKzRhaUtGN1BKSFk3NjBtd0xVWEJ4WGsrTThyZmtMa3RGRVVnMjh0UitWM1FhZDk2Sy9WMklEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZWxQc04xdXRDL1Z2c2NkSzF5MG1xM2cwZG05OThLUUtnYWl4MnlmWFBSV1pDZjByN3pTSE9tS3NHK1doNzNTU2hzSld2VVM3eFVka05uTEF1ZDNkQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDM1NDcxNDI3OjUzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldGNWFFM0s3NVFkZjB1RGFENURjSzl2UzlkWWt1L2ZSUVU3c3J3TFA3OHUifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjcyMjE0NDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmI5In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
