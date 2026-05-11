# Helmet e CSRF

## O que é Helmet?

Helmet é um middleware para Express que ajuda a proteger sua aplicação contra algumas vulnerabilidades da web, definindo vários cabeçalhos HTTP relacionados à segurança. Ele é fácil de usar e pode ser configurado para atender às necessidades específicas da sua aplicação.

## Principais recursos do Helmet

- **Content Security Policy (CSP)**: Ajuda a prevenir ataques de Cross-Site Scripting (XSS) e outros tipos de injeção, controlando os recursos que podem ser carregados pela aplicação.
- **X-Frame-Options**: Protege contra ataques de clickjacking, impedindo que a aplicação seja carregada em um iframe.
- **X-XSS-Protection**: Ativa o filtro de proteção contra XSS nos navegadores.
- **X-Content-Type-Options**: Impede que os navegadores interpretem arquivos como um tipo diferente do declarado, ajudando a prevenir ataques de MIME sniffing.
- **Strict-Transport-Security (HSTS)**: Força os navegadores a se conectarem à aplicação apenas por HTTPS, aumentando a segurança das conexões.

## O que é CSRF?

CSRF (Cross-Site Request Forgery) é um tipo de ataque que força um usuário a executar ações indesejadas em uma aplicação web em que está autenticado. O Helmet e o middleware de CSRF ajudam a prevenir esse tipo de ataque.

### Proteção contra CSRF

O middleware de CSRF funciona gerando um token único para cada sessão de usuário. Esse token deve ser incluído em todas as solicitações que modificam dados (como POST, PUT, DELETE). Se o token não estiver presente ou for inválido, a solicitação será rejeitada, protegendo assim contra ataques CSRF.

### Token JTW vs Token CSRF

- **Token JWT**: Usado para autenticação e autorização, geralmente armazenado no cliente (como em cookies ou localStorage) e enviado com cada solicitação para verificar a identidade do usuário.
- **Token CSRF**: Usado para proteger contra ataques de falsificação de solicitação entre sites, gerado pelo servidor e incluído em formulários ou cabeçalhos para validar solicitações que modificam dados.

#### Devo usar ambos?

Depende da forma de armazenamento do token JWT. Se o token JWT for armazenado em um cookie, ele pode ser vulnerável a ataques CSRF, e o uso de um token CSRF adicional é recomendado para proteger contra esses ataques. No entanto, se o token JWT for armazenado em localStorage ou sessionStorage, ele não estará sujeito a ataques CSRF, e o uso de um token CSRF pode não ser necessário. Em geral, é importante avaliar as necessidades específicas da sua aplicação e implementar as medidas de segurança adequadas.

## Implementação no Express

Para usar o Helmet e o CSRF em uma aplicação Express, você pode seguir os passos abaixo:

1. Instale os pacotes necessários:

    ```bash
    npm install helmet csurf
    ```

2. Configure o Helmet e o CSRF no seu servidor Express:

    ```javascript
    import express from 'express';
    import helmet from 'helmet';
    import csurf from 'csurf';

    const app = express();
    // Configuração do Helmet
    app.use(helmet());
    // Configuração do CSRF
    app.use(csurf());
    // Middleware para lidar com erros de CSRF
    app.use((err, req, res, next) => {
        if (err.code === 'EBADCSRFTOKEN') {
            res.status(403).render('403', { titulo: 'Erro 403', mensagem: 'Token CSRF inválido' });
        } else {
            next(err);
        }
    });
    ```

3. Adicione o token CSRF aos seus formulários:

    ```html
    <form action="/submit" method="POST">
        <input type="hidden" name="_csrf" value="<%= csrfToken %>">
        <!-- Outros campos do formulário -->
        <button type="submit">Enviar</button>
    </form>
    ```

4. Certifique-se de passar o token CSRF para suas views:

    ```javascript
    app.use((req, res, next) => {
        res.locals.csrfToken = req.csrfToken();
        next();
    });
    ```

Com essas configurações, sua aplicação Express estará protegida contra ataques CSRF e terá cabeçalhos de segurança adicionais fornecidos pelo Helmet.

## Conclusão

O Helmet e o CSRF são ferramentas essenciais para melhorar a segurança de sua aplicação Express. O Helmet ajuda a proteger contra várias vulnerabilidades, enquanto o CSRF protege contra ataques de falsificação de solicitação entre sites. Implementar essas medidas de segurança é crucial para garantir a integridade e a segurança dos dados dos usuários em sua aplicação.
