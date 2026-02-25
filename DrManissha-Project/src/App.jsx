import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from './Nav/Nav';
import Home from './Home/Home';
import About from './About/About';
import Ebook from './Ebook/Ebook';
import Products from './Products/Products';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';
import './App.css';

const SinglePageLayout = () => {
  const location = useLocation();

  useEffect(() => {
    let sectionId = location.pathname.substring(1);
    if (!sectionId || sectionId === 'home') sectionId = 'home';

    // Wait for render
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  }, [location.pathname]);

  return (
    <>
      <Home />
      <About />
      <Ebook />
      <Products />
      <Gallery />
    </>
  );
};

function App() {
  return (
    <div className="app-container">
      <Nav />
      <main>
        <Routes>
          <Route path="*" element={<SinglePageLayout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;