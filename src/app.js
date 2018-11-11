const express = require('express');
require('../config/config');
const models = require('../models');
require('../global_functions');
const sessions = require('../controllers/SessionsController').Sessions;
const users = require('../controllers/UsersController').Users;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => { res.send('Hello World!');});

models.sequelize
    .authenticate()
    .then(() =>{
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('Unable to connect to the database:', err);
    });

if (CONFIG.app == 'dev' ){
    models.sequelize.sync();
}

app.get('/sessions', sessions.getAll);
app.get('/sessions/:sessionId', sessions.get);
app.post('/sessions', sessions.create);
app.put('/sessions', sessions.update);

app.get('/users', users.getAll);
app.get('/users/:userId', users.get);
app.post('/users', users.create);
app.put('/users', users.update);

module.exports = app;
