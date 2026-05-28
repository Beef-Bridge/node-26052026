# Utilisation des dossiers statiques

- route statique = réponse identique pour tout le monde, ne nécessitant pas un rendu côté serveur (opposé de route dynamique)
- les routes statiques sont adaptés pour des contenus tels que
    - images
    - CSS
    - JS pour le front (sans données sensibles)
    - PDF (public pas privée)
    - etc
```js
// Depuis app.js d'Express
/**
 * pour accéder depuis le client aux images qui se trouvent dans
 * le dossier /public/images => http://localhost:PORT/images
 * /public/stylesheets => http://localhost:PORT/stylesheets
 * etc.
 * 
 * avec commonJS
 * Il y a 2 variables qui donne le chemin absolue du dossier racine et du fichier en cours
 *  __dirname
 *  __filename
 * Parallèle avec EcmaScript
 * __dirname => import.meta.dirname
 * __filename => import.meta.filename
 * Ici definition de la route statique pour tous les dossiers et sous-dossiers dans /public
 */
app.use(express.static(path.join(__dirname, 'public')));
```