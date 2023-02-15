import { BrowserRouter, Routes, 
    Route} from "react-router-dom";
import Navbar from "./partials/navbar";
import Main from "./main.tsx"
import About from './views/about.jsx'
import Products from "./views/products";
import Login from "./views/login";
import ShopCart from "./views/cart";
import React from 'react';
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
<ImageSlider slides = {SliderData}/>
function App () {
    return (
      <div>
        <BrowserRouter>
          <Navbar>
            <Routes>
              <Route path = '/' element = {<Main />}/>
              <Route path = '/products' element = {<Products />}/>
              <Route path = "/about" element = {<About />} />
              <Route path = "/cart" element = {<ShopCart />}/>
              <Route path = "/login" element = {<Login />} />
            </Routes>
          </Navbar>
        </BrowserRouter>
      </div>
    );
  }


export default App;