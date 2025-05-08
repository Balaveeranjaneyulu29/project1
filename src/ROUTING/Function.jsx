import React from "react";
import {Routes,Route} from "react-router-dom"
import Navigator from "./Navigator";
import Home from "./Home";
import Product from "./Product";
import Contact from "./Contact";
import About from "./About";
function Function(){
  return(
    <div>
     <Navigator/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
     </Routes>
    </div>
  );
}
export default Function;