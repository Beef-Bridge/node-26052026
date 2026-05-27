import { createServer } from "node:http";

createServer((req, res) => {
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
}).listen(8081, () => console.log(`http://localhost:8081`));
