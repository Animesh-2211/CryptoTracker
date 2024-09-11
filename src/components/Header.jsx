import React from 'react';

import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';



const TextStyle = styled('div')({
  flex:1,
  color:"gold",
  fontFamily:"Montserrat",
  fontWeight:"bold",
  cursor:"pointer",
});


const Header = () => {
     
  const darkTheme=createTheme({
    palette:{
      mode:'dark',
    },
  })
    const{currency,setCurrency}=CryptoState()
    const navigate=useNavigate();
    return (
      <ThemeProvider theme={darkTheme}>
    <div>
      <AppBar position="static">
       <Container>
        <Toolbar>
          <TextStyle>
          <Typography
          onClick={()=>navigate("/")}>CryptoTracker</Typography>
          </TextStyle>
          <Select variant='outlined'
          defaultValue="USD"
          sx={{
            width: 100,
            height:40,
            marginRight:15,
          }}
          value={currency}
          onChange={(e)=>setCurrency(e.target.value)}>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
       </Container>
      </AppBar>
        
      
    </div>
    </ThemeProvider>
  )
}

export default Header
