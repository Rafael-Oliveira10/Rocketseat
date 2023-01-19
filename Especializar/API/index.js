const express = require('express');

const app = express();

app.listen('3000')

/* -GET
app.route('/').get((req, res) => res.send('Hello World!'))
app.route('/sobre').get((req, res) => res.send('O planeta terra')) */

/*middleware
app.use(express.json());


 -POST 
app.route('/').post((req, res) => res.send(req.body)); 

-PUT 
app.use(express.json())


let author = "Rafael"

app.route('/').get((req, res) => res.send(author))

app.route('/').put((req, res) => {
    author = req.body.author
    res.send(author)
} ); 

-DELETE 

let author = "Rafael"

app.route('/:identificador').delete((req, res) => {
    author = ""
    res.send(req.params.identificador)
}) */