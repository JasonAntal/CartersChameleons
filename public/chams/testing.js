import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { IconContext } from "react-icons";

//figure out spacing/alignment

class that extends React.Component {
    render() 
    {return (
    <footer class="footer bg-dark py-2 mt-auto">
        <div class="container container-fluid navbar-nav">
            
            <span class="text-muted">Carter's Chameleons 2022</span>
            <a class="nav-link text-light" aria-current="page" href="./views/home">
                Home
            </a>
          
            <a class="nav-link text-light" href="./views/products">
                Products
            </a>
            
            <a class="nav-link text-light" href="./views/about">
                About us
            </a>
            
            <a href="./views/contact" class="nav-link text-light">
                Contact us
            </a>
            <a href="" className="footer-link">
                <IconContext.Provider value={{ color: '#fafafa', size: '50px' }}>
                    <AiFillFacebook />
                </IconContext.Provider>
            </a>
            <a href="" className="footer-link">
            <IconContext.Provider value={{ color: '#fafafa', size: '50px' }}>
                <AiFillInstagram/>
            </IconContext.Provider>
            </a>
            <a href="https://app.termsfeed.com/wizard/terms-conditions" className="footer-link">Terms and Conditions</a>

            <a href="https://app.privacypolicies.com/wizard/privacy-policy" className="footer-link">Privacy Policy</a>
        </div>
    </footer>)}
}

export default that

/*footer with all navbar links, as well as SM, T&C, privacy policy
DONE- navbar links
- colors
- font sizing
- font family
- spacing
- SM icons and links
DONE- T&C and privacy policy*/