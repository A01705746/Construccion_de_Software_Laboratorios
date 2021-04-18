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

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};