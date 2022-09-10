import React from 'react';
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
import ScrollToTop from 'react-scroll-to-top';

function App() {
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
        </Routes>
        <Footer />
      </BrowserRouter>
      <ScrollToTop smooth />
    </div>
  );
}

export default App;
