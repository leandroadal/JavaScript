// Construindo objetos

// Ao criar uma função é criado um new Object -> Object.prototype. Ou seja, a função é um objeto e esse objeto está ligado ao objeto prototype.
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // Queremos que o proto de 'objB' seja igual ao do 'objA',ou seja, '__proto__: objA'. Usa-se 'Object.setPrototypeOf'.
};

// Colocando o Objeto A dentro do protótipo do objeto B
Object.setPrototypeOf(objB, objA);
// Dessa forma, é possível acessar o 'objA' através do 'objB'
console.log(objB.chaveA);

const objC = new Object();
objA.chaveC = 'C';

// Assim o objC poderá acessar o 'objA', 'objB' e 'objC'.
Object.setPrototypeOf(objC, objB);

// Usando função
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Criando função de desconto no protótipo da função
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

// Criando função de aumento no protótipo da função
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

// Objeto Literal. Ou seja, sem uma classe definida ou função construtora.
const p2 = {
    nome: 'Caneca',
    preco: 15
};

// Para 'p2' ter acesso as funções 'aumento' e 'desconto' é necessário possuir o __proto__ do Produto pois é onde elas estão definida.
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

// Criar e configuração um Prototype
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true, // Pode alterar depois
        configurable: true, // Pode apagar ou redefinir
        enumerable: true, // Aparece em loops
        value: 79
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 10
    }
});

p2.aumento(10);

console.log(p1);
console.log(p2);
console.log(p3);
