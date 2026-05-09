exports.paginaInicial = (req, res) => {
    res.send(`
        Hello world!

        <form action="/" method="POST">
        Nome: <input type="text" name="nome"><br>
        Outro campo: <input type="text" name="outroCampo">
        <button>Enviar</button>
        </form>
        `);
}

exports.trataPost = (req, res) => {
    res.send(`Rota do POST`);
}