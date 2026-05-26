/**
 * 3 façons d'utiliser les fonctions avec Node
 * 1. Asynchrone et callback (CB)
 * 2. Asynchrone et promesse (PR)
 * 3. Moins courante le synchrone
 */

// Asynchrone avec CB
import { readFile, writeFile } from 'node:fs'
writeFile('message.txt', 'Hello world', (error) => {
  if(!error) console.log('fichier message.txt crée')
})

readFile('message.txt', { encoding: 'utf8'}, (error, data) => {
  if(error) console.error('Erreur de lecture message.txt')
  else console.log('lecture de la donnée', data)
})