export default (req, res, next) => {
  console.log('Passei no middleware');

    if (req.method === 'POST') {
        console.log('É um POST');
    }

    if (req.body && req.body.cliente) {
        console.log(`O cliente é ${req.body.cliente}`);
    }

    next();
};