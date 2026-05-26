/**
 * 1. Importer la fonction createServer() depuis node:http
 * 2. Appeler la fonction d'abord cette fonction createServer puis la chaîner avec listen()
 *  - listen() : spécifie l'hôte et le port d'écoute => Les clients peuvent se connecter depuis cette adresse http://hote:port
 *    - ici hote = localhost (valeur par défaut)
 *    - Le port on va utiliser un PORT disponible sur notre machine par ex 8088 
 * 
 */
import { createServer } from 'node:http';

const PORT = 8088 // Port disponible sur la machine hôte
createServer((req, res) => {
  // Une callback de createServer => au moment d'une connexion d'un client, cette callback est exécutée
  res.end('<h1>Bonjour</h1>') // réponse retournée au client
}).listen(PORT, () => { // callback exécuté au lancement de l'application
  console.info(`Running at http://localhost:${PORT}`)
})