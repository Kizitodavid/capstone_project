import React, { useContext } from 'react'
import './CartItems.css'
import { BooksContext } from '../../Context/BooksContext'

export const CartItems = () => {
    const {getTotalCartAmount,Products,cartItems,removeFromCart} = useContext(BooksContext)
  return (
    <div className='cartItems'>
        <div className="cartItems-format-main miye">
            <p>Remove</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Product</p>
        </div>
        <hr />
        {Products.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                            <div className="cartItems-formats cartItems-format-main">
                                <p className='remove-icon' onClick={()=>{removeFromCart(e.id)}}>X</p>
                                <p>{e.title}</p>
                                <p>{e.price} Ugx</p>
                                <button className="cartItems-quantity">{cartItems[e.id]}</button>
                                <p>{e.price*cartItems[e.id]} Ugx</p>
                                <img src={e.image} alt="" className='cartIcon-product-icon'/>
                            </div>
                            <hr />
                        </div>
            }
            return null
        })}
        <div className="cartItems-down">
            <div className="cartItems-Totals">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartItems-totals-item">
                        <p>Subtotal</p>
                        <p>{getTotalCartAmount()} Ugx</p>
                    </div>
                    <hr />
                    <div className="cartItems-totals-item">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartItems-totals-item">
                        <h3>Total</h3>
                        <h3>{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECK OUT</button>
            </div>
            <div className="promo-code">
                <p>If you have a promo code, Enter it here</p>
                <div className="promo-box">
                    <input type="text" placeholder='Promo code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
