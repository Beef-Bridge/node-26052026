/**
 * 3 façons d'utiliser les fonctions avec Node
 * 1. Asynchrone et callback (CB)
 * 2. Asynchrone et promesse (PR)
 * 3. Moins courante le synchrone
 */

// Asynchrone avec promesse
import { readFile } from 'node:fs'
import { writeFile } from 'node:fs/promises'

await writeFile('message.txt', 'Hello world')
.then(() => {
  console.log('fichier message.txt crée')
})
.catch(error => {
  console.error('fichier message.txt non crée')
})

readFile('message.txt', { encoding: 'utf8'}, (error, data) => {
  if(error) console.error('Erreur de lecture message.txt')
  else console.log('lecture de la donnée', data)
})