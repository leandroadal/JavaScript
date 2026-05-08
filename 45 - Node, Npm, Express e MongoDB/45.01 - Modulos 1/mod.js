const nome = 'Le';
const sobrenome = 'Ad';

const falaNome = () => nome + ' ' + sobrenome;


// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// Pode usar exports como atalho
exports.NOME = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
// Aqui this aponta para module.exports
this.qualquerCoisa = 'O que eu quiser exportar';

console.log(module.exports);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;

const test1 = 'test1';
const test2 = 'test2';
const test3 = 'test3';

// Outra forma de exportar
// Tirando o comentário ele sobrescreve os outros imports
/*
module.exports = {
    test1, test2, test3, 
}
*/