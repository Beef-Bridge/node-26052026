import { writeFileSync , readFile } from 'node:fs'
writeFileSync('message.txt', 'Hello world')
readFile('message.txt', { encoding: 'utf8'}, (error, data) => {
  if(error) console.error('Erreur de lecture message.txt')
  else console.log('lecture de la donnée', data)
})