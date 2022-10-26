

const functionThatReturnsFunction = (name) => {
  return (hello) => {
    console.log(`${hello} ${name}`)
  }

}

console.log('This is just a test')

const myHelloFunction = functionThatReturnsFunction('Pepe')

console.log('This is just a test #2')

myHelloFunction('Hola')