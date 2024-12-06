const express = require('express')
const app = express() // pesquisar mais sobre essa função

const PORT = 3000

app.listen(PORT, function() {
    console.log(`O express está rodando na porta ${PORT}`)
})

//rota
app.get('/', (req, res) => {
    res.send('Está funcionando')
})