import validator from 'validator';

export default class Login {
  constructor(formClass) {
    //this.form = form;
    this.form = document.querySelector(formClass);
  }
    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', event => {
            this.handleSubmit(event);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const hasError = this.validate(event);

        if (!hasError) {
            this.form.submit();
        }
    }

    validate(e) {

      for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        const emailField = this.form.querySelector('input[name="email"]');
        const email = emailField.value;
        const passwordField = this.form.querySelector('input[name="password"]');
        const password = passwordField.value;
        let error = false;

         if (!validator.isEmail(email)) {
             this.criaErro(emailField, 'E-mail inválido.');
            error = true;
        }

         if (password.length < 3 || password.length > 50) {
            this.criaErro(passwordField, 'A senha deve conter entre 3 e 50 caracteres.');
            error = true;
        }

        return error;

    }

    criaErro(campo, msg) {
        const div = document.createElement('div'); // cria uma fiv
        div.innerHTML = msg; // Coloca a mensagem dentro da div
        div.classList.add('error-text'); // Deixa o erro com o estilo defino no css.
        campo.insertAdjacentElement('afterend', div); // Coloca o erro abaixo do campo de input
    }
  
}

/* 
init() {
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      const email = this.form.querySelector('input[name="email"]').value;
      const password = this.form.querySelector('input[name="password"]').value;

      if (email === '') {
        alert('O campo de email é obrigatório.');
        return;
      }

      if (password === '') {
        alert('O campo de senha é obrigatório.');
        return;
      }

      this.form.submit();
    });
  }
*/