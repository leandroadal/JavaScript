export function middlewareGlobal(req, res, next) {
  res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
  next();
}

export function outroMiddleware(req, res, next) {
  next();
}

export function checkCsrfError(err, req, res, next) {
  if(err) {
    return res.render('404');
  }
  next();
}

export function csrfMiddleware(req, res, next) {
  res.locals.csrfToken = req.csrfToken();
  next();
}
