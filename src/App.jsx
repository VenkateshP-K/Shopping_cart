import Navigate from './Navigate'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import Card from './Card'
import React from 'react'
import './index.css'

function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  //to add items to cart and increase the count value 
  const addToCart = (id) => {
    const productToAdd = products.find(product => product.id === id);
    setCart([...cart, productToAdd]);
    setCount(prevCount => prevCount + 1); 
  };
    //to remove items to cart and decrease the count value 
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    setCount(prevCount => prevCount - 1);
  };

  let products = [
    {
      id: 1,
      title: "Fancy Product",
      price: "$80.00"
    },
    {
      id: 2,
      title: "Special Items",
      price: "$18.00"
    },
    {
      id: 3,
      title: "Sale Items",
      price: "$25.00"
    },
    {
      id: 4,
      title: "Popular Items",
      price: "$40.00"
    },
    {
      id: 5,
      title: "Sale Items",
      price: "$25.00"
    },
    {
      id: 6,
      title: "Fancy Products",
      price: "$280.00"
    },
    {
      id: 7,
      title: "Special Items",
      price: "$18.00"
    },
    {
      id: 8,
      title: "Popular Items",
      price: "$40.00"
    },
  ]
  return (
    <>
      <Navigate count={count} />
      <div className='heading'>
        <h1>Shop in Style</h1>
        <h6>With this shop hompeage template</h6>
      </div>
      <div className='container'>
        <div className='row'>
          {
            products.map((item, index) => {
              return (
                <Card key={item.id}
                  item={item}
                  cart={cart}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              )
            })
          }
        </div>
      </div>
      <div className='footer'>
        <h6>Copyright © Your Website 2024</h6>
      </div>
    </>
  )
}

export default App
