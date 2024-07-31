import React from 'react';
import { Link } from 'react-router-dom';
import { products_data } from '../../products';
import { ShopContext } from '../../context/cart-context';
import CartItem from './Cart-Item';

export default function Cart() {

    // Getting cart and other functions by using context
   const { cart, checkoutFromCart, getTotalAmount } =
      React.useContext(ShopContext);

      // Creating cart items but only if quanity is greater than 0
   const cart_els = products_data.map((product) => {
      if (cart[product.id] > 0) {
         return <CartItem key={product.id} data={product} />;
      }

      return null;
   });

   // Getting sub total of the current cart
   const total_amount = getTotalAmount();

   return (
      <div className="cart-container flex">
         <h1 className="cart-header">Your Cart</h1>
         {cart_els}

         {/*  Conditionally rendering cart items only if there ARE any items.. else informing empty list  */}

         {total_amount > 0 ? (
            <div className="checkout">
               <h5 className="my-2 ">Your Subtotal : Rs. {total_amount}</h5>
               <div className="cart-options">
                  <Link to="/">
                     <button>Continue Shopping</button>
                  </Link>

                  <button onClick={() => checkoutFromCart()}>Checkout</button>
               </div>
            </div>
         ) : (
            <div className="checkout mt-5 pt-5">
               <h2> Seems like your cart is Empty!!</h2>
               <div className="cart-options text-center">
                  <Link to="/">
                     <button>Continue Shopping</button>
                  </Link>
               </div>
            </div>
         )}
      </div>
   );
}
