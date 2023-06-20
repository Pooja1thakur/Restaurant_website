
import React from "react";

import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pagenotfount from "./pages/Pagenotfount";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
function App() {
  return (
    <div>
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="menu" element={<Menu/>}></Route>
      <Route path="*" element={<Pagenotfount/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
      
      
      
    
  );
}

export default App;
