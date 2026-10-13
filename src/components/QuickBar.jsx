import React from 'react';
import Icon from './Icon';

export default function QuickBar() {
  return (
    <div className="quick-bar" role="region" aria-label="Quick contact">
      <a href="tel:+919426040220" className="btn btn-outline" data-track="quickbar">
        <Icon name="i-phone" /> Call
      </a>
      <a
        href="https://wa.me/919426040220?text=Hello%20Uma%20Farm%2C%20I%20would%20like%20a%20quote%20for%20sweet%20mosambi."
        className="btn btn-wa"
        target="_blank"
        rel="noopener noreferrer"
        data-track="quickbar"
      >
        <Icon name="i-chat" /> Get a quote on WhatsApp
      </a>
    </div>
  );
}
