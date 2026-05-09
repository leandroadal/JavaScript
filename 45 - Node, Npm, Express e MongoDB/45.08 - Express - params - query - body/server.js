/**
 * 
 */

const express = require('express');
const app = express();

// Serve para o Express conseguir interpretar dados enviados por formulários HTML
app.use(express.urlencoded({extended: true}));
/*
    : para ser dinâmico
    ? Para ser opcional enviar paramentos. Assim ainda é
possível acessar o /testes. ATENÇÃO NÃO FUNCIONA NO EXPRESS 5+
    Express 5 ou usa 2 rotas ou regex
*/
// app.get('/testes/:id_usuarios?', (req, res) => res.send(`Hello world!`));

app.get('/testes2{/:id_usuarios}', (req, res) => {
    res.send(req.params.id_usuarios);
});

// AGORA o mais indicado é crias 2 rotas diferentes
app.get('/testes', (req, res) => {
    // Query usa essa notação no navegador /testes?nome=Maria&idade=30, ou seja, ?chave=valor&chave=valor
    console.log(req.query);
    res.send('Sem ID');
});

app.get('/testes/:id_usuarios', (req, res) => {
    res.send(req.params.id_usuarios);
});

app.get('/testes/:id_usuarios/:parametros', (req, res) => {
    res.send(req.params);
});


app.get('/', (req, res) => {
    res.send(`
        Hello world!

        <form action="/" method="POST">
        Nome: <input type="text" name="nome"><br>
        Outro campo: <input type="text" name="outroCampo">
        <button>Enviar</button>
        </form>
        `);
});

// Para requisições POST
app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Foi enviado: ${req.body.nome}`);
});

// Para o servidor ficar escutando na porta 3000
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
