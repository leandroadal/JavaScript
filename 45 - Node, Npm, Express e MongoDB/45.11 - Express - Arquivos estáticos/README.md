# Arquivos estáticos

Arquivos estáticos

Arquivos estáticos são arquivos enviados ao navegador exatamente como estão armazenados no servidor, sem processamento dinâmico.

Exemplos comuns:

* CSS;
* imagens;
* fontes;
* vídeos;
* ícones;
* JavaScript frontend;
* PDFs.

## Definindo pasta de estáticos

`app.use(express.static(path.resolve(__dirname, 'src', 'public')));`

Esse código configura uma pasta pública de arquivos estáticos no Express.js.
