import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import BlogPage from './Pages/Blogs';
import DesertsPage from './Pages/Deserts';
import DrinksPage from './Pages/Drinks';
import RecepiesPage from './Pages/Recepies';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import About from './Pages/About';
import axios from 'axios';

function App() {
  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://lumtest.com/myip.json');
    console.log(res.data.country);
    console.log(res.data.geo);
    console.log(res.data.ip);
    setIP(res.data.ip);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/deserts" element={<DesertsPage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/recepies" element={<RecepiesPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
