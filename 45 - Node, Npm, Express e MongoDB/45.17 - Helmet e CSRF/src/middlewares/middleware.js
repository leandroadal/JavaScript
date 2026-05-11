export const middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
  next();
};

export const outroMiddleware = (req, res, next) => {
  console.log('Sou um middleware específico para uma rota.');
  next();
}

// Este middleware é responsável por verificar se ocorreu um erro de CSRF. Ele deve ser colocado após a configuração do csurf() e antes das rotas.
export const checkCsrfError = (err, req, res, next) => {
  if (err && err.code === 'EBADCSRFTOKEN') {
        // Você pode renderizar uma página de erro 403 específica
        return res.status(403).render('403', {
            titulo: '403 - Acesso Negado',
            mensagem: 'Desculpe, você não tem permissão para acessar esta página.'
        });
    }
    // Se NÃO for um erro de CSRF, você chama next(err) para passar o erro para o próximo middleware de tratamento de erros
    next(err);
};

// Este middleware é responsável por gerar o token CSRF e disponibilizá-lo para as views. Ele deve ser colocado após a configuração do csurf() e antes das rotas.
export const csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};