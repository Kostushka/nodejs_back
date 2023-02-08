// URI parametrs - обязательные параметры https://localhost:3003/api/books/32
// QUERY parametrs - необязательные параметры https://localhost:3003/api/books?year=2005&limit=25
// GET
// POST
// PUT - обновить, но отсылаем все данные, даже если обновляем не все
// PATCH - обновить, отсылаем только те данные, которые обновляем
// DELETE

const http = require('http');

const server = http.createServer((request, response) => {});

server.listen(3003);
