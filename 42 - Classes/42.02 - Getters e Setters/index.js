/**
 * Getter - Retorna o valor do atributo
 * Setter - Modifica o valor do atributo
 */
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Leandro', 'Silva');
p1.nomeCompleto = 'Leandro A. dos S.'
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome); // Muda o sobrenome por causa do que está no set do 'nomeCompleto' que altera o valor que esta nas variáveis 'nome e 'sobrenome'.

console.log();

// ========= Dificultando o acesso aos atributos =========

// Tornando semi-privado para dificultar a troca por acidente para uma velocidade que condiz com o carro
const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade];
    }
    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    frear() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');
c1.velocidade = 2000; // se não existisse o set com esse nome seria criado o atributo velocidade

// Tenta acelerar ate 200
for (let i = 0; i <= 200; i++) {
    c1.acelerar();
    
}

console.log(c1);
console.log(c1.velocidade);

// Tenta diminuir a velocidade 200 vezes
for (let i = 0; i <= 200; i++) {
    c1.frear();
    
}

console.log(c1);
console.log();
// =================== OU ==================
// Tornando os atributos privados
class Carro2 {
    #velocidade;

    constructor(nome) {
        this.nome = nome;
        this.#velocidade = 0;
        //this.velocidade = 0; não pode pois o set não deixa valor igual a 0.
    }

    get velocidade() {
        return this.#velocidade;
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this.#velocidade = valor;
    }

    acelerar() {
        if (this.#velocidade >= 100) return;
        this.#velocidade++;
    }

    frear() {
        if (this.#velocidade <= 0) return;
        this.#velocidade--;
    }
}

const c2 = new Carro2('Fusca2');
c2.velocidade = 2000;
console.log('Fusca2');
console.log(c2);
console.log(c2.velocidade);
//console.log(c2.velocidade(20)); errado o set não é função
c2.velocidade = 20;
console.log(c2.velocidade);
//c2.#velocidade = 200; da erro pois é um campo privado
