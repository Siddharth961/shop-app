import React from 'react'
import { ShopContext } from '../../context/cart-context'
import placeholder from '../../assets/placeholder.jpg'
export default function CartItem({data}){
    const { cart, addToCart, removeFromCart } = React.useContext(ShopContext)
    return(
        <div className="cart-item col-md-5 col-12 row">
            <img src={data.image} alt="" className='item-img col-md-4 col-6'/>
            <div className='item-info col-6 flex'>
                <h5>{data.name}</h5>
                <h6 > Price : Rs.{data.price}</h6>
                <div className="item-updater">
                    <button onClick={() => removeFromCart(data.id)}>-</button>
                    <span className='mx-3'>{cart[data.id]}</span>
                    <button onClick={ ()=> addToCart(data.id)}>+</button>
                </div>
            </div>

        </div>
    )
}