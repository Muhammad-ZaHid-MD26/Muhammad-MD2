const bot = require(__dirname + '/lib/smd');
const { VERSION } = require(__dirname + '/config');
const http = require('http');

const PORT = process.env.PORT || 8000; // Koyeb ke liye zaroori

const start = async () => {
    console.log(`Suhail ${VERSION}`);
    try {
        await bot.init();
        bot.logger.info('⏳ Database syncing!');
        await bot.DATABASE.sync();
        await bot.connect();
    } catch (error) {
        console.error(error);
        start();
    }
};

start();

// Koyeb ko alive rakhne ke liye ek dummy HTTP server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running!\n');
}).listen(PORT, () => {
    console.log(`HTTP server running on port ${PORT}`);
});
