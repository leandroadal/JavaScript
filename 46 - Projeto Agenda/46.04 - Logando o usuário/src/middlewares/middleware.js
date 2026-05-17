export function middlewareGlobal(req, res, next) {
  res.locals.erros = req.flash('errors');
  res.locals.success = req.flash('success');
  res.locals.user = req.session.user;
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
