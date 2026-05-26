import { sayHello, addButvent } from "./functions.mjs";
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
addButtonEvent(btn1);
addButtonEvent(btn2);
addButtonEvent(btn3, 'dblclick');