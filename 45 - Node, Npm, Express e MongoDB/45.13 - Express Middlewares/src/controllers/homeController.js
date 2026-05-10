export const paginaInicial = (req, res, next) => {
    // O render renderiza uma view/template e envia o HTML ao navegador
    res.render('index');
    console.log('Cheguei no controller');
    next();
};

export const trataPost = (req, res, next) => {
    res.send(req.body);
    return;
};