export const paginaInicial = (req, res) => {
    // A sessão dura 7 dias, é httpOnly e é armazenada no MongoDB
    if (req.session.usuario) {
        console.log('Usuário logado:', req.session.usuario);
    } else {
        // Se não esta logado, loga o usuário na sessão
        console.log('logando usuário.');
        req.session.usuario = {nome: 'Leonardo', logado: true};
    }

    // Pega as mensagens flash da sessão e mostra no console
    const flashMessages = req.flash('info');
    console.log('Flash Messages:', flashMessages);
    res.render('index');
};

export const testeFlash = (req, res) => {
    // As mensagens flash são armazenadas na sessão e só ficam disponíveis na próxima requisição
    req.flash('info', 'Flash Message de Sucesso!');
    // Redireciona para a página inicial para mostrar a mensagem flash
    res.redirect('/');
};

export const trataPost = (req, res) => {
    res.send(req.body);
    return;
};
