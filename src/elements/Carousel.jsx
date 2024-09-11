import { styled } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import { TrendingCoins } from "../../src/config/api.js"
import { CryptoState } from "../CryptoContext.jsx"


const Car=styled('div')({
    height:"50%",
    display:"flex",
    alignItems:"center",
    flexDirection: "column",
})


const Carousel = () => {

    const{currency}=CryptoState();
    const[trending,setTrending]=useState([]);
    const fetchTrendingCoins=async()=>{
        const {data} =await axios.get(TrendingCoins(currency))

        setTrending(data);
    }
       console.log(trending);

    useEffect(()=>{
        fetchTrendingCoins();
    },[currency])

    const items=trending.map((coin)=>{
        let profit= coin.price_change_percentage_24h>=0;
        return(
            <Link to={`/coins/${coin.id}`} key={coin.id} >
            <Car>
                
                <img src={coin?.image}
                alt={coin.name}
                height="80"
                style={{marginBottom:10}}
                />
                <span style={{ fontSize: 22, fontWeight: 500 }}>
                    {coin?.symbol}
                    &nbsp;
                    <span style={{ color: profit ? "green" : "red", fontWeight: 500 }}>
                      {profit && "+"}{coin?.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                </span>
            </Car>
            </Link>
        )
    })

    const responsive={
        0:{
            items:2,
        },
        512:{
            items:4,
        },
    };
  return (
    <div>
        
      <Car>
       <AliceCarousel

        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
       />

      </Car>
    </div>
  )
}

export default Carousel
