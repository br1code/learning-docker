'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello! I am in a container!\n');
});

app.get('/bye', (req, res) => {
    res.send('Good bye!!!');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});