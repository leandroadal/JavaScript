import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {
    rand(min = 10000000000, max = 99999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    // Deixando na formatação do CPF
    formatando(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    geraNovoCPF() {
        // Gera os Primeiros 9 dígitos do CPF
        const cpfSemDigito = this.rand();
        // E identifica quais seriam os dígitos verificadores dos 9 números
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
        // Criando um CPF valido
        const novoCPF = cpfSemDigito + digito1 + digito2;
        return this.formatando(novoCPF);
    }
};
