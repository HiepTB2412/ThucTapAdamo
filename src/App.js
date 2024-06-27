import React from 'react';
import './App.css';
import { AppProvider } from './Context/AppContext';
import CardWeather from './components/CardWeather';
import CardWeatherHour from './components/CardWeatherHour';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <AppProvider> {/* Ensure AppProvider wraps around the context provider */}
        <div className='weather-container'>
          <div className='header' style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
            <Header />
          </div>
          <div className='weather-content' style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
            <CardWeather />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', flexWrap: 'wrap' }}>
            <CardWeatherHour />
          </div>
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
