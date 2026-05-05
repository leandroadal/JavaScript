// Polimorfismo - permite sobrecrescer métodos da superclasses nas subclasses

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: Saldo atual: ${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag.: ${this.agencia}\nConta: ${this.conta}\nSaldo: ${this.saldo.toFixed(2)}`);
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}

const conta1 = new Conta(11, 10, 20);
console.log(conta1);
conta1.depositar(10);
conta1.sacar(31);

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Sobrescrevendo o sacar da 'Conta" para permitir sacar até o limite negativo
ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: Saldo atual: ${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

console.log('======= ContaCorrente ========');

const cc = new ContaCorrente(11, 100, 0, 50);
cc.depositar(10);
cc.sacar(70); // Saldo insuficiente
cc.sacar(60); // Zera o limite extra
cc.sacar(0.01);

function ContaPoupanca(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaCorrente;

console.log('======= ContaPoupança ========');

const cp = new ContaPoupanca(11, 100, 0, 50);
cp.depositar(10);
cp.sacar(70); // Saldo insuficiente
cp.sacar(60); // Como não foi sobrescrito o saque na poupança então o saldo também sera insuficiente pois o limite não faz diferença no saque presente na superclasse 'Conta' que é de onde o saque da poupança vem.
cp.sacar(0.01);
