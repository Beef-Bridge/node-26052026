let firstname = 'Bob'
firstname = 'Guérin'
console.log('prénom', firstname)
// Attention à const avec les tableaux
const cities = ['paris', 'marseille', 'lille']
if(true) {
  // propre à scope de la condition, différent de cities avec paris qui est dans le scope globale
  const cities = ['Nice', 'Bordeaux']
  console.log('cities', cities)
}
console.log('villes avant', cities)
cities.push('Lyon')
console.log('villes après', cities)
const lastname = 'Tshimini'
lastname = 'Guérin' // pas possible

