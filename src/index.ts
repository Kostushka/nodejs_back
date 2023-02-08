// const express = require('express');
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req: string, res: any) => {
    res.send('Hello World!');
});

app.get('/users', (req: string, res: any) => {
    res.send('Hello users!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// node index.js

// yarn nodemon index.js - чтобы не перезапускать каждый раз
// yarn nodemon --inspect index.js - чтобы отлаживать

// yarn tsc - обращение к ts компилятору, возвращает скомпилированный js
// yarn tsc --init - создает tsconfig с настройками
// tsconfig: в outDir можно определить dist, куда будет записываться скомпилированный js

// yarn tsc -w - компилирует в режиме watch (следит за изменениями)
// yarn nodemon --inspect .\dist\index.js
