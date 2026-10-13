import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import IconSprite from './components/IconSprite';
import CookieBanner from './components/CookieBanner';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SweetMosambiPage from './pages/SweetMosambiPage';
import WholesalePage from './pages/WholesalePage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <IconSprite />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sweet-mosambi/" element={<SweetMosambiPage />} />
        <Route path="/sweet-mosambi" element={<SweetMosambiPage />} />
        <Route path="/wholesale/" element={<WholesalePage />} />
        <Route path="/wholesale" element={<WholesalePage />} />
        <Route path="/faq/" element={<FaqPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact/" element={<ContactPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy/" element={<PrivacyPolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions/" element={<TermsAndConditionsPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/404.html" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  );
}
