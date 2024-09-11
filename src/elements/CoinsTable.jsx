import { Container, createTheme, LinearProgress, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CoinList } from "../config/api";
import { CryptoState } from "../CryptoContext.jsx";

// Function to format numbers with commas
 export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CoinsTable = () => {
  const { currency } = CryptoState();
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [coins, setCoins] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const coinsPerPage = 25;

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(CoinList(currency));
      setCoins(data);
      setSearchResults(data); // Set initial search results to all fetched coins
    } catch (error) {
      console.error("Error fetching coins", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleSearch = (event, value) => {
    if (value) {
      const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(value.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredCoins);
    } else {
      setSearchResults(coins); // Reset search results if input is cleared
    }
  };

  // Slicing the coins to show only 25 per page
  const displayCoins = searchResults.slice((page - 1) * coinsPerPage, page * coinsPerPage);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h4" style={{ margin: 18, fontFamily: "Montserrat" }}>
          CryptoCurrency Prices
        </Typography>

        {/* Search */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
          <Autocomplete
            freeSolo
            disableClearable
            options={searchResults.map((coin) => coin.name)}
            onInputChange={handleSearch}
            renderInput={(params) => <TextField {...params} label="Search anything" variant="outlined" />}
            style={{ width: 300 }}
          />
        </div>

        {/* Table Container */}
        <TableContainer>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table>
              <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      key={head}
                      style={{ color: "black", fontWeight: "700", fontFamily: "sans-serif" }}
                      align={head === "Coin" ? "left" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {displayCoins.map((row) => {
                  const profit = row.price_change_percentage_24h > 0;
                  return (
                    <TableRow
                      onClick={() => navigate(`/coins/${row.id}`)}
                      key={row.name}
                      style={{ cursor: "pointer" }}
                    >
                      <TableCell component="th" scope="row">
                        <img src={row?.image} alt={row.name} height="50" style={{ marginRight: 10 }} />
                        {row.name}
                      </TableCell>
                      <TableCell align="right">
                        {currency} {row.current_price.toFixed(2)}
                      </TableCell>
                      <TableCell align="right" style={{ color: profit ? "green" : "red" }}>
                        {profit && "+"}{row.price_change_percentage_24h.toFixed(2)}%
                      </TableCell>
                      <TableCell align="right">
                        {currency} {numberWithCommas(row.market_cap)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        {/* Pagination */}
        <Stack spacing={2} style={{ marginTop: 20, display: "flex", alignItems: "center" }}>
          <Pagination
            count={Math.ceil(searchResults.length / coinsPerPage)}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
