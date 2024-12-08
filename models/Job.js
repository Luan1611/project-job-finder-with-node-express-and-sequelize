const Sequelize = require('sequelize')
const db = require('../db/connection')

//Criando método do modo

//cria o model com base nos campos da tabela
const Job = db.define('job', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    salary: {
        type: Sequelize.STRING
    },
    company: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    new_job: {
        type: Sequelize.INTEGER
    }
})

//exportando o objeto job (model)
module.exports = Job