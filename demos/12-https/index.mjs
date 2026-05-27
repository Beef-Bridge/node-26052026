import { readFileSync } from "node:fs";
import { createServer } from "node:https";

/**
 * Certif à générer cf. exo 3.4 pour générer les certifs depuis un site externe ou la commande openssl
 * @see https://github.com/glo10/node-26052026/blob/main/exercices/3.4.md
*/
const options = {
  key: readFileSync('certifs/private.pem'),
  cert: readFileSync('certifs/certificate.crt')
}

createServer(options, (req, res) => {
  // Décomposition de l'objet http.incomingMessage (Request)
  const { url, ip, host, method, headers } = req;
  console.log("url", url, "method", method);
  const headersResponse = { "content-type": "text/html; charset=utf-8" };
  if (method === "GET") {
    switch (req.url) {
      case "/":
        res.writeHead(200, headersResponse);
        res.write("<h1>Bienvenue</h1>");
        res.write("<h2>Page accueil</h2>");
        break;
      case "/news":
        res.writeHead(200, headersResponse);
        res.write("<h1>Actualité</h1>");
        break;
      default:
        res.writeHead(404, headersResponse);
        res.write("<h1>404</h1>");
        break;
    }
    res.end(); // ferme et renvoie la réponse au client
  } else {
    res.writeHead(403, headersResponse)
    res.end('Méthode non acceptée')
  }
}).listen(8443, () => console.log(`https://localhost:8443`));
