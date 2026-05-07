// AJAX é o conceito de fazer requisições assíncronas sem recarregar a página.
// XMLHttpRequest é um objeto do JavaScript usado para fazer requisições HTTP (buscar/enviar dados).

const request = obj => {
  return new Promise((resolve, reject) => {
    // Criando a requisição Ajax
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true); // Cria a requisição
    xhr.send(); // envia

    // Espera
    xhr.addEventListener('load', () => {
      // Se retorna um código de sucesso
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

// Ouve o evento de click
document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  // Se for clicado no link
  if (tag === 'a') { // O 'a' representa o link para outra pagina
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  // href é onde esta escrito o link da pagina
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href
  };

  try {
    // Para trocar de pagina faz a requisição
    const response = await request(objConfig);
    carregaResultado(response);
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response; // Coloca a resposta no elemento da classe resultado
}
