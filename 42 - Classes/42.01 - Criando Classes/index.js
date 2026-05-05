/**
 * Classes são uma forma de criar objetos com estrutura e comportamento definidos, funcionando como um “molde”.
 */

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nomeCompleto = () => 'Na função: ' + this.nome + ' ' + this.sobrenome;
    }

    // Não é necessário tirar da classe as funções e coloca-lás no __proto__ pois por padrão isso já acontece.
    falar() {
        console.log(`${this.nome} esta falando`);
    }

    comer() {
        console.log(`${this.nome} esta comendo`);
    }

    beber() {
        console.log(`${this.nome} esta bebendo`);
    }
}

const pessoa1 = new Pessoa('Ronaldo', 'Venol');
const pessoa2 = new Pessoa('Anderson', 'Alves');

console.log(pessoa1.nomeCompleto());
console.log(pessoa2);

// COMPARANDO

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'Na função: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} esta falando`);
}

const pessoa3 = new Pessoa2('Ronaldo', 'Venol');
const pessoa4 = new Pessoa2('Anderson', 'Alves');

console.log(pessoa3.nomeCompleto());
console.log(pessoa4);