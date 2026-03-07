import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from './Nav/Nav';
import Home from './Home/Home';
import About from './About/About';
import Ebook from './Ebook/Ebook';
import Products from './Products/Products';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';
import PaymentSuccess from './paymentPopups/PaymentSuccess';
import PaymentCancel from './paymentPopups/PaymentCancel';
import './App.css';

const SinglePageLayout = () => {
  const location = useLocation();

  useEffect(() => {
    let sectionId = location.pathname.substring(1);
    // Don't scroll to home automatically if we're on a payment popup redirect
    const params = new URLSearchParams(window.location.search);
    const hasPaymentParam = params.get('success') || params.get('cancel');

    if (!sectionId && !hasPaymentParam) sectionId = 'home';
    if (!sectionId && hasPaymentParam) return; // Stay where we are if showing a popup after redirect

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
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);

  useEffect(() => {
    // Check URL for payment parameters
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      setShowSuccessPopup(true);
    } else if (params.get('cancel') === 'true') {
      setShowCancelPopup(true);
    }

    // Clean up URL without refreshing the page
    if (params.get('success') || params.get('cancel')) {
      const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.replaceState({ path: newUrl }, '', newUrl);
    }
  }, []);

  return (
    <div className="app-container">
      <Nav />
      <main>
        {showSuccessPopup && <PaymentSuccess setPaymentActive={setShowSuccessPopup} />}
        {showCancelPopup && <PaymentCancel setPaymentActive={setShowCancelPopup} />}
        <Routes>
          <Route path="*" element={<SinglePageLayout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;