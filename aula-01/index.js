console.log('Gerenciador Financeiro!'); //Mostrando o titulo

var client = 'Tiago Rodrigues'; //Passando uma variável
console.log('Cliente: ' + client); //imprimindo a variável

//Valor da variável
var valProduct = 100;
var valDiscount = 37;

//Buscando o valor na pasta modules
var discountFunc = require('./modules/callDiscount');
//Retornando o valor da subtração e passando para uma variável
var finalValue = discountFunc(valProduct, valDiscount);
//Imprimindo o resultado final
console.log(`O valor final eh R$ ${finalValue},00!`);
