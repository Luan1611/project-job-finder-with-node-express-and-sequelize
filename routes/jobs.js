//rota que adiciona os jobs no projeto

// ela vai ser um POST que vai se comunicar com a nossa API e vai fazer a inserção
//via sequelize no banco


const express = require('express')

 //objeto de rotas do express
 const router = express.Router()

 //model
 const Job = require('../models/Job')


router.get('/test', (req, res) => {
    res.send('deu certo')
})


//POST para adicionar o job
router.post('/add', (req, res) => {

    //corpo da requisição (tem todos os dados necessários para fazer a adição no banco)
    // req.body => retorna objeto
    let {title, salary, company, description, email, new_job} = req.body
    //Obs: para a linha acima funcionar, é necessário importar e usar o body-parser
    //no 'app.js'


    // insert
    //método do sequelize que insere dados no DB
    //espera todos os parâmetros descritos em 'Job.js' no objeto Job
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
        .then(() => {
            res.redirect('/') //Se der certo a inserção, redireciona para a home
        })
        .catch(err => console.log(err))
})

//exportando as rotas
module.exports = router