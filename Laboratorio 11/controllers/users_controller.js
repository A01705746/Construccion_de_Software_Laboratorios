exports.getLogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Inicio de sesión',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postLogin = (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.usuario = request.body.usuario;

    response.redirect('/campeones');
};

exports.getLogout = (request, response, next) => {
    request.session.destroy((err) => {
        console.log(err);
        console.log('Logout');
        response.redirect('/campeones'); //Este código se ejecuta cuando la sesión se elimina.
    });
};