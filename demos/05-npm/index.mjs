import { firstname, lastname, hello } from "./utils/module_2.mjs";
import { firstname as fname, lastname as lname, hello as hola } from "./utils/module_3.mjs";
import Toto from './utils/module_1.mjs'
console.log('prenom', firstname)
console.log('nom', lastname)
hello(firstname)
hola(`${fname} ${lname}`)

const toto = new Toto('Toto', 'Toto')
toto.hello()