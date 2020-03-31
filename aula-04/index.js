//Instalar o Nodemon para carregar o servidor automatico
//npm install -g nodemon
//Vai na pasta que esta seu projeto e executar
//nodemon index.js

/**
 * Criando rotas de navegação
 */
//Indicando o caminho no express
const express = require('express');
//Instanciando o express dentro de uma variavel app
const app = express();
//Iniciando uma pagina para abrir no navegador.
app.get('/', function (req, res) {
    res.send('Gerenciador Financeiro!');
});
//Iniciando uma sub-pagina para abrir no navegador.
app.get('/sobre-empresa', function (req, res) {
    res.send('Pagina sobre empresa!');
});
//Iniciando uma sub-pagina para abrir no navegador.
app.get('/bloq', function (req, res) {
    res.send('Pagina de Bloq!');
});
//Iniciando uma sub-pagina para abrir no navegador.
app.get('/contato', function (req, res) {
    res.send('Pagina de contato!');
});

//Iniciando o servidor localhost:3333
app.listen(3333);