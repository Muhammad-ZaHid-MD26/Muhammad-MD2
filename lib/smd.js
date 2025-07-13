// ✅ Clean fixed version for Suhail-MD Pair Code system
const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, Browsers } = require('@whiskeysockets/baileys');
const pino = require('pino');
const fs = require('fs');
const { Boom } = require('@hapi/boom');

const startBot = async () => {
    const { state, saveCreds } = await useSingleFileAuthState('./creds.json');

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false,
        logger: pino({ level: 'silent' }),
        browser: Browsers.macOS('Suhail-MD'),
    });

    // ✅ Pair code generate if not registered
    if (!sock.authState.creds.registered) {
        const code = await sock.requestPairingCode('923276326230@s.whatsapp.net'); // ← apna number likhein
        console.log('📲 Pairing Code:', code);
    }

    // ✅ Session save
    sock.ev.on('creds.update', saveCreds);

    // ✅ Handle connection events
    sock.ev.on('connection.update', ({ connection, lastDisconnect }) => {
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
            if (reason === DisconnectReason.loggedOut) {
                console.log('❌ Logged Out — Please re-run the bot');
            } else {
                console.log('🔁 Connection closed. Reconnecting...');
                startBot(); // Reconnect
            }
        } else if (connection === 'open') {
            console.log('✅ WhatsApp Connected');
        }
    });

    // 🔄 Place to attach command, message or plugin loaders if needed
};

module.exports = {
    init: startBot,
    connect: () => {}, // optional
    DATABASE: {}, // optional
    logger: console
};
