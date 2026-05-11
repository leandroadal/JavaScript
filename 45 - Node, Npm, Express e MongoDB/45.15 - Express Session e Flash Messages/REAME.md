# Express Session e Flash Messages

## Instalando o Express Session e Flash Messages

```bash
npm install express-session connect-flash connect-mongo
```

O `connect-mongo` é um pacote utilizado para armazenar sessões do `express-session` no banco de dados MongoDB.

## O que são Express Session e Flash Messages?

O `express-session` atua como um middleware no Express, possibilitando a criação de sessões de usuário para reter dados transitórios entre diferentes requisições. Sua aplicação é ideal para sistemas de login, sacolas de compras e demais recursos que necessitem manter informações ativas enquanto o usuário navega pelo site.

Já o `connect-flash` é um middleware voltado para a geração de mensagens flash, que nada mais são do que notificações temporárias salvas na sessão e mostradas ao visitante apenas uma vez. São muito utilizadas para apresentar alertas de êxito, falhas ou avisos gerais logo após o usuário executar alguma ação, como enviar dados de um formulário.

## Configurando o Express Session e Flash Messages

```javascript
import session from 'express-session';
import flash from 'connect-flash';
import MongoStore from 'connect-mongo';
app.use(session({
    secret: 'meu segredo',      
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: 'sua-url-mongodb' }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
        httpOnly: true,
    },
}));
app.use(flash());
```

## Utilizando Flash Messages

```javascript
app.get('/flash', (req, res) => {
    req.flash('info', 'Flash Message de Sucesso!');
    res.redirect('/');
});
```

```javascript
app.get('/', (req, res) => {
    const flashMessages = req.flash('info');
    console.log('Flash Messages:', flashMessages);
    res.render('index');
});
```

No exemplo acima, ao acessar a rota `/flash`, uma mensagem de flash é criada e o navegador é redirecionado para a página inicial. Ao chegar na página inicial, as mensagens de flash são recuperadas e exibidas no console.
