import { writeFile } from "node:fs";
import { mkdir } from "node:fs/promises";
import { createInterface } from "node:readline/promises";

console.log('argv', process.argv)
const app = createInterface({
  input: process.stdin,
  output: process.stdout
});

const firstName = await app.question("Votre prénom ? ");
const lastName = await app.question("Votre nom ? ");

const directory = `users`
// Création du dossier, idéalement vérifier que le dossier /users n'existe pas déjà
await mkdir(directory)
.then(() => console.log('Création du dossier /users OK'))
.catch(() => console.info('Dossier existe déjà'))
// Générer un nom de fichier aléatoire pour respecter RGPD
const filename = Math.ceil(Math.random() *10000)
// TODO vérifier que le fichier n'existe pas avec access()
const data = JSON.stringify({
  firstName,
  lastName,
})
// Création du fichier JSON
writeFile(`${directory}/${filename}.json`, data, (err) =>  {
  if(!err) console.log('Write OK')
  else console.error('Write KO', err)
})

// Bonus
// lancement de l'application avec node index.mjs bonus
if(process.argv[2].toLowerCase() === 'bonus') {
  // TODO here
}
console.info(`Bonjour ${firstName} ${lastName}`);
app.close();
