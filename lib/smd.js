const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, Browsers } = require('@whiskeysockets/baileys');
const pino = require('pino');
const fs = require('fs');
const { Boom } = require('@hapi/boom');

const startBot = async () => {
    const { state, saveCreds } = await useSingleFileAuthState('./creds.json');

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false, // ❌ QR off
        logger: pino({ level: 'silent' }),
        browser: Browsers.macOS('Suhail-MD'),
    });

    // ✅ Pair code system
    if (!sock.authState.creds.registered) {
        const code = await sock.requestPairingCode('923276326230@s.whatsapp.net'); // ← Apna number yahan likho
        console.log('📲 Pairing Code:', code);
    }

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', ({ connection, lastDisconnect }) => {
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
            if (reason === DisconnectReason.loggedOut) {
                console.log('❌ Logged Out — Please re-run the bot');
            } else {
                console.log('🔁 Connection closed. Reconnecting...');
                startBot();
            }
        } else if (connection === 'open') {
            console.log('✅ WhatsApp Connected');
        }
    });
};

module.exports = {
    init: startBot,
    connect: () => {}, // agar use ho raha ho
    DATABASE: {},
    logger: console
};
