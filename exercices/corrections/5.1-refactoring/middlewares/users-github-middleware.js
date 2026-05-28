function checkLoginMiddleware(req, res, next) {
    const login = req.params.login
    if(login.length > 2) next()
    else throw new Error('Taille insuffisante pour le login')
}

function anotherMiddleware(req, res, next) {
    next()
}

module.exports = {
    checkLoginMiddleware,
    anotherMiddleware
}