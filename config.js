//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUg2a0NqdjFNQmVVcnZDQzA1R2Z2M2pwellOMkI0WldLMFFuUTBkSVMybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEpWTkRMNmNwQjFINkxnWnBaVFhPOUxqK3VCcExyT0xCaHVHL1lDaFJYND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTlRETmJ2a2tqWnNobkgwaEtjckJ0c1JtZG5COEwvTHdnYzdKa3JxMVdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwajI0VTV2MFpLcWlFUGRTTlgrWHZJb2ZxVEpnSWtDYmRtOXdRTXZHQkVZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1QYitmRlBkS1VuL1g2UVJMYU5OM2s5dWVtRDQ2OXlVT1Jwd0ZucjMxRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDU2xpZjRsL2s1SWxFUmVOSE5lUytRUFZJWjZzNE9IN1RxWWM1RnlrQWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dVTTY3cmo2NGlnN0lFNDlvVTBrZmJZcElxRDJFUXlvbnZRcm1lTWtIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidE8vMjVQQTZCVEdWMDc1OVdJNGo2R2JSdnhhdi93ZVZhbzI3VTN5VFBFcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDRE42d1lGV3hqa3c0K0E2aHJDdzJGYWdTbWI1Uy9Jd1BaRUNsTDR1S21yaFRoUlpzV0lLTVlwK29BVWR0M0d5ZU1wOVhuTENzOFlnM3RpUXZpQkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODAsImFkdlNlY3JldEtleSI6InpMc3VOOVB4c0xNQ3F6TE90Z1BwblFXTUVIMXFCL0w0dUI0b1BVSkNlZkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjdkM3VmNVRKUjJTSURPc19tUHMyRGciLCJwaG9uZUlkIjoiOTI2MjdmMGQtZjJkMi00MzM2LTkzN2MtMDA0OTczYzk1M2FlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFhOURPOTN5NkxyUkR0MFBlOHRvWXkzMlNWST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2S2FFcERhT0ZrSnZlbW0wQ3ZXR0RHeW9wdlU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRkNOMlRETFIiLCJtZSI6eyJpZCI6IjIzMzU5NDE4NjkyMjo1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNON0E3YVlDRU15YzRiWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3UnhrVmVEZElvMlhmOE5ka25YeGRhZWUxd3F1a0VydnZkWUVKbVloV2tFPSIsImFjY291bnRTaWduYXR1cmUiOiJRUVdoUXdIOG1pKzI1MXQyNmpKanZVZytYa2U0aGpPN0FFT28yMStpdWpTMHYrbjdaMFRtbFpyay9xeWE0aGZiYWxWU3JMOGNKcnhIM0QvWVM2MzlnUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSXZDcVZzNWt3Q2Joc3l4azlHUGl0Q2UxTGdBK1VMdWRRL3JBdnpLbzBEOUJNUU5jaDZLZlRaK0wzSk5icGJMSVJLL0pqR0U4MnRJM3pDcUU5OU9NQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1OTQxODY5MjI6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlMGNaRlhnM1NLTmwzL0RYWkoxOFhXbm50Y0tycEJLNzczV0JDWm1JVnBCIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU0NTE4NjV9"
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "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",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-qxpQpJ-Mq1E6PIJ0q10PMNpQ2dZHJLIpNuLxv_SXdgT3BlbkFJuJuesP4lz39WGcqglcdoYDxTRUrkvHZGeNX_-klnsA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
