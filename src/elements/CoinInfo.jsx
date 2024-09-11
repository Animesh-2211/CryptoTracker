import {
  Box,
  CircularProgress,
  createTheme,
  ThemeProvider
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { HistoricalChart } from "../config/api";
import { chartDays } from "../config/data";
import { CryptoState } from "../CryptoContext";
import SelectButton from "./SelectButton";

// Import Chart.js components
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

// Create a theme for the application
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "dark", // Use mode instead of type for theme
  },
});

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState(); // State for storing historical data
  const [days, setDays] = useState(1); // State for the selected time period
  const { currency } = CryptoState(); // Fetching currency from context
  const [flag, setFlag] = useState(false); // Flag to indicate data loading state

  // Fetch historical data from API
  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setFlag(true);
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column", // Ensure vertical stacking
          alignItems: "center",
          justifyContent: "center",
          padding: 10, // Adjust padding for better spacing
          '@media (max-width: 960px)': {
            width: "100%",
            padding: 10,
          },
        }}
      >
        {!historicData || !flag ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            {/* Chart */}
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price (Past ${days} Days) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
              style={{ marginBottom: 20 }} // Space below the chart
            />
            
            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row", // Horizontal alignment for buttons
                justifyContent: "center",
                width: "100%",
                gap: 2, // Add some gap between buttons
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {
                    setDays(day.value);
                    setFlag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </Box>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default CoinInfo;
