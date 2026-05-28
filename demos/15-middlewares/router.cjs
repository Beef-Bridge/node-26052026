const express = require('express')
const router = express.Router()

function checkLoginMiddleware(req, res, next) {
    const login = req.params.login
    if(login.length > 2) next()
    else throw new Error('Taille insuffisante pour le login')
}

function anotherMiddleware(req, res, next) {
    // passe partout juste pour montrer qu'il peut y avoir plusieurs middlewares pour une route donnée
    next()
}

// match avec la route GET /github, cette racine de la route est défini dans app.js au moment ou on utilise ce router
router.get('/', anotherMiddleware, (req, res) => {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(users => {
        console.log('users', users)
        res.render('users/list', { users })
    })
    .catch(() => res.render('error', { message: 'Aucun utilisateur', status: 500 }))
})

// match avec GET /github/:login avec login dynamique
router.get('/:login', checkLoginMiddleware, anotherMiddleware, async (req, res) => {
    const login = req.params.login
    const user = await fetch(`https://api.github.com/users/${login}`).then(data => data.json())
    console.log('user', user)
    res.render('users/single', { user })
})


module.exports = router