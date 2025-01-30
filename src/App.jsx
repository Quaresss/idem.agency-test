import React from 'react';
import AboutUs from './components/AboutUs';
import Map from "./components/Map"
import Features from './components/Features';
import "./styles/app.scss"

const App = () => {
  return (
    <>
      <AboutUs />
      <Map/>
      <Features/>
    </>
  );
};

export default App;