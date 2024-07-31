import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopContextProvider } from './context/cart-context';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
   return (
      <div className="App">
         <ShopContextProvider>
            <Router>
                {/*--------------Navbar---------------- */}
               <Navbar />
               <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/cart" element={<Cart />}></Route>
               </Routes>
               {/* -----------------Footer------------------------ */}
               <Footer />
            </Router>
         </ShopContextProvider>
      </div>
   );
}
