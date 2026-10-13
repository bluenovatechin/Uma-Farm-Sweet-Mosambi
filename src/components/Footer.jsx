import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link to="/" className="brand" aria-label="Uma Farm Sweet Mosambi, home">
              <img src="/assets/images/uma-farm-logo-96.webp" alt="" width="44" height="44" loading="lazy" />
              <span className="brand-name">
                Uma Farm<small>Sweet Mosambi</small>
              </span>
            </Link>
            <p>Tree-ripened sweet mosambi from our family orchard, supplied wholesale across Gujarat.</p>
            <address>
              Adalpura Kampa, Dhansura,<br />
              Aravalli, Gujarat 383310
            </address>
          </div>
          <div>
            <h2>Farm</h2>
            <ul className="foot-links">
              <li><Link to="/about/">About the farm</Link></li>
              <li><Link to="/sweet-mosambi/">Our mosambi</Link></li>
              <li><Link to="/wholesale/">Wholesale supply</Link></li>
              <li><Link to="/faq/">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul className="foot-links">
              <li><a href="tel:+919426040220">+91 94260 40220</a></li>
              <li>
                <a
                  href="https://wa.me/919426040220?text=Hello%20Uma%20Farm%2C%20I%20would%20like%20a%20quote%20for%20sweet%20mosambi."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="footer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/2VBfWCgWzmzpPiWw8" target="_blank" rel="noopener noreferrer">
                  Directions
                </a>
              </li>
              <li><Link to="/contact/">Contact page</Link></li>
            </ul>
          </div>
          <div>
            <h2>Follow</h2>
            <ul className="foot-links">
              <li>
                <a href="https://www.instagram.com/uma_farm_sweet_mosambi/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/1DopFHcSrP/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/2VBfWCgWzmzpPiWw8" target="_blank" rel="noopener noreferrer">
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; <span data-year>{currentYear}</span> Uma Farm Sweet Mosambi. All rights reserved.</span>
          <span>
            <Link to="/privacy-policy/">Privacy Policy</Link> &middot; <Link to="/terms-and-conditions/">Terms &amp; Conditions</Link>
          </span>
          <span>
            Created by <a href="https://bluenovatech.in/" target="_blank" rel="noopener noreferrer">BlueNova Tech PVT Limited</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
