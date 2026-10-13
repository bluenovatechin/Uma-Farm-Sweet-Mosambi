import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import CtaBand from '../components/CtaBand';
import QuickBar from '../components/QuickBar';

export default function WholesalePage() {
  return (
    <>
      <Seo path="/wholesale/" />
      <main id="main">
        <nav className="breadcrumb wrap" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">Wholesale</span>
            </li>
          </ol>
        </nav>

        <section className="wrap page-head">
          <span className="eyebrow">Wholesale</span>
          <h1>Wholesale mosambi, direct from the farm</h1>
          <p className="lede">
            We sell sweet mosambi in bulk to mandi traders, juice businesses and fruit sellers in Gujarat. Buying
            from the farm means fresher fruit and no middleman.
          </p>
        </section>

        <section className="section section-tight">
          <div className="wrap">
            <div className="cards c3">
              <article className="card" id="mandi">
                <span className="card-icon">
                  <Icon name="i-truck" />
                </span>
                <span className="k">APMC mandis</span>
                <h2 className="h3-like">Mandi traders and agents</h2>
                <p>
                  Crated consignments and full loads for APMC markets across Gujarat, including Ahmedabad,
                  Himmatnagar, Modasa, Vadodara and Surat.
                </p>
              </article>
              <article className="card" id="juice">
                <span className="card-icon">
                  <Icon name="i-glass" />
                </span>
                <span className="k">Businesses</span>
                <h2 className="h3-like">Juice bars and fruit sellers</h2>
                <p>Regular weekly supply for businesses that need steady sweetness and juice yield.</p>
                <ul>
                  <li>
                    <Icon name="i-check" /> Juice bars and juice centres
                  </li>
                  <li>
                    <Icon name="i-check" /> Fruit shops and street vendors
                  </li>
                  <li>
                    <Icon name="i-check" /> Produce aggregators
                  </li>
                </ul>
              </article>
              <article className="card dark" id="pickup">
                <span className="card-icon">
                  <Icon name="i-home" />
                </span>
                <span className="k">Farm pickup</span>
                <h2 className="h3-like">Buy at the farm</h2>
                <p>
                  Come to Adalpura Kampa, Dhansura, check the fruit yourself and load crates on site. Open every
                  day, 6:00 AM to 7:00 PM.
                </p>
                <a
                  className="text-link"
                  href="https://maps.app.goo.gl/2VBfWCgWzmzpPiWw8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions <Icon name="i-arrow" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section bg-alt" aria-labelledby="price-title">
          <div className="wrap split">
            <div className="prose">
              <span className="eyebrow">Pricing</span>
              <h2 id="price-title">How our price is set</h2>
              <p>
                Mosambi prices change with the market, so we do not publish a fixed price list. We quote per crate
                or per kg, based on:
              </p>
              <ul className="checklist">
                <li>
                  <span className="tick">
                    <Icon name="i-check" />
                  </span>
                  Fruit grade and size
                </li>
                <li>
                  <span className="tick">
                    <Icon name="i-check" />
                  </span>
                  The quantity you need
                </li>
                <li>
                  <span className="tick">
                    <Icon name="i-check" />
                  </span>
                  The current APMC mandi rate in Gujarat
                </li>
                <li>
                  <span className="tick">
                    <Icon name="i-check" />
                  </span>
                  Farm pickup or loading for dispatch
                </li>
              </ul>
              <p>Send us your requirement on WhatsApp and we will reply with today's rate.</p>
            </div>
            <div>
              <h2 className="visually-hidden">How to order</h2>
              <ol className="order-steps one-col">
                <li>
                  <h3>Send your requirement</h3>
                  <p>
                    Quantity, your city and buyer type, on WhatsApp or through the{' '}
                    <Link to="/contact/">inquiry form</Link>.
                  </p>
                </li>
                <li>
                  <h3>Get today's rate</h3>
                  <p>We confirm the rate, available grade and dates.</p>
                </li>
                <li>
                  <h3>Pickup or dispatch</h3>
                  <p>Collect from the farm, or we load your vehicle. Payment terms are agreed before loading.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="pack-title">
          <div className="wrap split reverse">
            <figure className="photo">
              <picture>
                <source
                  type="image/avif"
                  srcSet="/assets/images/mosambi-tree-with-fruit-480.avif 480w, /assets/images/mosambi-tree-with-fruit-960.avif 960w"
                  sizes="(min-width: 900px) 34rem, 92vw"
                />
                <source
                  type="image/webp"
                  srcSet="/assets/images/mosambi-tree-with-fruit-480.webp 480w, /assets/images/mosambi-tree-with-fruit-960.webp 960w"
                  sizes="(min-width: 900px) 34rem, 92vw"
                />
                <img
                  src="/assets/images/mosambi-tree-with-fruit-960.webp"
                  alt="A full sweet lime (mosambi) tree with many fruits at Uma Farm in Dhansura, Gujarat"
                  width="960"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption>Mosambi ready for picking at Uma Farm</figcaption>
            </figure>
            <div className="prose">
              <span className="eyebrow">Packing and transport</span>
              <h2 id="pack-title">Picked, sorted and packed at the farm</h2>
              <p>
                Fruit is picked by hand in the early morning, sorted by size and peel quality, and packed in
                ventilated crates.
              </p>
              <p>
                For road transport, please use a vehicle with good air flow so the fruit stays cool and fresh until
                it reaches your market.
              </p>
            </div>
          </div>
        </section>
      </main>
      <CtaBand />
      <QuickBar />
    </>
  );
}
