import React from 'react'

import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box } from '@mui/material';
import Banner from '../images/pexels-rajesh-tp-1603899.jpg';
import "../styles/HomeStyles.css";
const Home = () => {
  return (
    <>
    <Header/>
    <Box>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
<div className='headerContainer'>
<h1>Food Website</h1>
<p>Best Food in India</p>
<Link to="/menu">
<button>Order Now</button>
</Link>
</div>


      </div>

    </Box>
<Footer/>

    

    
    </>
  );
};

export default Home;

