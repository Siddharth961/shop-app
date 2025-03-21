import placeholder from '../../assets/placeholder.jpg';
import React from 'react';
import { ShopContext } from '../../context/cart-context';

export default function Product({data}) {
   console.log(data)
   const { cart, addToCart } = React.useContext(ShopContext);
   const quantity = cart[data.id]
   return (
      <div className="product col-md-2 col-9 my-4 flex">
         <img src={data.image} alt="" />
         <div className="name fs-5 mb-1 fw-medium">
            {data.name}
         </div>
         <div className="price">{`Rs. ${data.price}`}</div>
         <button onClick={() => addToCart(data.id)}>
            Add to cart { quantity>0 && <>( {quantity} )</>}
         </button>
      </div>
   );
}
