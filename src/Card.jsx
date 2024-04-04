import React from 'react'
import App from './App'

function Card({ item, cart, addToCart, removeFromCart }) {
  
  const isInCart = cart.some((cartItem) => cartItem.id === item.id);
  const handleAddToCart = () => {
    addToCart(item.id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item.id);
  };


  return (
    <div className='col-lg-3'>
      <div className="card" style={{ width: 200 }}>
        <img src="https://picsum.photos/200/200" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <span className="card-text">Price: {item.price}</span>
          {isInCart ? (
            <button onClick={handleRemoveFromCart} className='btn btn-light' >Remove from Cart</button>
          ) : (
            <button onClick={handleAddToCart} className='btn btn-dark' >Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
