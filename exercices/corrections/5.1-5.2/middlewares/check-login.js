
const checkLogin = (req, res, next) => {
  const login = req.params.login;
  if (!login || !/\w+/.test(login)) {
    res.status(404);
    res.render("error", {
      message: `${login} must be a string`,
    });
  }
  next();
};

module.exports = { checkLogin }