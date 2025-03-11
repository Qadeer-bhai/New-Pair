const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Gifted_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Gifted_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: '' + b64data });

               let GIFTED_MD_TEXT = `
*TOFAN MD PAIRING CODE CONNECTED*

> You have completed the first step of Deploying *TOFAN-MD*
> Copy the above session Id and deploy your bot.
> ASK DEVELOPER TOFAN FOR BOT DEPLOYMENT ✅ 
> Meanwhile you must follow the 4 steps. 

> 1st STEP

> 1st STEP
*TAP THE LINK BELOW AND FOLLOW THE CHANNEL* 
𓄂 https://whatsapp.com/channel/0029Vaw6yRaBPzjZPtVtA80A

> 2nd STEP
*YOU MUST JOIN OUR GROUP FOR UPDATES ON THIS BOT*
𓄂 https://whatsapp.com/channel/0029Vaw6yRaBPzjZPtVtA80A

> 3rd STEP
*FORK AND STAR 🌟 THE REPO FOR COURAGE*
𓄂 https://github.com/Qadeer-bhai/TOFAN-MD

> 4th STEP
*JOIN TELEGRAM GROUP CHAT*
𓄂 https://t.me/HacksManyMoreCheats

> 5th STEP 
*VISIT FOR TUTORIALS IF YOU DON'T KNOW HOW TO DEPLOY*
𓄂 https://www.youtube.com/@tofanmods7

*DEVELOPER1: Telegram*
𓄂 https://t.me/SbkaBhaiG

*DEVELOPER2:QADEER*
𓄂 https://wa.me/923079749129
> Dm ME ☝️ FOR WHATSAPP BOT DEPLOYMENT 🔥 🔥 

> ✅✅ 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 BY QADEER ✅✅`

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id,{text:GIFTED_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Gifted_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await GIFTED_MD_PAIR_CODE()
});
module.exports = router
