/**
 * 1.  (Requête) D'une ressource disponible depuis une route et appelée avec une méthode HTTP (GET, POST, PUT, DELETE)
 *  GET : Récupérer la ressource
 *  POST : Créer une ressource
 *  PUT : Modifier la ressource
 *  DELETE : pour supprimer la ressource
 * 2. (Réponses) à transmettre au client avec un status 200 OK, etc. avec une réponse sous un certain format (JSON, XML, txt)
 */
const express = require("express");
const api = express();
const users = require("./models/users.json");
const { loadEnvFile } = require("node:process");
loadEnvFile();
const { PORT } = process.env;

const documentation = {
  version: "1.0.0",
  routes: [
    {
      users: [
        {
          route: "/users",
          link: `http://localhost:${PORT}/users`,
          method: "GET",
        },
        {
          route: "/users",
          link: `http://localhost:${PORT}/users`,
          method: "POST",
          sent: {
            data: {
              id: "number",
              login: "string",
            },
            format: "JSON",
          },
        },
      ],
    },
  ],
};
api.get("/", (req, res) => {
  res.status(200).json(documentation);
});

api.get("/users", (req, res, next) => {
  res.status(200).json(users);
});

api.post("/users", (req, res, next) => {
  let newUser = "";
  const data = req.body; // Option 1 récupérer la data envoyé par le client et le parser avec JSON.parse(req.body)
  console.log("request", req.headers, req.body);
  // option 2 : écouter un l'événement data sur la request et concaténer au fur à mesure la data
  req.on("data", (chunk) => {
    newUser += chunk;
  });
  // Quand toutes les données ont été reçu
  req.on("end", () => {
    const user = JSON.parse(newUser);
    // Insérer dans notre fichier users.json cet utilisateur
    //   const { id, login } = data;
    res.status(201).json({ success: true, message: "User created" });
  });
});

// api.put("/users/:id", (req, res, next) => {});

// api.delete("/users/:id", (req, res, next) => {});

module.exports = api;
