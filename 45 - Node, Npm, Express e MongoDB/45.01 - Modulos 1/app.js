// Para módulos externos que estão no node_modules não precisa passar o caminho
const axios = require('axios');

const mod1 = require('./mod');
// Da para pegar so um coisa no import com:
const falaNome1 = require('./mod').falaNome;

console.log(mod1);
console.log(mod1.falaNome());
console.log(falaNome1());

const { NOME, sobrenome, falaNome} = require('./mod');
console.log(falaNome());

/*
axios('url')
    .then(response => console.log(response.data))
    .catch()
*/

console.log(mod1.test1, mod1.test2, mod1.test3);