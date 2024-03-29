import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';

//fix the flex on the navlinks

function Navbar(props){
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <div className="navbar-container container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-iconCHANGETHISTORESTOREICON"></span>
          </button>

          <h1 id = 'nav-heading'>Carter's Chameleons</h1>

          <div className="collapse navbar-collapse" id="navbarAltMarkup">
            <div className="navbar-nav " id = "navbar">
                
              <Link to ="/" className="nav-link" id = "firstNavLink"> Home </Link>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/about" className="nav-link">About us</Link>
              {/*<Link to="/login" className="nav-link">Sign up/log in</Link>*/}

              <Link to ="/cart" id = "shopping-cart" className ="nav-link">
                <button id = "cart-button"className="btn btn-success">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                  </button>
              </Link>
                
            </div>
          </div>

        </div>
      </nav>
      {props.children}
    </div>

  );
}
export default Navbar;
