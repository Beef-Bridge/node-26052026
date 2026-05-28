const { formatUser } = require("../public/javascripts/functions.cjs");
const gitBaseURL = "https://api.github.com/users"

async function fetchGitHubPromise(url = gitBaseURL) {
  return fetch(url).then((res) => res.json())
}

function findAll(req, res) {
  fetchGitHubPromise()
    .then((users) => {
      const title = "Utilisateurs GitHub";
      users = users.map((user) => formatUser(user));
      res.status(200).render("users/list", { users, title });
    })
    .catch(() => {
      res
        .status(500)
        .render("error", {
          message: "Erreur lors de la récupération des utilisateurs",
        });
    });
}

function findOne(req, res) {
  const login = req.params.login
  fetchGitHubPromise(`${gitBaseURL}/${login}`)
    .then((user) => {
      const title = `Utilisateur ${user.name}`;
      user = formatUser(user);
      res.status(200).render("users/single", { user, title });
    })
    .catch(() => {
      res
        .status(500)
        .render("error", {
          message: `Erreur lors de la récupération de l'utilisateur ${login}`,
        });
    });
}

module.exports = {
  findAll,
  findOne,
};
