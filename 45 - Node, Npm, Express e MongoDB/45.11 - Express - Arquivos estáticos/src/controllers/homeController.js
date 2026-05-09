exports.paginaInicial = (req, res) => {
    // O render renderiza uma view/template e enviar o HTML ao navegador
    res.render('index');
}

exports.trataPost = (req, res) => {
    res.send(`Rota do POST`);
}