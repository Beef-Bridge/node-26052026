console.log('this', this) // this vaut window en FRONT
document.querySelector('input').addEventListener('keypress', function(evt) {
  // this vaut l'élément HTML INPUT
  // evt est un objet qui caractérise l'événement qui a eu eu ici keypress
  console.log('this', this, 'evt', evt)
})

document.querySelector('button').addEventListener('click', function(evt) {
  // l'objet evt ici avec l'événement click est différent de l'objet evt précédent avec keypress 
  console.log('this', this, 'evt', evt)
})
