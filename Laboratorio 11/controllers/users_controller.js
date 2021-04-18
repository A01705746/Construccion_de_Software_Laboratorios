exports.getLogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Inicio de sesión'
    });
};

exports.postLogin = (request, response, next) => {
    
};