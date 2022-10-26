import ProductItem from './ProductItem'
import classes from './Products.module.css'

const DUMMY_PRODUCTS = [
  {
    id: 1,
    price: 1799.99,
    title: 'iPhone 14 Pro',
    description: 'Newest iPhone from Apple'
  },
  {
    id: 2,
    price: 550,
    title: 'iPad Air',
    description: '9th generation of iPad'
  },
  {
    id: 3,
    price: 880,
    title: 'Samsung Galaxy Note',
    description: 'Cool phone that will help you take better notes'
  },
  {
    id: 4,
    price: 630.50,
    title: 'iPhone X',
    description: 'Refurbished iPhone'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products
