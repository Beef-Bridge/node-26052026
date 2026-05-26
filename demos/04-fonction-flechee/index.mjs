// avec une notation de fonction classique
document.querySelector('input').addEventListener('keyup', function() {
  console.log('this sans fn flechée', this) // this = élément HTML input
})

// avec une notation flechée
document.querySelector('input').addEventListener('keydown', () => {
  console.log('this avec fn flechée', this) // this = objet global window
})
