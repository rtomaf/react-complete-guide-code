let names = [
  { id: 1, name: 'Ricardo' },
  { id: 2, name: 'Fernando' },
  { id: 3, name: 'Martín' },
  { id: 4, name: 'Miriam' },
  { id: 5, name: 'Facundo' },
]

// existingItem is an object, so names holds a reference to this object
// so I can mutate the object and it will 'reflect' in names
let existingItem = names.find(name => name.id === 2)

existingItem.name = 'Claudio'
console.log(names)

let numbers = [1, 2, 3, 4, 5]

// existingNumber is a number, a primitive type, so numbers holds a value of this number
// so if I change the value of existingNumber, it will not 'reflect' in numbers
let existingNumber = numbers.find(name => name.id === 5)

existingNumber = 7
numbers[4] = 9

console.log(numbers);

