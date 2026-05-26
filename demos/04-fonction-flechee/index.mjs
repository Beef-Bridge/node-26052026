// avec une notation de fonction classique
document.querySelector('input').addEventListener('keyup', function() {
  console.log('this sans fn flechée', this)
})

// avec une notation flechée
document.querySelector('input').addEventListener('keydown', () => {
  console.log('this avec fn flechée', this)
})
