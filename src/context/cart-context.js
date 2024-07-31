import React from 'react';
import { products_data } from '../products';

export const ShopContext = React.createContext();

// Creates a list which contain id : quantity pair of each item of product list
// Initially quantity is set to zero
const getDefaultCart = () => {
   let cart = {};

   // The list is also stored in local storage so that in case of reloads the cart presists its data, hence checking for and importing any previously stored cart list
   if (localStorage.getItem('cart'))                     
      return JSON.parse(localStorage.getItem('cart')); 

   // In case local storage dont have any list new cart list is made
   products_data.forEach((product) => {
      cart[product.id] = 0;
   });

   return cart;
};

// Context provider for cart list so that cart can be accessed easily acroos components
export function ShopContextProvider(props) {
   const [cart, setCart] = React.useState(getDefaultCart());

   // Function to add quantity of an item by 1
   // takes item id as input
   // also updates local storage
   function addToCart(item) {
      setCart((old_cart) => {
         const new_cart = {
            ...old_cart,
            [item]: old_cart[item] + 1
         };
         localStorage.setItem('cart', JSON.stringify(new_cart));
         return new_cart;
      });
   }

   // Function to decrease quantity of an item by 1
   // takes item id as input
   // also updates local storage
   function removeFromCart(item) {
      setCart((old_cart) => {
         const new_cart = {
            ...old_cart,
            [item]: old_cart[item] - 1
         };
         localStorage.setItem('cart', JSON.stringify(new_cart));
         return new_cart;
      });
   }

   // Sets cart to initial value and also removes local storage data
   function checkoutFromCart() {
      localStorage.removeItem('cart');

      setCart(getDefaultCart());
   }

   // returns subtotal of current list by multiplying price and quantity of each item
   function getTotalAmount() {
      let total_amount = 0;

      products_data.forEach((product) => {
         total_amount += product.price * cart[product.id];
      });

      return total_amount;
   }

   // object to pass as value in context provider, holds the cart and functions on carts
   const contextValue = {
      cart,
      addToCart,
      removeFromCart,
      checkoutFromCart,
      getTotalAmount
   };

   return (
      <ShopContext.Provider value={contextValue}>
         {props.children}
      </ShopContext.Provider>
   );
}
