/**
 * Com o nodemon qualquer alteração no arquivo o server atualiza automaticamente
 */

const express = require('express');
const app = express();

// Para requisições GET
app.get('/', (req, res) => {
    res.send(`
        Hello world!

        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `);
});

// Para requisições POST
app.post('/', (req, res) => {
    res.send(`Recebi o formulário`);
});

// Para o servidor ficar escutando na porta 3000
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
