import Navbar from "../Navbar"
import EcommerceContext from "../Context/EcommerceContext"
import CartItem from '../CartItem'
import './index.css'

const Cart=()=>(
    <div>
        <EcommerceContext.Consumer>
            {value=>{
                const {cartList}=value
                const totalCartValue = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
                return (
                  <>
                    <Navbar />
                    <h1 className="cart-head">Cart</h1>
                    {cartList.length === 0 ? (
                      <div className='empty-view'>
                       <p>Looks like your cart is empty</p>
                      </div>
                    ) : (
                      <>
                        <ul className='cart-list-item'>
                          {cartList.map((eachItem) => (
                            <CartItem key={eachItem.id} eachItem={eachItem} />
                          ))}
                        </ul>
                        <div className='cart-total'>
                          <p className="total-amount">Total Price: ${totalCartValue.toFixed(2)}</p>
                        </div>
                      </>
                    )}
                  </>
                );
            }}
        </EcommerceContext.Consumer>
        
    </div>
)
export default Cart