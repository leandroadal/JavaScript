/**
 * Factory Functions - funções que criam e retornam objetos, sem usar new
 * 
 */

// Método com acoplamento
function CriarPessoa(nome, sobrenome) {
    // Cria um map com as funções
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} esta falando`);

        },

        comer() {
            console.log(`${this.nome} esta comendo`);

        },

        beber() {
            console.log(`${this.nome} esta bebendo`);

        }
    }
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
    });

}

const p1 = CriarPessoa('Leandro', 'Silva');
const p2 = CriarPessoa('Carol', 'Oliveira');
console.log(p1);
console.log(p1.falar()); // Mostra falando e Gera um undefined ja que esta dando log dentro de um log
p1.comer()
p1.beber()
console.log();
console.log(p2);
console.log();

// Método com Desacoplado
// Isso permite a reutilização em outras funções sem depender da herança
const falar = {
    falar() {
        console.log(`${this.nome} esta falando`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} esta comendo`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} esta bebendo`);
    }
};

const pessoaPrototype2 = Object.assign({}, falar, comer, beber);

function CriarPessoa1(nome, sobrenome) {  
    return Object.create(pessoaPrototype2, {
        nome: { value: nome, enumerable: true },
        sobrenome: { value: sobrenome, enumerable: true },
    });

}

const p3 = CriarPessoa1('Leandro', 'Silva');
console.log(p3);
p3.falar(); // Mostra falando e Gera um undefined ja que esta dando log dentro de um log
p3.comer();
p3.beber();