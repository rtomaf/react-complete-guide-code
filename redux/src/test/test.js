
const arrayOfObjects = [
  {
    title: 'Product-1',
    price: 8.90,
    description: 'a new product',
    qty: 3
  },
  {
    title: 'Product-2',
    price: 3.40,
    description: 'a new product',
    qty: 1
  },
  {
    title: 'Product-3',
    price: 7.00,
    description: 'a new product',
    qty: 2
  },
  {
    title: 'Product-4',
    price: 1.35,
    description: 'a new product',
    qty: 1
  },
]

const arrayOfQty = arrayOfObjects.map((curObj) => (curObj.qty))
const totalQty = arrayOfQty.reduce((prev, curr) => prev + curr, 0)

console.log(arrayOfQty)
console.log(totalQty)


