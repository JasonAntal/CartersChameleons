import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import Footer from './partials/footer';
import {ParallaxProvider} from 'react-scroll-parallax';
import {Parallax} from 'react-scroll-parallax';
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
/* 
import { Link } from 'react-router-dom';
import Cham1 from './images/Cham1.png';
import Cham2 from './images/Cham2.png';
import Cham3 from './images/Cham3.png';
import Cham4 from './images/Cham4.png';
import Cham5 from './images/Cham5.png';
*/

class Main extends React.Component{
  render(){
    return(
      <div className ="App-header">

        <ParallaxProvider>
        <Parallax translateY={['-100px', '125px']}>
        <section id="hero" className = "webSection">
          <div className = "heroWrapper">
            <h1 className = "section-heading" id = "hero-heading">
              The Coolest Critters in the Jungle.
            </h1>
            <div className = "section-text hero-text">
              At Carter's Chameleons, we strive to provide our customers with the most colorful and companionable
              reptiles in the world. Bred from wild-caught specimens in Madagascar, our little buddies make
              for friendly, relaxed, and low-maintenance companions. 
            </div>
          </div>
        </section>
        </Parallax>
        </ParallaxProvider> 

        <section id="chameleonDisplay" className = "websection container">
          <h1 className="section-heading">Meet Your New Friends!</h1>
          <span className="section-text">Nearly a dozen breeds to choose from, each with their own unique colors and patterns.</span>
          
          <ImageSlider slides = {SliderData}/>
          
          <Container>
{/*            <span className="section-text">To learn more about each chameleon's quirks and personalities, click below.</span>
            
            <div className="img-section">
              <figure className = "img-wrapper"><Link to="/products">
                <img src={Cham1} alt="" className = "chamPic" />
                <figcaption className = "img-caption">Parson's Chameleons</figcaption>
              </Link></figure>

              <span className = "img-wrapper"><Link to="/products">
                <img src={Cham2} alt="" className = "chamPic" />
                <figcaption className = "img-caption">Veiled Chameleons</figcaption>
              </Link></span>
              
              <span className = "img-wrapper"><Link to="/products">
                <img src={Cham3} alt="" className = "chamPic" />
                <figcaption className = "img-caption">Carpet Chameleons</figcaption>
              </Link></span>
            </div>

            <div className="img-section">
              <span className = "img-wrapper"><Link to="/products">
                <img src={Cham4} alt="" className = "chamPic" />
                <figcaption className = "img-caption">Horned Chameleons</figcaption>
              </Link></span>

              <span className = "img-wrapper"><Link to="/products">
                <img src={Cham5} alt="" className = "chamPic" />
                <figcaption className = "img-caption">Panther Chameleons</figcaption>
              </Link></span>
              
    </div> */}
          </Container>
        </section>

        <section id="info" className = "webSection">
          <div className="infoSubsection">
            <h2 className ="section-heading">Bred for Bright Colors and Friendly Habits.</h2>
            <div className = "section-text">We pick the brightest, rarest chameleon colors to breed, and raise them from birth. 
            All of our chameleons are comfortable around people, and love having a friendly giant's shoulder around to crawl on.
            Our chameleons are great for brightening up a room, playing with children, or being your companion.
            </div>
          </div>
          <div className="infoSubsection">
            <h2 className = "section-heading">100% Farmer-Owned. 100% Local.</h2>
            <div className = "section-text">A small business owned by Florida farmers Richard Carter Watson and Jose Barrios, we are wildly passionate about animals.
            Our love for nature and wildlife is reflected in everything we do, and you can be sure that our critters are given nothing but the best.
            All profits go towards supporting your farmer next door.
            </div>
          </div>
          <div className="infoSubsection">
            <h2 className = "section-heading">All the Supplies and Tricks You'll Need for Your New Pets</h2>
            <div className = "section-text">
              We know that taking on an exotic pet can seem daunting to some people, but don't worry- we promise to be there with you every step of the way!
              Every chameleon comes with a how-to guide, and we will answer any questions you may have about taking care of your new friend.
              We also offer plenty of toys, tools, and mini-houses for your pet to play in.
            </div>
          </div>

        </section>

        <Footer/>
      </div>
    )
  }
}

export default Main

/*
What needs to be done?
-hero section
  DONE-background image with parallax
  DONE- hero text; header, blurb, products button

-product section
  DONE-five section blocks of the best-selling chameleons, spaced out
  DONE-pictures and text
  DONE-hover effect
  DONE-links to their respective product

-info section
  DONE- 2-3 subheading sections
  DONE- basic text
  DONE- button 

Optional:-subpages for products, about, login and shopping cart
  - copy-paste the various sections into new pages
  - Add a few extra blocks to each section
  - Set up a basic login form
  Bonus:
  -image carousel

-Order section
  - Give each chameleon its own unique product page, and style them
  - Create a functional shopping cart that you can add things into
  - Create an order page and style it
  - Have the order page show you total cost of all items
  - The user should be able to add in shipping locations

-footer with all navbar links, as well as SM, T&C, privacy policy
  DONE- navbar links
  DONE- SM icons and links
  DONE- T&C and privacy policy

-Wrap-up:
  DONE- Add favicon
  DONE- colors
  DONE- font sizing
  DONE- font family
  DONE- layout

-Unforeseen issues and changes:
  - Set up a grid and put each chameleon in its own section
  DONE- Make the info section's background one blanket color
  - Add @media queries.

-After completion:
  - Deploy
  - Ask for feedback
  - Final touches
*/