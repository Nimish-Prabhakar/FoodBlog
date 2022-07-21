import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import BlogPage from './Pages/Blogs';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
