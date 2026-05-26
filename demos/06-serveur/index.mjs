/**
 * 1. Importer la fonction createServer() depuis node:http
 * 2. Appeler la fonction avec les méthodes suivantes:
 *  - listen() : spécifie le port d'écoute => Les clients peuvent se connecter depuis un hôte et un PORT
 * 
 */
import { createServer } from 'node:http'

const PORT = 8088 // Port disponible sur la machine hôte
createServer((req, res) => {// une callback de createServer => au moment
  res.end('<h1>Bonjour</h1>') // réponse retournée au client
}).listen(PORT, () => { // callback
  console.info(`Running at http://localhost:${PORT}`)
})