export const paginaInicial = (req, res) => {
    // O render renderiza uma view/template e envia o HTML ao navegador
    res.render('index');
};

export const trataPost = (req, res) => {
    res.send('Rota do POST');
};