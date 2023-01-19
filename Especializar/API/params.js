const express = require('express');
const axios = require('axios');

const app = express();

app.listen('3000')

/* middleware
BODY
app.use(express.json())

app.route('/').post((req, res) => {
    const {nome, cidade,} = req.body
    res.send(`Meu nome é ${nome} e sou da cidade de ${cidade}`)
}) 

ROUTE PARAMS
app.route('/').get((req, res) => res.send("oi"))

app.route('/:variavel').get((req, res) => res.send(req.params.variavel))

app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome)) 

QUERY PARAMS
app.route('/about/user').get((req, res) => res.send(req.query)) 

CONSUMINDO APIs */

app.route('/').get((req, res) => {
    
    axios.get('https://api.github.com/users/Rafael-Oliveira10')
//abaixo com a propria imagem usando um codigo html 
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
//somente a url:    .then(result => res.send(result.data.avatar_url))
    .catch(error => console.log(error))
})