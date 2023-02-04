// модуль http
const http = require('http');

let count = 0;

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.write(`Hello, I am server! ${count}\n`);
    } else {
        res.write(`Hello, I am server! ${++count}\n`);
    }

    // синхронный код с задержкой
    // каждый запрос -> в ожидание, пока не выполнится код с задержкой
    // для последнего запроса в цепочке - максимальная задержка из всех задержек предыдущих запросов
    // причина: js - однопоточный ЯП

    // потому используется ассинхронный код: то, что требует время отдается node js или web api,
    // сервер не простаивает и принимает следующий запрос
    // для последнего запроса задержка будет +- такой же как и для первого

    switch (req.url) {
        case '/':
        case '/main':
            // ассинхронно
            // ---------------------------------
            // setTimeout(() => {
            //     res.write('Main page\n');
            //     res.end();
            // }, 5000);
            // ---------------------------------
            // синхронно
            // ---------------------------------
            // const start = new Date();
            // while (new Date() - start < 5000) {
            //     console.log(new Date() - start);
            // }
            // ----------------------------------
            res.write('Main page\n');
            break;
        case '/pages':
            res.write('Pages\n');
            break;
        default:
            res.write('Lalala\n');
            break;
    }

    // но при ассинхронности:
    // в switch - ожидание
    // однако дальнейший код после switch выполнится синхронно
    // т.е. сразу выполнится закрытие соединения
    res.end();
});

server.listen(3003);
