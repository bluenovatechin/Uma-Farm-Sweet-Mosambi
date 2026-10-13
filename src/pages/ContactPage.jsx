import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import InquiryForm from '../components/InquiryForm';

export default function ContactPage() {
  return (
    <>
      <Seo path="/contact/" />
      <main id="main">
        <nav className="breadcrumb wrap" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">Contact</span>
            </li>
          </ol>
        </nav>

        <section className="wrap page-head">
          <span className="eyebrow">Contact</span>
          <h1>Contact Uma Farm</h1>
          <p className="lede">
            Tell us how much mosambi you need and where. We reply with the rate and availability.
          </p>
        </section>

        <section className="section section-tight">
          <div className="wrap contact-grid">
            <div>
              <h2 className="visually-hidden">Contact details</h2>
              <ul className="contact-list">
                <li>
                  <a href="tel:+919426040220" data-track="contact">
                    <span className="ci">
                      <Icon name="i-phone" />
                    </span>
                    <span>
                      <small>Call or WhatsApp</small>
                      <b>+91 94260 40220</b>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/2VBfWCgWzmzpPiWw8" target="_blank" rel="noopener noreferrer">
                    <span className="ci">
                      <Icon name="i-pin" />
                    </span>
                    <span>
                      <small>Farm address</small>
                      <b>Adalpura Kampa, Dhansura, Aravalli, Gujarat 383310, India</b>
                    </span>
                  </a>
                </li>
                <li>
                  <div>
                    <span className="ci">
                      <Icon name="i-clock" />
                    </span>
                    <span>
                      <small>Farm hours</small>
                      <b>Every day, 6:00 AM to 7:00 PM</b>
                    </span>
                  </div>
                </li>
              </ul>
              <div className="socials">
                <a
                  href="https://www.instagram.com/uma_farm_sweet_mosambi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="i-insta" /> Instagram
                </a>
                <a
                  href="https://www.facebook.com/share/1DopFHcSrP/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="i-fb" /> Facebook
                </a>
              </div>
            </div>

            <InquiryForm />
          </div>
        </section>
      </main>
    </>
  );
}
