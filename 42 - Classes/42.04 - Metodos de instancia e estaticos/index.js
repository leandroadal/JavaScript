/**
 * Métodos de instância usam dados do objeto
 * Métodos estáticos pertencem à classe e não ao objeto
 */
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha(){
        console.log('Ok, vou trocar');
        console.log(this.volume); // Não possuiu acesso ao this da classe então retorna undefined. Para acessar seria necessário receber a instancia e usa-la pra acessar o volume.
    }

    static soma(x, y) {
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
// controle1.trocaPilha(); da erro pois não pra chamar o método estático assim
console.log(controle1);
ControleRemoto.trocaPilha();
console.log(ControleRemoto.soma(5, 2));
