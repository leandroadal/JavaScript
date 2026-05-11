export const paginaInicial = (req, res) => {
    // Armazena a mensagem flash da sessão e passa para a view
    const flashMessages = req.flash('info');
    res.render('index', { 
        // Quando /flash é acessado, exite uma mensagem flash de sucesso na sessão, que é passada para a view e exibida na página inicial
        flashMessages, // Passa a mensagem flash para a view
        titulo: '<span style="color: blue;">Título da Página</span>',
        numeros: [1, 2, 3, 4, 5],

    });
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
