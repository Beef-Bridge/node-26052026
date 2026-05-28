const express = require("express");
const router = express.Router();
const {
  checkLoginMiddleware,
  anotherMiddleware,
} = require("../middlewares/users-github-middleware");
const {
  getUsers,
  getOneUser,
} = require("../controllers/users-github-controller.cjs");
// match avec la route /github
router.get("/",  anotherMiddleware, getUsers);
// match avec GET /github/:login avec login dynamique
router.get("/:login", anotherMiddleware, checkLoginMiddleware,  getOneUser);

module.exports = router;
