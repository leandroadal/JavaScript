/**
 * No JavaScript, todo objeto criado a partir de uma função construtora (ou class) possui um vínculo com outro objeto chamado prototype. Esse prototype é usado como fonte de propriedades e métodos compartilhados.
 * Ou seja, oferece uma referencia única para que por exemplo, funções em objetos não ocupem espaço na memoria a cada novo objeto adicionado.
 */

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto2 = () => 'Na função: ' + this.nome + ' ' + this.sobrenome;
}

// Cria um protótipo para que cada objeto de pessoa possua uma referencia ao método 'nomeCompleto' através do vinculo com o objeto __proto__. Dessa forma, não haverá um gasto maior de recursos para que todo Objeto de Pessoa possua uma mesma função.
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto2 = function () {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Luiz', 'O');
const pessoa2 = new Pessoa('Maria', 'A');

console.log(pessoa1.nomeCompleto());
console.log(pessoa2);

// Ordem de procura pessoa1 --> Pessoa.prototype --> Object.prototype. Então a função 'nomeCompleto2' de Pessoa sobrescreve a de __proto__.
console.log(pessoa1.nomeCompleto2());
