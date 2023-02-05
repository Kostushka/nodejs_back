const http = require('http');
const fs = require('fs');

// -----------------------------
// Promise
// -----------------------------
const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const server = http.createServer(async (req, res) => {
    switch (req.url) {
        case '/':
            // -----------------------------
            // ассинхронная операция - promise
            // -----------------------------
            try {
                const data = await readFile('lesson3/main.html');
                res.write(data);
                res.end();
            } catch (err) {
                res.write('some error');
                res.end();
            }
            break;
        default:
            // -----------------------------
            // ассинхронная операция - promise
            // -----------------------------
            await delay(3000);
            res.write('Information about smth...');
            res.end();
    }
});

server.listen(3003);
