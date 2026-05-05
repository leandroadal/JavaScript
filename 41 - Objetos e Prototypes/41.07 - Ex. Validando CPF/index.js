/**
 * validar CPF usando prototype
// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

function ValidaCPF(cpfEnviado) {
    this.cpfLimpo = cpfEnviado.replace(/\D+/g, '');
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    // 111.111.111-11 não é pra ser valido
    //if (this.isSequencia()) return false;

    // Removendo os últimos 2 dígitos
    const cpfParcial = this.cpfLimpo.slice(0, -2);


    const digito1 = this.calcularDigito(cpfParcial);
    const digito2 = this.calcularDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.calcularDigito = function (cpf) {
    const cpfArray = Array.from(cpf);
    let resultado = 0;

    for (let i = 0; i < cpfArray.length; i++) {
        //console.log(cpfArray[i], cpfArray.length + 1 - i);

        resultado += Number(cpfArray[i]) * ((cpfArray.length + 1) - i);
    }

    const digito = 11 - (resultado % 11);
    if (digito > 9) {
        return '0';
    } else {
        return String(digito);
    }
}

ValidaCPF.prototype.isSequencia = function () {
    // Vai repedir o primeiro valor a quantidade de vexes do tamanho do cpf. Então gera uma sequencia do primeiro valor.
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};


const cpf = new ValidaCPF('111.111.11-11');
console.log(cpf.valida());
