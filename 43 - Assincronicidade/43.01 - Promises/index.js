/*
 * Promise é um objeto que representa um valor que ainda não existe, mas vai existir no futuro.
*/

function aleatorio(min, max) {
    min *= 1000; // para virar segundos
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    setTimeout(() => {
        console.log(msg);
    }, tempo)
}

function esperaAiWithCallback(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if (cb) cb();
    }, tempo)
}

function esperaAiWithPromise(msg, tempo) {
    // resolve deu certo e reject deu erro
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });

}

// As frases aparecem de acordo com o timer
esperaAi('Frase 1', aleatorio(1, 3));
esperaAi('Frase 2', aleatorio(1, 3));
esperaAi('Frase 3', aleatorio(1, 3));

// Para rodar em sequência com callback
esperaAiWithCallback('Frase 1a', aleatorio(1, 3), function () {
    esperaAiWithCallback('Frase 2a', aleatorio(1, 3), function () {
        esperaAiWithCallback('Frase 3a', aleatorio(1, 3));
    });
});

// Deixa o código mais legível
esperaAiWithPromise('Conexão com o BD', aleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAiWithPromise('Buscando dados da BASE', aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAiWithPromise('Tratando os dados da BASE', aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {
        console.log('Erro: ', e);
        
    });

console.log('Isso será exibindo primeiro');
