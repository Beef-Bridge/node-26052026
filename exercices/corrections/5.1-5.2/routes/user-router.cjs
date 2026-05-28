const express = require('express');
const router = express.Router();
import { checkLogin } from '../middlewares/check-login';
const { findAll, findOne } =  require('../controllers/user-controller.cjs');
router.param('login', checkLogin)
router.get('/', findAll);
router.get('/:login', findOne)
router.get('/favourites')

module.exports = router;
