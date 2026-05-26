console.log('this', this)
document.querySelector('input').addEventListener('keypress', function(evt) {
  console.log('this', evt)
})

document.querySelector('button').addEventListener('click', function(evt) {
  console.log('this dans la callback de l\'événement', evt)
})
