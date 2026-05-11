# Injetando Conteúdo nos Views com Express e EJS

O *EJS* (*Embedded JavaScript Templates*) é uma engine de templates utilizada no Node.js para gerar HTML dinâmico no servidor.

Com ele é possível:

- inserir variáveis dentro do HTML
- utilizar estruturas condicionais
- repetir elementos com loops
- reutilizar partes da interface
- renderizar páginas dinamicamente

## Variáveis

Para injetar conteúdo em um view, basta passar um objeto como segundo argumento do método `render()`, onde as chaves do objeto serão os nomes das variáveis disponíveis no template e os valores serão os dados que queremos exibir.

```javascript
app.get('/user/:name', (req, res) => {
  res.render('user', { 
    name: 'Leandro',
    titulo: '<span style="color: blue;">Título da Página</span>',
    });
});
```

No exemplo acima, estamos passando um objeto com a chave `name` e o valor `Leandro`. No template `.ejs`, podemos acessar essa variável usando `<%= name %>` para exibir o nome do usuário.

```html
<h1>Bem-vindo, <%= name %>!</h1>
<h2><%= titulo %></h2>
<h2><%- titulo %></h2>
<p>Este é o seu perfil.</p>
```

No caso do `titulo`, usamos `<%= %>` para escapar o conteúdo e evitar que o HTML seja interpretado, enquanto `<%- %>` permite que o HTML seja renderizado corretamente. Assim, a primeira linha exibirá o título como texto simples, enquanto a segunda linha exibirá o título com a formatação HTML aplicada.

## Estruturas Condicionais

O EJS também suporta estruturas condicionais, como `if`, `else if` e `else`, para controlar o fluxo de exibição do conteúdo com base em condições específicas.

```javascript
app.get('/dashboard', (req, res) => {
  const isAdmin = true; // Exemplo de variável para determinar se o usuário é admin
  res.render('dashboard', { isAdmin });
});
```

No template `dashboard.ejs`, podemos usar a estrutura condicional para exibir conteúdo diferente para administradores e usuários comuns:

```html
<% if (isAdmin) { %>
  <h1>Bem-vindo, Administrador!</h1>
  <p>Você tem acesso a todas as funcionalidades.</p>
<% } else { %>
  <h1>Bem-vindo, Usuário!</h1>
  <p>Você tem acesso limitado.</p>
<% } %>
```

Neste exemplo, se a variável `isAdmin` for verdadeira, o template exibirá uma mensagem de boas-vindas para o administrador e uma descrição de suas permissões. Caso contrário, exibirá uma mensagem para o usuário comum.

## Loops

O EJS também permite usar loops para repetir elementos HTML com base em uma coleção de dados. Por exemplo, se quisermos exibir uma lista de usuários, podemos fazer o seguinte:

```javascript
app.get('/users', (req, res) => {
  const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];
  res.render('users', { users });
});
```

No template `users.ejs`, podemos usar um loop `for` para iterar sobre a lista de usuários e exibir suas informações:

```html
<ul>
  <% users.forEach(user => { %>
    <li><%= user.name %> - <%= user.age %></li>
  <% }); %>
</ul>
```

Neste exemplo, o template irá gerar uma lista não ordenada (`<ul>`) onde cada item (`<li>`) contém o nome e a idade de cada usuário da lista.

## Reutilização de Partes da Interface

O EJS também permite reutilizar partes da interface usando a diretiva `<%- include('caminho/para/arquivo') %>`. Isso é útil para incluir cabeçalhos, rodapés ou outros componentes comuns em várias páginas.
Por exemplo, se tivermos um arquivo `header.ejs` com o conteúdo do cabeçalho do site, podemos incluí-lo em outros templates:

```html
<%- include('header') %>
<h1>Bem-vindo à minha página!</h1>
<p>Este é o conteúdo principal da página.</p>
<%- include('footer') %>
```

Neste exemplo, o conteúdo do arquivo `header.ejs` será incluído no início do template, e o conteúdo do arquivo `footer.ejs` será incluído no final. Isso permite manter uma estrutura consistente em todas as páginas do site e facilita a manutenção do código.

## Comentários

No EJS, é possível adicionar comentários que não serão renderizados no HTML final. Para isso, basta usar a sintaxe `<%# comentário %>`. Esses comentários são úteis para explicar o código ou deixar anotações para outros desenvolvedores.

```html
<%# Este é um comentário que não aparecerá no HTML final %>
<h1>Bem-vindo à minha página!</h1>
<p>Este é o conteúdo principal da página.</p>
```
