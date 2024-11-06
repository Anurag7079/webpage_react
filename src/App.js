import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Layout from './components/layout'
import Footer from './components/footer';
import Arrayimg1 from './components/imgarray1'
import Arrayimg2 from './components/imgarray2'
import Blog from './pages/blog'
import Contact from './pages/contact'


function App  () {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Arrayimg1" element={<Arrayimg1 />} />
          <Route path="Arrayimg2" element={<Arrayimg2 />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />
 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
