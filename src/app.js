const express = require('express');
require('../config/config');
const models = require('../models');
const sessions = require('../controllers/SessionsController');

const app = express();

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

module.exports = app;

const get = (req, res) => {
    let sessionId = parseInt(req.params.sessionId);
    res.setHeader('Content-Type', 'application/json');

    let sessions = [{ Id: 1, Name: 'John Teaches Angular', Location: 'Miles-U 1' },
    { Id: 2,Name: 'Scott Teaches AWS', Location: 'Miles-U 2' },
    { Id: 3,Name: 'Jack Teaches PODIS', Location: 'Jacks Desk' },
    ];

    let session = sessions.find(obj => obj.Id === sessionId);
    console.log(session);
    return res.json(session);
};
module.exports.get = get;
