import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function TermsAndConditionsPage() {
  return (
    <>
      <Seo path="/terms-and-conditions/" />
      <main id="main">
        <nav className="breadcrumb wrap" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">Terms and Conditions</span>
            </li>
          </ol>
        </nav>

        <section className="wrap narrow page-head">
          <span className="eyebrow">Legal</span>
          <h1>Terms and Conditions</h1>
          <div className="page-head-meta">
            <span>Effective: January 1, 2026</span>
            <span>Last updated: October 12, 2026</span>
          </div>
        </section>

        <section className="section section-tight">
          <div className="wrap narrow">
            <article className="legal">
              <p>
                These Terms and Conditions apply to the use of www.umafarm.com and to orders, quotes and farm
                pickups from Uma Farm Sweet Mosambi, Adalpura Kampa, Dhansura, Gujarat.
              </p>

              <h2>1. Harvest and availability</h2>
              <ul>
                <li>
                  Mosambi is a natural crop. Availability, size and quantity depend on the season and the weather.
                </li>
                <li>Quantities and sizes are confirmed for each harvest batch before the order is final.</li>
                <li>
                  Photos on this website are of our own trees and fruit. Natural fruit will vary in size, colour
                  and look.
                </li>
              </ul>

              <h2>2. Quotes and orders</h2>
              <ul>
                <li>
                  Prices are quoted per crate or per kg and depend on grade, quantity and the current APMC mandi
                  rate. A quote is valid only for the date given.
                </li>
                <li>
                  An order is confirmed only when we agree the quantity, rate, dates and payment terms with you
                  directly.
                </li>
                <li>Sending the website inquiry form does not create an order.</li>
              </ul>

              <h2>3. Farm pickup and transport</h2>
              <ul>
                <li>Buyers collecting from the farm may check the fruit during loading.</li>
                <li>Once fruit is loaded into the buyer's vehicle, responsibility for it passes to the buyer.</li>
                <li>Mosambi is perishable. For road transport, please use a well-ventilated vehicle.</li>
              </ul>

              <h2>4. Website content</h2>
              <p>
                All photos, text and the Uma Farm logo on this website belong to Uma Farm Sweet Mosambi. Please do
                not use our photos to sell other fruit.
              </p>

              <h2>5. Limitation of liability</h2>
              <p>
                We work to keep information on this website accurate, but prices and availability change. The
                website is provided for information. Order terms agreed with us directly take priority over
                anything on the website.
              </p>

              <h2>6. Governing law</h2>
              <p>
                These terms are governed by the laws of India. Any dispute is subject to the courts with
                jurisdiction over Dhansura, Aravalli district, Gujarat.
              </p>

              <h2>7. Contact</h2>
              <p>
                <strong>Uma Farm Sweet Mosambi</strong>
                <br />
                Adalpura Kampa, Dhansura, Aravalli, Gujarat 383310, India
                <br />
                Phone / WhatsApp: <a href="tel:+919426040220">+91 94260 40220</a>
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
