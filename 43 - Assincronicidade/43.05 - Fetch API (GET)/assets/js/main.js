/** 
 * O fetch realiza requisições HTTP de forma assíncrona.
 * A função fetch retorna uma Promise, possibilitando o uso de encadeamento 
 * com .then() e .catch(), ou a utilização de async/await para controle do 
 * fluxo assíncrono.
*/ 

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
  
  try {
    // Para trocar de pagina faz a requisição
    const response = await fetch(href);
    if (response.status !== 200) throw new Error('Erro 404 criado');
    const html = await response.text();
    carregaResultado(html);
  } catch(e) {
    console.log(e);
  }

  // Sem async e await
  /*
  fetch(href)
    .then(resposta => {
      if (resposta.status !== 200) throw new Error('Erro 404 criado');
      return resposta.text();
    })
    .then(html => carregaResultado(html))
    .catch(e => console.error(e))
  */
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response; // Coloca a resposta no elemento da classe resultado
}

// cria um erro
fetch('pagina4.html')
  .then(resposta => {
    if (resposta.status !== 200) throw new Error('Erro 404 criado');
  })
  .then(html => console.log(html))
  .catch(e => console.error(e))
