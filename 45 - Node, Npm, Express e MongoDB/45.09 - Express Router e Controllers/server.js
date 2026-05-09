/**
 * O Router é um recurso do Express utilizado para separar e organizar rotas em módulos independentes.
 * 
 * Arquitetura MVC (Model–View–Controller) 
 * - O Model representa os dados e regras de negócio da aplicação.
 * - A View representa a interface visual da aplicação.
 * - O Controller faz a intermediação entre a Model e a View
 */

const express = require('express');
// importa as rotas
const routes = require('./routes');

const app = express();

// Serve para o Express conseguir interpretar dados enviados por formulários HTML
app.use(express.urlencoded({extended: true}));
// Usa as rotas do arquivo './routes'
app.use(routes);

// Para o servidor ficar escutando na porta 3000
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
