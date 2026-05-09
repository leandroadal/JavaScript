const fs = require('fs').promises;
const stat = require('fs');
const path = require('path');

// fs.readdir pega o que esta no diretório
fs.readdir(path.resolve(__dirname))
    .then((files) => {
        console.log(files);
    }).catch((err) => {
        console.log(err);
    });

async function readdir(rootDir) {
    // Se o caminho não for enviado usa o diretório atual
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        // fs.stat serve para obter informações sobre um arquivo ou pasta
        const stats = await fs.stat(fileFullPath);

        // Ignoras os arquivos nesses lugares
        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;

        // Se for um diretório usa recurção para procurar arquivos e pastas dentro dos diretórios
        // Além disso mesmo sem o proximo if nenhuma pasta seria exibida pois toda terminam nesse if
        if (stats.isDirectory()) {
            // Recursão mutua
            // Chama um função que chama essa de novo
            readdir(fileFullPath);
            continue; // pular a iteração atual do loop
        }

        // Se não for html ou css ignora.
        if (!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) {
            continue;
        }

        console.log(file, stats.isDirectory());
    }
}

readdir('/home/le/dev/web/JavaScript');
console.log();
// Sem parâmetro procura no diretório atual
readdir();
