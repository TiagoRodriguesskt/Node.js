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

//Conectando com o Banco de dados MySQL
connection.connect(function(err){
    if (err) console.error('Erro ao realizar a conexão com Banco de Dados: ' + err.stack);
    return;
});
//Apaga um regitro no Banco de Dados
connection.query("DELETE FROM users WHERE id = 8", function(err, result) {
    if (!err) {
        console.log("Usuario excluido!");
    } else {
        console.log("Usuario não excluido!");
    }
});