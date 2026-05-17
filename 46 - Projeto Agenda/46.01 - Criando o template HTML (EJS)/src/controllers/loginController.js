import Login from '../models/LoginModel.js';

export const index = (req, res) => {
    res.render('login');
};

export const register = async (req, res) => {
    const login = new Login(req.body);
    await login.register();

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('back');
      });
      return;
    }
    
    res.send(login.body);
}