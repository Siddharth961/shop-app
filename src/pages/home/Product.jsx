import placeholder from '../../assets/placeholder.jpg';
import React from 'react';
import { ShopContext } from '../../context/cart-context';

export default function Product(props) {
   const { cart, addToCart } = React.useContext(ShopContext);
   const quantity = cart[props.id]
   return (
      <div className="product col-md-2 col-9 my-4 flex">
         <img src={placeholder} alt="" />
         <div className="name fs-5 mb-1 fw-medium">
            {props.name}
         </div>
         <div className="price">{`Rs. ${props.price}`}</div>
         <button onClick={() => addToCart(props.id)}>
            Add to cart { quantity>0 && <>( {quantity} )</>}
         </button>
      </div>
   );
}
