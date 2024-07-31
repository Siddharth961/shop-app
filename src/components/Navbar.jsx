import { Link } from 'react-router-dom';

export default function Navbar() {

   // Generated navbar from BootStrap
   return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid px-md-5 px-3">
            <Link className="navbar-brand fs-3 " to="/">
               Shopper's Bay
            </Link>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNav"
               aria-controls="navbarNav"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
               <ul className="navbar-nav ms-auto  fs-5 fw-semi-bold">
                  <li className="nav-item">
                     <Link className="nav-link active fs-4 mx-2" aria-current="page" to="/">
                        Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link active fs-4 mx-2" to="/cart">
                        Cart
                     </Link>
                  </li>
                  
               </ul>
            </div>
         </div>
      </nav>
   );
}
