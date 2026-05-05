/**
 * As classe filhas obtém da classe pai atributos e funções
 */
class DispositivoEletronico {
    constructor(nome) {
        this.nome =nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }
    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, cor, temWifi) {
        super(nome);
        this.cor = cor;
        this.temWifi = temWifi;
    }

    // Sobrescrita
    ligar() {
        console.log('Ligar o tablet');
        super.ligar(); // chamar o método ligar da classe pai 'DispositivoEletronico'
    }
}

const d1 = new DispositivoEletronico('Smartphone');
console.log(d1);
d1.ligar();
d1.ligar();
console.log(d1);

d1.desligar();
console.log(d1);
d1.desligar();

const s1 = new Smartphone('iPhone', 'preto', '12');
console.log(s1);
s1.ligar();
console.log(s1);

const s2 = new Smartphone('Samsung Galaxy', 'branco', 'S21');
console.log(s2);
s2.ligar();
console.log(s2);

const t1 = new Tablet('iPad', 'prata', true);
console.log(t1);
t1.ligar();
console.log(t1);
t1.ligar();