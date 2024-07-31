import { Link } from 'react-router-dom';

export default function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid px-5">
            <Link className="navbar-brand fs-4 " to="/">
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
                     <Link className="nav-link active" aria-current="page" to="/">
                        Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link active" to="/cart">
                        Cart
                     </Link>
                  </li>
                  
               </ul>
            </div>
         </div>
      </nav>
   );
}
