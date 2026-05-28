const express = require('express')
const router = express.Router()

function checkLoginMiddleware(req, res, next) {
    const login = req.params.login
    if(login.length > 2) next()
    else throw new Error('Taille insuffisante pour le login')
}

function anotherMiddleware(req, res, next) {
    next()
}

// match avec la route /github
router.get('/', anotherMiddleware, (req, res) => {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(users => {
        console.log('users', users)
        res.render('users/list', { users })
    })
    .catch(() => res.render('error', { message: 'Aucun utilisateur', status: 500 }))
 // callback qui s'exécute sur cette route quand un utilisateur fera une req GET /users-github
})

// match avec GET /github/:login avec login dynamique
router.get('/:login', checkLoginMiddleware, anotherMiddleware, async (req, res) => {
    const login = req.params.login
    const user = await fetch(`https://api.github.com/users/${login}`).then(data => data.json())
    console.log('user', user)
    res.render('users/single', { user })
})


module.exports = router