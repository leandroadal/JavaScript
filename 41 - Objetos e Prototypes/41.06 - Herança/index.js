// Herança usando função
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Criando função de desconto no protótipo da função
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

// =============== CAMISETA ===============

function Camiseta(nome, preco, cor) {
    // O 'Call' copia os atributos do produto, porém não de seu prototype.
    Produto.call(this, nome, preco);
    this.cor = cor;
}

// Para poder usar a função de aumento do produto a partir do objeto da camiseta

// Camisa.prototype é um objeto vazio então quando recebe o objeto, o construtor fica sendo o Produto
Camiseta.prototype = Object.create(Produto.prototype); 

// Define a Camiseta como construtor
Camiseta.prototype.constructor = Camiseta;

// Sobrescrevendo o método do aumento que estava no Produto
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};
// ==========================================

// =============== CANECA ===============

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

// ================================================

const produto = new Produto('Garrafa', 545);
const camiseta = new Camiseta('Regata', 3.8, 'Verde');
const caneca = new Caneca('Caneca', 12, 'Plástico', 5);

produto.aumento(10);
camiseta.aumento(10);
caneca.estoque = '520'; // Ignora a string por causa do set do estoque.

console.log(produto);
console.log(camiseta);
console.log(caneca);
console.log('Estoque caneca:', caneca.estoque);

camiseta.preco = '1000'; // Preço vira uma string 
console.log('Camiseta com o preço modificado:', camiseta);
