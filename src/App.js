import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GeneratorPage from './pages/GeneratorPage';
import FeaturePage from './pages/FeaturePage';
import SupportPage from './pages/SupportPage';

const theme = createTheme({
  typography: {
      fontFamily: 'Montserrat',
      textTransform: 'none',
  },
});


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/generator' element={<GeneratorPage />} />
            <Route path='/feature' element={<FeaturePage />} />
            <Route path='/support' element={<SupportPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
