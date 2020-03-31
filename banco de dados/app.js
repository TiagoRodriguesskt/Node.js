//A partir do MySQL 8, necessario criar um novo usuário.
//Conexão com Banco de dados MySQL
const mysql = require('mysql');
//Conectando com Banco de Dados
const connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'Skt2356@',
    database    : 'site1'
});
//Cadastrando clinte
connection.connect(function(err){
    if (err) console.error('Erro ao realizar a conexão com Banco de Dados: ' + err.stack);
    return;
});
//Me mostra se o cliente foi cadastrado 
connection.query("INSERT INTO users(nome, email) VALUES ('Itamar', 'itamar@gmail.com')", function(err, result) {
    if (!err) {
        console.log('Usuario cadastrado com sucesso!');
    } else {
        console.log('Erro ao cadastra o usuario!');
    }
})