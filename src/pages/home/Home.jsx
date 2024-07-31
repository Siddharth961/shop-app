import { products_data } from '../../products';
import Product from './Product';

export default function Home() {
   const product_els = products_data.map((product) => (
      <Product key={product.id} id={product.id} name={product.name} price={product.price} />
   ));
   

   return (
      <div className='product-container flex'>
         
         {product_els}
      </div>
   );
}
