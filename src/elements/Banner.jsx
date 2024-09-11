import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import Carousel from './Carousel';

const Bannerly = styled('div')({
    width: '100%',
    height: '400px', // Adjust the height as needed
    backgroundImage: `url('https://images6.alphacoders.com/134/1341130.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-around',
    color: 'white',
    // Optional for some shadow effect
  });
 


const Banner = () => {
  return (
    <>
    
    <Bannerly>
    <Container>
    <Typography
      variant="h2"
      style={{
        display:"flex",
        
        flexDirection:"row",
        alignContent:"center",
        justifyContent:"center",
        fontWeight:"bold",
        marginBottom:5,
        fontFamily:"Montserrat",
      }}
      >
        CryptoTracker
      </Typography>
      <Typography
      variant="subtitle2"
      style={{
        color:'red',
        marginTop:'2px',
        height:'40%',
        textTransform:"capitalize",
        fontFamily:"Montserrat",
        alignContent:"center",
        justifyContent:"center",
        display:"flex",
        flexDirection:"row",
      }}
      >
        Get Information about Your WatchList In Ease
      </Typography>
      <Carousel/>
      </Container>
    </Bannerly>
   
    </>
  )
}

export default Banner
