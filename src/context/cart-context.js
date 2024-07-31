import React from 'react';
import { products_data } from '../products';

export const ShopContext = React.createContext();

const getDefaultCart = () => {
   let cart = {};

   products_data.forEach((product) => {
      cart[product.id] = 1;
   });

   return cart;
};

export function ShopContextProvider(props) {
   const [cart, setCart] = React.useState(getDefaultCart());

   function addToCart(item) {
      setCart((old_cart) => {
         return {
            ...old_cart,
            [item]: old_cart[item] + 1
         };
      });
   }

   function removeFromCart(item) {
      setCart((old_cart) => {
         return {
            ...old_cart,
            [item]:
               old_cart[item] > 0 ? 0 : old_cart[item] - 1
         };
      });
   }

   function checkoutFromCart() {
      setCart(getDefaultCart());
   }

   function getTotalAmount() {
      let total_amount = 0;

      products_data.forEach((product) => {
         total_amount += product.price * cart[product.id];
      });

      return total_amount;
   }

   const contextValue = {
      cart,
      addToCart,
      removeFromCart,
      checkoutFromCart,
      getTotalAmount
   };

   console.log(cart);
   return (
      <ShopContext.Provider value={contextValue}>
         {props.children}
      </ShopContext.Provider>
   );
}
