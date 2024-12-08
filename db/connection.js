//arquivo de conexão ao BD

//sequelize -> aplicação para utilizarmos bancos RELACIONAIS com o node


//chamando o pacote sequelize
const Sequelize = require('sequelize')


//criando uma instância do sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite', //informa qual banco utilizaremos
    storage: './db/app.db' //informa onde está o arquivo do banco
})

//exportando o apontamento do banco
module.exports = sequelize //será importado como se fosse um pacote, para o arquivo app.js