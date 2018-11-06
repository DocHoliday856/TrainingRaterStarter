var express = require ('express');

var port = 8080;
var app = express();

app.get('/', (req, res) => { res.send('Hello World!');});
app.get('/test', (req, res) => { res.send('Hello Test World!');});

app.post('/', (req, res) => { res.send('Got Post!');});

app.put('/', (req, res) => {res.send('Put it there champ.');});
app.delete('/user', (req, res) => {res.send('Get outta town');});


app.listen(port);