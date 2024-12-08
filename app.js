const express = require('express')
const app = express() // pesquisar mais sobre essa função
const db = require('./db/connection') //importa o arquivo (não precisa informar extensão)


const PORT = 3000

app.listen(PORT, function() {
    console.log(`O express está rodando na porta ${PORT}`)
})

// db connection

// db.authenticate() retorna uma Promise
db.authenticate()
    .then(() => {
        console.log('Conectou ao banco com sucesso')
    })
    .catch(err => {
        console.log('Ocorreu um erro ao conectar', err)
    })

//routes
app.get('/', (req, res) => {
    res.send('Está funcionando')
})