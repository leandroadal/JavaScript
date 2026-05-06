function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") {
            reject(false);
            return;
        }

        setTimeout(() => {
            resolve(msg.toLocaleUpperCase() + " - Passei na Promise");
        }, tempo);
    });
}

const promises = [
    "Primeiro valor",
    esperaAi("Promise 1", 3000),
    esperaAi("Promise 2", 400),
    esperaAi("Promise 3", 1000),
    // esperaAi(100, 3000), gerra um erro
    "outro valor",
];

// =========== Promise.all ===========

// Executado todas e retorna. Se der erro rejeita todas
Promise.all(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    });

const promises2 = [
    //'Primeiro valor',
    esperaAi("Promise 1", 3000),
    esperaAi("Promise 2", 400),
    esperaAi("Promise 3", 1000),
];
// =========== Promise.race ===========

// O race pega o primeiro que for resolvido
Promise.race(promises2)
    .then(function (valor) {
        console.log("Race:" + valor);
    })
    .catch(function (erro) {
        console.log(erro);
    });

// =========== Promise.resolve ===========

function baixarPagina() {
    const emCache = true;
    if (emCache) {
        // Como não precisa baixar marca com resolvida
        return Promise.resolve("Pagina em cache");
    } else {
        return esperaAi("Baixei a pagina", 3000);
    }
}

baixarPagina()
    .then((dadosPagina) => {
        console.log(dadosPagina);
    })
    .catch((e) => console.log());

// =========== Promise.reject ===========

function baixarPagina2() {
    const emCache = true;
    if (emCache) {
        // Com reject gera um erro que vai ser pego no catch
        return Promise.reject("Pagina em cache");
    } else {
        return esperaAi("Baixei a pagina", 3000);
    }
}

baixarPagina2()
    .then((dadosPagina) => {
        console.log(dadosPagina);
    })
    .catch((e) => console.log('Erro:', e));
