import { products_data } from '../../products';
import Product from './Product';

export default function Home() {

   // Getting jsx for each item in our product list
   const product_els = products_data.map((product) => (
      <Product key={product.id} data={product} />
   ));
   

   return (
      <div className='home flex'>
      <h1 className='home-header'>Our Products</h1>
      <div className='product-container flex col-md-10 col-11'>
         
         {product_els}
      </div>
      </div>
   );
}
