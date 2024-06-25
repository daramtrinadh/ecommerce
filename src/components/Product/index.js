import {Link} from 'react-router-dom'
import './index.css'
import EcommerceContext from '../Context/EcommerceContext'
const Product=({product})=>(
    <EcommerceContext.Consumer>
        {value=>{
            const {addToCart}=value
            return (
              <div className='card'>
                <Link to={`/product/${product.id}`} className='link'>
                  <div className='card-img'>
                    <div>
                      <img
                        src={product.image}
                        alt={product.title}
                        className='img'
                      />
                    </div>
                  </div>
                  <div className='card-title'>{product.title}</div>
                </Link>
                <hr className='card-divider' />
                <div className='card-footer'>
                  <div className='card-price'>
                    <span>$</span>
                    {product.price}
                  </div>
                  <button
                    className='button'
                    type='button'
                    onClick={() => addToCart(product)}>
                    <span className='button__text'>Add Item</span>
                    <span className='button__icon'>
                      <svg
                        className='svg'
                        fill='none'
                        height='24'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        viewBox='0 0 24 24'
                        width='24'
                        xmlns='http://www.w3.org/2000/svg'>
                        <line x1='12' x2='12' y1='5' y2='19'></line>
                        <line x1='5' x2='19' y1='12' y2='12'></line>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            );
        }}

    </EcommerceContext.Consumer>
    
)
export default Product