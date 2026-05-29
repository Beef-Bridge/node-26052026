import express from "express";
import { dirname, resolve } from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
const teamsRouter = express.Router(); // Création de la route
const filename = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "data",
  "teams.json",
);
// Middleware pour vérifier que l'id est un entier
teamsRouter.param("id", (req, res, next) => {
  const id = req.params.id;
  if (!/\d+/.test(id)) {
    res.status(400).send({ success: false, message: `${id} must be a number` });
  }
  next();
});

teamsRouter.get("/", (req, res) => {
  readFile(filename)
    .then((content) => JSON.parse(content))
    .catch(() => []) // une promesse qui retourne un tableau vide
    .then((teams) => {
      res.status(200).json(teams);
    })
});

teamsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  readFile(filename)
    .then((content) => JSON.parse(content))
    .then((teams) => {
      const team = teams.find((t) => t.id === parseInt(id));
      if (team) {
        res.status(200).json(team);
      }
      res.status(404).json({ message: "Team not found", success: false });
    })
    .catch(() =>
      res
        .status(500)
        .json({ success: false, message: `Can't get a team with ID ${id}` }),
    );
});

teamsRouter.post("/", async (req, res) => {
  // Attention ici au niveau sécurité c'est 0, le client peut envoyer n'importe quoi et ça passera
  const team = req.body;
  const { id, name } = team;
  if (id && name) {
    const teams = await readFile(filename).then((content) =>
      JSON.parse(content),
    );
    teams.push(team);
    writeFile(filename, JSON.stringify(teams))
      .then(() => {
        res.status(201).json({ message: "Team created", success: true });
      })
      .catch(() => {
        res
          .status(500)
          .json({ message: "Contact-us please 0612345678", success: false });
      });
  } else {
    res
      .status(400)
      .json({
        message: "new team should have an id and a name",
        success: false,
      });
  }
});
export default teamsRouter;
