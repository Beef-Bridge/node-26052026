export default class {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
  }

  hello() {
    console.log(`${this.firstname} ${this.lastname}`)
  }
}