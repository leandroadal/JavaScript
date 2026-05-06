// Uma função async permite o uso do await para esperar
// que uma função seja concluída para ir pro proximo
// passo na execução da função

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

function aleatorio(min, max) {
    min *= 1000; // para virar segundos
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

async function executa(params) {
    try {
        const fase1 = await esperaAi('Conexão com o BD', aleatorio(1, 3));
        console.log(fase1);

        const fase2 = await esperaAi('Buscando dados da BASE', aleatorio(1, 3));
        console.log(fase2);

        // Para aqui e vai pro catch por conta do erro de manda uma string como mensagem.
        const erro = await esperaAi(10, aleatorio(1, 3));
        console.log(erro);
        
        const fase3 = await esperaAi('Tratando os dados da BASE', aleatorio(1, 3));
        console.log(fase3);

    } catch (error) {
        console.log(error);

    }
}

executa();
