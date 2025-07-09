function sayHi() {
  console.log('Hello')
}

//can also pass anonymous functions

const hiAndBye = (func) => {
  func()
  console.log('Bye')
}
