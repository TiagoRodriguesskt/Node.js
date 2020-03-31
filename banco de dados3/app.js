const Sequelize = require('sequelize');

const sequelize = new Sequelize('site1', 'root', 'Skt2356@', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function() {
    console.log('Conexão com sucesso!');
}).catch(function(err) {
    console.log('Não conectado com o Banco de dados! ' + err);
});

const Pagamentos = sequelize.define('pagamentos', {
    //Atribudos
    nome: {
        type: Sequelize.STRING,
        
    },
    valor: {
        type: Sequelize.DOUBLE
    }
});
//Cria tabela com Sequelize
//pagamentos.sync({force: true});

Pagamentos.create({
    nome: "Agua",
    valor: 110
})