import { styled } from '@mui/system'; // Import from Material-UI system
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CoinPage from './components/CoinPage';
import Header from './components/Header';
import Homepage from './components/Homepage';

// Define a styled component for App
const AppWrapper = styled('div')({
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh",
});

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} />
          {/* <Route path="/landing" element={<Landing/>}/>*/}
        </Routes> 
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
