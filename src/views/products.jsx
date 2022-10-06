import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Cham1 from '../images/Cham1.png';
import Cham2 from '../images/Cham2.png';
import Cham3 from '../images/Cham3.png';
import Cham4 from '../images/Cham4.png';
import Cham5 from '../images/Cham5.png';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

function Products () {
      return(
        <div className ="App-header subpage">
          <br/>
          <h1>
            We're not currently accepting orders- please send us an email if you would like more details on each chameleon breed.
          </h1>
        <section id="chameleonDisplay" className = "websection container">
          <h1 className="section-heading">A Wide Variety of Species</h1>
          <span className="section-text">Nearly a dozen breeds to choose from, each with their own unique colors and patterns!</span>
          <Container>
            <span className="section-text">To learn more about each chameleon's quirks and personalities, click below.</span>
            <div className="img-section">
              <figure className = "img-wrapper"><a href="./views/products">
                <img src={Cham1} alt="" className = "chamPic" />
                <figcaption className = "img-caption">Parson's Chameleons</figcaption>
              </a></figure>
              <span className = "img-wrapper"><a href="./views/products">
                <img src={Cham2} alt="" className = "chamPic" />
                <figcaption className = "img-caption">Veiled Chameleons</figcaption>
              </a></span>
              <span className = "img-wrapper"><a href="./views/products">
                <img src={Cham3} alt="" className = "chamPic" />
                <figcaption className = "img-caption">Carpet Chameleons</figcaption>
              </a></span>
            </div>
            <div className="img-section">
              <span className = "img-wrapper"><a href="./views/products">
                <img src={Cham4} alt="" className = "chamPic" />
                <figcaption className = "img-caption">Horned Chameleons</figcaption>
              </a></span>
              <span className = "img-wrapper"><a href="./views/products">
                <img src={Cham5} alt="" className = "chamPic" />
                <figcaption className = "img-caption">Panther Chameleons</figcaption>
              </a></span>
            </div>
          </Container>
          </section>
        </div>
      )
  }
  
  export default Products