import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";

function Products () {
      return(
        <div className ="App-header subpage">
          <br/>
        <section id="chameleonDisplay" className = "websection container">
          <h1 className="section-heading">A Wide Variety of Species</h1>
          <ImageSlider slides = {SliderData}/>
          <h4>
            We're not currently accepting orders- please send us an email if you would like more details on a particular chameleon.
        </h4>
          </section>
        </div>
      )
  }
  
  export default Products