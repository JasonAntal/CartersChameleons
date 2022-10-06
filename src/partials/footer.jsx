import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { IconContext } from "react-icons";

//figure out spacing/alignment

class Footer extends React.Component {
    render() 
    {return (
    <footer class="footer py-2 mt-auto">
        <span class="text-light" id = "nav-heading">Carter's Chameleons 2022</span>
        <div class="container container-fluid d-flex flex-row" id = "footerContainer">
            
            <a href="mailto:jason.antal89@gmail.com" class="footer-link text-muted">
                Contact us
            </a>

            <a href="http://www.facebook.com" className="footer-link text-muted">
                <IconContext.Provider value={{ color: '#fafafa', size: '40px' }}>
                    <AiFillFacebook />
                </IconContext.Provider>
                Facebook
            </a>
            <a href="http://www.instagram.com" className="footer-link text-muted">
            <IconContext.Provider value={{ color: '#fafafa', size: '40px' }}>
                <AiFillInstagram/>
            </IconContext.Provider>
            Instagram
            </a>
            <a href="https://app.termsfeed.com/wizard/terms-conditions" className="footer-link text-muted">
                Terms and Conditions
            </a>

            <a href="https://app.privacypolicies.com/wizard/privacy-policy" className="footer-link text-muted">
                Privacy Policy
            </a>
        </div>
    </footer>)}
}

export default Footer

/*footer with all navbar links, as well as SM, T&C, privacy policy
DONE- navbar links
- colors
- font sizing
- font family
- spacing
- SM icons and links
DONE- T&C and privacy policy*/