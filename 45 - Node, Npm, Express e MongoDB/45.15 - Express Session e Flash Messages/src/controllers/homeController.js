export const paginaInicial = (req, res) => {
    // A sessão dura 7 dias, é httpOnly e é armazenada no MongoDB
    if (req.session.usuario) {
        console.log('Usuário logado:', req.session.usuario);
    } else {
        // Se não esta logado, loga o usuário na sessão
        console.log('logando usuário.');
        req.session.usuario = {nome: 'Leonardo', logado: true};
    }
    
    // As mensagens flash são armazenadas na sessão e só ficam disponíveis na próxima requisição
    req.flash('info', 'Flash Message de teste');

    // Então, aqui a mensagem sera exibida e removida da sessão pois o console.log ja a executa
    console.log(req.flash('info')); // Exibe a mensagem flash e a remove da sessão

    res.render('index');
    return;
};

export const trataPost = (req, res) => {
    res.send(req.body);
    return;
};
