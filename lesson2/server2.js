const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            // -------------------------------
            // ассинхронная операция - коллбэк
            // -------------------------------
            fs.readFile('lesson2/index.html', (err, data) => {
                if (err) {
                    res.write('some error');
                } else {
                    res.write(data);
                }
                res.end();
            });
            break;
        default:
            // -------------------------------
            // ассинхронная операция - коллбэк
            // -------------------------------
            setTimeout(() => {
                res.write('Information about ...');
                res.end();
            }, 3000);
            break;
    }
});

server.listen(3003);
