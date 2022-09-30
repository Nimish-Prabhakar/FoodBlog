import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Asia from './Pages/Asia';
import Africa from './Pages/Africa';
import Europe from './Pages/Europe';
import NorthAmerica from './Pages/NorthAmerica';
import SouthAmerica from './Pages/SouthAmerica';
import Home from './Pages/Home';
import SingleMealPage from './Pages/SingleMealPage';
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import AboutUs from './Pages/AboutUs';
import Error404 from './Pages/404Error';
import TermsCondition from './Pages/TermsCondition';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';

function App() {
  const [ip, setIP] = useState('');
  const [score, setScore] = useState(0);

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    getData();
  }, []);

  const getScore = async () => {
    const res = await axios.get(
      `https://karkhana-studio-backend.onrender.com/api/v1/ipscore?ip=${ip}`
    );
    setScore(res.data.fraud_score);
  };

  useEffect(() => {
    getScore();
  }, [ip]);

  useEffect(() => {
    const adsArea = document.getElementById('taboola-below-article-thumbnails');
    if (score > 40) {
      adsArea.style.pointerEvents = 'none';
    }
  }, [score]);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asia" element={<Asia />} />
          <Route path="/africa" element={<Africa />} />
          <Route path="/europe" element={<Europe />} />
          <Route path="/north-america" element={<NorthAmerica />} />
          <Route path="/south-america" element={<SouthAmerica />} />
          <Route path="/:continent/:meal" element={<SingleMealPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms-conditions" element={<TermsCondition />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer id="page-footer" />
      </BrowserRouter>
      <ScrollToTop smooth />
    </div>
  );
}

export default App;
