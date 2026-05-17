import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }
    init() {
        this.events();
    }

    events() {
        if (!this.form) return;

        // Captura o campo de telefone para aplicar a máscara em tempo real
        const telefoneField = this.form.querySelector('input[name="telefone"]');
        if (telefoneField) {
            telefoneField.addEventListener('input', (event) => {
                this.maskTelefone(event.target);
            });
        }

        // Evento de envio do formulário
        this.form.addEventListener('submit', event => {
            this.handleSubmit(event);
        });
    }

    maskTelefone(input) {
        const apenasNumeros = input.value.replace(/\D/g, ''); // Trabalha apenas com os números puros
        let valor = apenasNumeros;

        if (!valor) {
            input.value = '';
            return;
        }

        // Se tiver até 10 dígitos (Formato: 88 9999 9999)
        if (valor.length <= 10) {
            if (valor.length > 2) {
                valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 6)}-${valor.slice(6, 10)}`;
            } else if (valor.length > 0) {
                valor = `(${valor}`;
            }
        }

        // Se tiver 11 dígitos (Formato: 88 99999 9999)
        else {
            valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 11)}`;
        }

        input.value = valor; // Aplica o valor formatado na tela
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const hasError = this.validate(event);

        if (!hasError) {
            this.form.submit();
        }
    }

    validate() {
        // Remove erros antigos antes de validar novamente
        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        let hasError = false;

        // Seleção dos campos do formulário
        const nomeField = this.form.querySelector('input[name="nome"]');
        const sobrenomeField = this.form.querySelector('input[name="sobrenome"]');
        const emailField = this.form.querySelector('input[name="email"]');
        const telefoneField = this.form.querySelector('input[name="telefone"]');

        // 1. Validação de Nome
        // verifica se o campo existe e se está vazio (após remover espaços em branco)
        if (nomeField && !nomeField.value.trim()) {
            this.criaErro(nomeField, 'O campo "Nome" deve estar preenchido.');
            hasError = true;
        }

        // 2. Validação de Sobrenome
        if (sobrenomeField && !sobrenomeField.value.trim()) {
            this.criaErro(sobrenomeField, 'O campo "Sobrenome" deve estar preenchido.');
            hasError = true;
        }

        // 3. Validação de E-mail e Telefone (Pelo menos um deve ser preenchido e válido)
        const emailVal = emailField ? emailField.value.trim() : '';
        const telefoneVal = telefoneField ? telefoneField.value.trim() : '';

        if (!emailVal && !telefoneVal) {
            // Nenhum dos dois foi preenchido
            if (emailField) this.criaErro(emailField, 'Você deve preencher pelo menos o E-mail ou o Telefone.');
            if (telefoneField) this.criaErro(telefoneField, 'Você deve preencher pelo menos o E-mail ou o Telefone.');
            hasError = true;
        } else {
            // Se o e-mail foi preenchido, ele precisa ser válido
            if (emailVal && !validator.isEmail(emailVal)) {
                this.criaErro(emailField, 'E-mail inválido.');
                hasError = true;
            }

            // Se o telefone foi preenchido, ele precisa ser válido (mínimo 8 dígitos para um formato básico)
            if (telefoneVal && !validator.isMobilePhone(telefoneVal, 'pt-BR')) {
                this.criaErro(telefoneField, 'Telefone inválido.');
                hasError = true;
            }
        }

        return hasError;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div'); // cria uma fiv
        div.innerHTML = msg; // Coloca a mensagem dentro da div
        div.classList.add('error-text'); // Adiciona uma classe para identificação posterior
        campo.insertAdjacentElement('afterend', div); // Coloca o erro abaixo do campo de input
    }

}