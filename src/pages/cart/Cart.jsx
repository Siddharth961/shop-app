import React from 'react';
import { Link } from 'react-router-dom';
import { products_data } from '../../products';
import { ShopContext } from '../../context/cart-context';
import CartItem from './Cart-Item';

export default function Cart() {
   const { cart, checkoutFromCart, getTotalAmount } =
      React.useContext(ShopContext);

   const card_els = products_data.map((product) => {
      if (cart[product.id] > 0) {
         return (
            <CartItem key={product.id} data={product} />
         );
      }

      return null;
   });

    const total_amount = getTotalAmount()

   return (
      <div className="cart-container flex">
        
         <h1>Your Cart</h1>
         {card_els}
         <h5 className="my-2">
            Your Subtotal : Rs. {total_amount}
         </h5>
         <div className="cart-options">
            <Link to="/">
               <button>Continue Shopping</button>
            </Link>

            <button onClick={() => checkoutFromCart()}>
               Checkout
            </button>
         </div>
      </div>
   );
}
