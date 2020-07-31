const express = require('express');
const path = require('path');
const cardsRouter = require('./routes/cards.js');
const usersRouter = require('./routes/users.js');

const { PORT = 3000 } = process.env;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', cardsRouter);
app.use('/', usersRouter);

app.use((req, res) => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }));

app.listen(PORT);
