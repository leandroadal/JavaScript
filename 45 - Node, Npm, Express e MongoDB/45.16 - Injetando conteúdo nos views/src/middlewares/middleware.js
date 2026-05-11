export const middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
  next();
};

export const outroMiddleware = (req, res, next) => {
  console.log('Sou um middleware específico para uma rota.');
  next();
}