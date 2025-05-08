import React from "react";
import {Route,Routes, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter} from "react-router-dom"
import Navigator from "./Navigator";
import Home from "./Home";
import Product from "./Product";
import Contact from "./Contact";
import About from "./About";
import Rootlayout from "./LAYOUT/Rootlayout";
function Function(){

    const router=createBrowserRouter(
        createRoutesFromElements(
            <BrowserRouter>
            <Route path="/" element={<Rootlayout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="product" element={<Product/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="about" element={<About/>}/>
            </Route>
            </BrowserRouter>
        )
    )

  return(
     <RouterProvider router={router}/>
  );
}
export default Function;