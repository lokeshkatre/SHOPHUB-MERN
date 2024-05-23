import React, { useContext } from 'react';
import './cartItems.css';
import minus_icon from '../Assets/minus_image.png';
import { ShopContext } from '../../Contex/ShopContext';
import all_products from '../Assets/all_products';

const _ = require('lodash');


const CartItems = () => {
    const {allProduct,cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    if (!allProduct) {
        return <div>Loading...</div>; 
    }

    const searchById = (id)=>{
        return _.find(all_products,{id:id});
    }

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {allProduct.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={searchById(e.id).image} className='carticon-product-icon' alt="" />
                                <p>{e.name}</p>
                                <p>Rs. {e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>Rs. {e.new_price * cartItems[e.id]}</p>
                                <img className='minusicon' src={minus_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>Rs. {getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>Rs. {getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a  promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
