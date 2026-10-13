import React from 'react';
import Icon from './Icon';

export default function CtaBand({
  title = 'Need sweet mosambi in bulk?',
  description = "Tell us the quantity and your city on WhatsApp. We reply with today's rate and availability.",
  buttonText = 'Get a quote on WhatsApp',
  track = 'cta-band'
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="wrap cta-inner">
        <div>
          <h2 id="cta-title">{title}</h2>
          <p>{description}</p>
        </div>
        <a
          className="btn btn-wa"
          href="https://wa.me/919426040220?text=Hello%20Uma%20Farm%2C%20I%20would%20like%20a%20quote%20for%20sweet%20mosambi."
          target="_blank"
          rel="noopener noreferrer"
          data-track={track}
        >
          <Icon name="i-chat" /> {buttonText}
        </a>
      </div>
    </section>
  );
}
