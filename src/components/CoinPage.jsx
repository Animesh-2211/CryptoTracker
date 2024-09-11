import { LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
import CoinInfo from "../elements/CoinInfo";
import { numberWithCommas } from "../elements/CoinsTable";

const CoinPage = () => {
  const { id } = useParams(); // Extracting coin ID from URL params
  const [coin, setCoin] = useState(); // State to store coin data
  const { currency, symbol } = CryptoState(); // Fetching currency and symbol from context
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Fetch coin data using Axios
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data); // Setting the fetched coin data
  };

  useEffect(() => {
    fetchCoin(); // Fetching coin data when component mounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If coin data hasn't loaded yet, show a loading indicator
  if (!coin) return <LinearProgress sx={{ backgroundColor: "gold" }} />;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 25 }}>
      {/* Coin Image */}
      <img
        src={coin?.image.large}
        alt={coin?.name}
        height="200"
        style={{ marginBottom: 20 }}
      />

      {/* Coin Name */}
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2, fontFamily: "Montserrat" }}>
        {coin?.name}
      </Typography>

      {/* Coin Description */}
      <Typography variant="subtitle1" sx={{ width: "100%", fontFamily: "Montserrat", padding: 2, paddingBottom: 1, paddingTop: 0, textAlign: "justify" }}>
        {ReactHtmlParser(coin?.description.en.split(". ")[0])}
      </Typography>

      {/* Market Data */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        width: "100%",
        // marginBottom: 5
      }}>
        {/* Rank */}
        <span style={{ display: "flex", marginBottom: 10 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
            Rank:
          </Typography>
          &nbsp; &nbsp;
          <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
            {numberWithCommas(coin?.market_cap_rank)}
          </Typography>
        </span>

        {/* Current Price */}
        <span style={{ display: "flex", marginBottom: 10 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
            Current Price:
          </Typography>
          &nbsp; &nbsp;
          <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
            {symbol}{" "}
            {numberWithCommas(
              coin?.market_data.current_price[currency.toLowerCase()]
            )}
          </Typography>
        </span>

        {/* Market Cap */}
        <span style={{ display: "flex" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
            Market Cap:
          </Typography>
          &nbsp; &nbsp;
          <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
            {symbol}{" "}
            {numberWithCommas(
              coin?.market_data.market_cap[currency.toLowerCase()]
                .toString()
                .slice(0, -6)
            )}
            M
          </Typography>
        </span>
      </div>

      {/* Coin Info Component */}
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
