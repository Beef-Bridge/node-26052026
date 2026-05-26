const id = 10
export const firstname = 'Glodie';
export const lastname = 'Tshimini';
export function hello (name) {
  console.log('prenom', firstname)
  // Concaténation = mettre les infos bout à bout
  console.log(`Hello ${name}, bienvenue !, id : ${id}`) // Conténation depuis ES6 
}