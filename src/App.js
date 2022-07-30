import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import BlogPage from './Pages/Blogs';
import DesertsPage from './Pages/Deserts';
import DrinksPage from './Pages/Drinks';
import RecepiesPage from './Pages/Recepies';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/deserts" element={<DesertsPage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/recepies" element={<RecepiesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
