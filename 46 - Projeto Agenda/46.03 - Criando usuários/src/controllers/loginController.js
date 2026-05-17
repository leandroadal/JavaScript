import Login from '../models/LoginModel.js';

export const index = (req, res) => {
    res.render('login');
};

export const register = async (req, res) => {
    try {
      const login = new Login(req.body);
      await login.register();
  
      // Checa se houve erros de validação
      if(login.errors.length > 0) {
        req.flash('errors', login.errors);
        req.session.save(function() {
          return res.redirect('/login/index');
        });
        return;
      }
      
      req.flash('success', 'Usuário criado com sucesso!');
        req.session.save(function() {
          return res.redirect('/login/index');
        });

    } catch (e) {
      console.log(e);
      return res.render('404');
    }
}