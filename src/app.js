const express = require('express');
require('../config/config');
const models = require('../models');
const sessions = require('../controllers/SessionsController').Sessions;

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

const get = async (req, res) => {
    let err, session;
    let sessionId = parseInt(req.params.sessionId);
    res.setHeader('Content-Type', 'application/json');

    [err, session] = await to(Sessions.findById(sessionId));
    if (!session) {
        res.statusCode = 404
        return res.json({ success: false, error: err});
    }
    return res.json(session);
}
module.exports.get = get;
