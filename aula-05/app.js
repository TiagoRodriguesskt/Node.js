//Carregando HTML no Node.js
/*
 * Criando rotas de navegação
 */
//Indicando o caminho no express
const express = require('express');
//Instanciando o express dentro de uma variavel app
const app = express();


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
//Me mostra um erro se não conectar com o Banco de Dados
connection.connect(function(err) {
    if (err) {
        console.error('Erro de conexção: ' + err.stack);
    }

    console.log('Conectando um id ' + connection.threadId);
});
//Mostrando os clientes no banco de dados.
connection.query('SELECT * FROM users', function(err, rows, fields) {
    if (!err) {
        console.log('resultado: ', rows);
    } else {
        console.log('Erro ao realizar a consulta!');
    }
})




//Iniciando uma pagina para abrir no navegador.
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/index.html');
});
//Iniciando uma sub-pagina para abrir no navegador.
app.get('/sobre-empresa', function (req, res) {
    res.sendFile(__dirname + '/src/sobre-empresa.html');
});
//Iniciando uma sub-pagina para abrir no navegador.
app.get('/bloq', function (req, res) {
    res.sendFile(__dirname + '/src/bloq.html');
});
//Iniciando uma sub-pagina para abrir no navegador.
app.get('/contato', function (req, res) {
    res.sendFile(__dirname + '/src/contato.html');
});

//Iniciando o servidor localhost:3333
app.listen(3333);

//Para executar outra página no localhost, não prescisa colocar o .html