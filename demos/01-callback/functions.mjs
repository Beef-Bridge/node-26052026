export function sayHello() {
  console.log("hello");
}

export function addButtonEvent(btn, evt = 'click') {
  if (btn) {
    btn.addEventListener(evt, sayHello);
  }
}
