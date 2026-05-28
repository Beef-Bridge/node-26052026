const express = require('express')
const router = express.Router()
const { getUsers, getOneUser } = require('../controllers/users-github-controller.cjs')
// match avec la route /github
router.get('/', getUsers)
// match avec GET /github/:login avec login dynamique
router.get('/:login', getOneUser)

module.exports = router