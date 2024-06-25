import React from 'react';
import EcommerceContext from '../Context/EcommerceContext';
import './index.css';

const CartItem = ({ eachItem }) => (
  <EcommerceContext.Consumer>
    {value => {
      const { removeFromCart, incrementQuantity, decrementQuantity } = value;
      return (
        <div className="cart-item">
          <img src={eachItem.image} alt={eachItem.title} className="cart-item-image" />
          <div className="cart-item-details">
            <div className="cart-item-info">
              <p className="cart-item-title">{eachItem.title}</p>
              <p className="cart-item-price">Price: ${eachItem.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-controls">
              <div className="cart-item-quantity">
                <button onClick={() => decrementQuantity(eachItem.id)} className='plus-minus-btn'>-</button>
                <span>{eachItem.quantity}</span>
                <button onClick={() => incrementQuantity(eachItem.id)} className='plus-minus-btn'>+</button>
              </div>
              <button className="button" onClick={() => removeFromCart(eachItem.id)}>
                <span className="button__text">Delete</span>
                <span className="button__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    viewBox="0 0 512 512"
                    height="512"
                    className="svg"
                  >
                    <title></title>
                    <path
                      style={{
                        fill: 'none',
                        stroke: '#323232',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '32px',
                      }}
                      d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                    />
                    <line
                      y2="112"
                      y1="112"
                      x2="432"
                      x1="80"
                      style={{
                        stroke: '#323232',
                        strokeLinecap: 'round',
                        strokeMiterlimit: '10',
                        strokeWidth: '32px',
                      }}
                    />
                    <path
                      style={{
                        fill: 'none',
                        stroke: '#323232',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '32px',
                      }}
                      d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                    />
                    <line
                      y2="400"
                      y1="176"
                      x2="256"
                      x1="256"
                      style={{
                        fill: 'none',
                        stroke: '#323232',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '32px',
                      }}
                    />
                    <line
                      y2="400"
                      y1="176"
                      x2="192"
                      x1="184"
                      style={{
                        fill: 'none',
                        stroke: '#323232',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '32px',
                      }}
                    />
                    <line
                      y2="400"
                      y1="176"
                      x2="320"
                      x1="328"
                      style={{
                        fill: 'none',
                        stroke: '#323232',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '32px',
                      }}
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      );
    }}
  </EcommerceContext.Consumer>
);

export default CartItem;
