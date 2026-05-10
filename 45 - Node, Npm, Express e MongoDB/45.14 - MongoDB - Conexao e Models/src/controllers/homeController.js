import HomeModel from "../models/HomeModel.js";

HomeModel.create({
    title: 'Título de teste',
    description: 'Descrição de teste'
})
    .then(() => console.log('Documento criado com sucesso!'))
    .catch(err => console.error('Erro ao criar documento:', err));

export const paginaInicial = (req, res) => {
    // O render renderiza uma view/template e envia o HTML ao navegador
    res.render('index');
};

export const trataPost = (req, res) => {
    res.send('Rota do POST');
};