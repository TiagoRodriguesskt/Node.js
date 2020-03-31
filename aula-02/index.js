//Criando um servido no Node.js
//Tem que executar o comando node index.js no terminal
const http = require('http');

http.createServer(function(req, res) {
    res.end('Gerennciador Financeiro!!!')
}).listen(3333);