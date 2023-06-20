import React from 'react'
import {Box, Typography} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';


const About = () => {
  return (
    <>
    <Header/>
    <Box sx={{my:15,textAlign:"center" ,p:2, "& h4":{fontWeight:"bold",my:2,fontSize:"2rem"},"& p":{textAlign:"justify"},"@media (max-width:600px)":{mt:0, "& h4":{fontSize:"1.5rem"},}}}>

<Typography variant='h4'>
  Welcome To My Restraunt
</Typography>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est la

</p>
<br/>
<p>
  lorem100Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  
</p>
    </Box>
    <Footer/>
    
    
    </>
  )
}

export default About;
