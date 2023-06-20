import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import {RecipeList} from '../data/data';
const Menu = () => {
  return (
    <>
    <Header/>
<Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
{
  RecipeList.map((menu)=>(
    <Card sx={{maxWidth:'390px',display:"flex",m:2}}>
    <CardActionArea>
      <CardMedia sx={{minHeight:'400px',}} component={'img'} src={menu.image} alt={menu.name}/>
      <CardContent>
        <Typography variant='h5' component={'div'}>
          {menu.name}
        </Typography>
        <Typography variant='body2'>
          {menu.details}
        </Typography>


        <Typography variant='body1'>
          {menu.price}₹
        </Typography>

      </CardContent>
    </CardActionArea>
  </Card>

  ))
}


</Box>



    <Footer/>
      
    </>
  )
}

export default Menu
