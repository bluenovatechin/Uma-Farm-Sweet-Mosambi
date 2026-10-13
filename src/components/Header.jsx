import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const menuBtnRef = useRef(null);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Click outside and escape key handling
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        menuBtnRef.current?.focus();
      }
    }

    function handleClickOutside(e) {
      if (isOpen && navRef.current && !navRef.current.contains(e.target) && !menuBtnRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about/', label: 'About' },
    { to: '/sweet-mosambi/', label: 'Our Mosambi' },
    { to: '/wholesale/', label: 'Wholesale' },
    { to: '/faq/', label: 'FAQ' },
    { to: '/contact/', label: 'Contact' }
  ];

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link to="/" className="brand" aria-label="Uma Farm Sweet Mosambi, home">
          <img src="/assets/images/uma-farm-logo-96.webp" alt="" width="44" height="44" />
          <span className="brand-name">
            Uma Farm<small>Sweet Mosambi</small>
          </span>
        </Link>

        <nav aria-label="Main" ref={navRef}>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          <a
            className="btn btn-wa btn-sm nav-cta"
            href="https://wa.me/919426040220?text=Hello%20Uma%20Farm%2C%20I%20would%20like%20a%20quote%20for%20sweet%20mosambi."
            target="_blank"
            rel="noopener noreferrer"
            data-track="header"
          >
            <Icon name="i-chat" /> Get a quote
          </a>
          <button
            className="menu-btn"
            id="menuBtn"
            ref={menuBtnRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls="navLinks"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name="i-menu" className="i-open" />
            <Icon name="i-x" className="i-close" />
          </button>
        </div>
      </div>
    </header>
  );
}
