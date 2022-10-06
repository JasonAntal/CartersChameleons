import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

function About(){
      return(
        <div className ="App-header">
          <section id="info" className = "webSection subpage">
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
        </div>
      )
    }
  
  export default About