import { Outlet} from "react-router-dom";
import Navbar from './navbar';
import Footer from './footer';


import React from 'react'

function layout  ()  {
  return (
    <>
      <Navbar />
      
      <Outlet />
      <Footer />
      
     
    </>
  )
}

export default layout
