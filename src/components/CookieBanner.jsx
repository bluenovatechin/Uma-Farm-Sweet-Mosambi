import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GA_MEASUREMENT_ID = ''; // Set GA4 Measurement ID when available (e.g. "G-XXXXXXXXXX")
const CONSENT_KEY = 'uma_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    try {
      const consent = localStorage.getItem(CONSENT_KEY);
      if (consent === 'accepted') {
        loadAnalytics();
      } else if (!consent) {
        setVisible(true);
      }
    } catch {
      // Ignore localStorage errors
    }

    function handleOpenSettings() {
      if (GA_MEASUREMENT_ID) {
        setVisible(true);
      }
    }

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  function loadAnalytics() {
    if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || window.gtag) return;
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function handleAccept() {
    try {
      localStorage.setItem(CONSENT_KEY, 'accepted');
    } catch {}
    setVisible(false);
    loadAnalytics();
  }

  function handleDecline() {
    try {
      localStorage.setItem(CONSENT_KEY, 'declined');
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" id="cookieBanner" role="region" aria-label="Cookie consent">
      <p>
        We use Google Analytics cookies to see how many people visit and which pages help them. Allow analytics? Read our{' '}
        <Link to="/privacy-policy/">Privacy Policy</Link>.
      </p>
      <div className="cookie-actions">
        <button className="btn btn-primary btn-sm" type="button" id="cookieAccept" onClick={handleAccept}>
          Allow analytics
        </button>
        <button className="btn btn-outline btn-sm" type="button" id="cookieDecline" onClick={handleDecline}>
          Decline
        </button>
      </div>
    </div>
  );
}
