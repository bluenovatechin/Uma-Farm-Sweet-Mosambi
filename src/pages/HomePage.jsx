import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import CtaBand from '../components/CtaBand';
import FaqItem from '../components/FaqItem';

export default function HomePage() {
  return (
    <>
      <Seo path="/" />
      <main id="main">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="hero-kicker">
                <Icon name="i-pin" /> Adalpura Kampa, Dhansura, Gujarat
              </span>
              <h1>
                Fresh sweet mosambi, direct from our farm in <span>Dhansura</span>
              </h1>
              <p className="lede">
                Uma Farm grows sweet lime (mosambi) at Adalpura Kampa near Dhansura. The fruit ripens on the
                tree, is picked by hand in the early morning and goes straight to mandis, juice bars and fruit
                sellers across Gujarat.
              </p>
              <div className="hero-actions">
                <a
                  className="btn btn-wa"
                  href="https://wa.me/919426040220?text=Hello%20Uma%20Farm%2C%20I%20would%20like%20a%20quote%20for%20sweet%20mosambi."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="hero"
                >
                  <Icon name="i-chat" /> Get a quote on WhatsApp
                </a>
                <Link className="text-link" to="/sweet-mosambi/">
                  See our mosambi <Icon name="i-arrow" />
                </Link>
              </div>
              <ul className="hero-points">
                <li>
                  <Icon name="i-check" /> Ripened on the tree
                </li>
                <li>
                  <Icon name="i-check" /> No carbide
                </li>
                <li>
                  <Icon name="i-check" /> Wholesale and farm pickup
                </li>
              </ul>
            </div>
            <figure className="hero-figure">
              <picture>
                <source
                  type="image/avif"
                  srcSet="/assets/images/sweet-mosambi-on-tree-uma-farm-480.avif 480w, /assets/images/sweet-mosambi-on-tree-uma-farm-800.avif 800w, /assets/images/sweet-mosambi-on-tree-uma-farm-1200.avif 1200w"
                  sizes="(min-width: 900px) 31rem, 92vw"
                />
                <source
                  type="image/webp"
                  srcSet="/assets/images/sweet-mosambi-on-tree-uma-farm-480.webp 480w, /assets/images/sweet-mosambi-on-tree-uma-farm-800.webp 800w, /assets/images/sweet-mosambi-on-tree-uma-farm-1200.webp 1200w"
                  sizes="(min-width: 900px) 31rem, 92vw"
                />
                <img
                  src="/assets/images/sweet-mosambi-on-tree-uma-farm-1200.webp"
                  alt="Four green sweet mosambi fruits hanging on a branch at Uma Farm, Adalpura Kampa, Dhansura, Gujarat"
                  width="1200"
                  height="1600"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
              <figcaption>
                <Icon name="i-pin" /> Mosambi on one of our trees at Adalpura
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="strip" aria-label="Farm highlights">
          <div className="wrap">
            <ul>
              <li>
                <span className="strip-icon">
                  <Icon name="i-leaf" />
                </span>
                <div>
                  <b>Ripened on the tree</b>
                  <span>No carbide, no chemicals</span>
                </div>
              </li>
              <li>
                <span className="strip-icon">
                  <Icon name="i-drop" />
                </span>
                <div>
                  <b>Drip irrigation</b>
                  <span>Water at every root</span>
                </div>
              </li>
              <li>
                <span className="strip-icon">
                  <Icon name="i-sun" />
                </span>
                <div>
                  <b>Picked at dawn</b>
                  <span>By hand, with clean tools</span>
                </div>
              </li>
              <li>
                <span className="strip-icon">
                  <Icon name="i-truck" />
                </span>
                <div>
                  <b>Wholesale supply</b>
                  <span>Across Gujarat</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" aria-labelledby="about-title">
          <div className="wrap split">
            <figure className="photo">
              <picture>
                <source
                  type="image/avif"
                  srcSet="/assets/images/mosambi-orchard-drip-irrigation-640.avif 640w, /assets/images/mosambi-orchard-drip-irrigation-1040.avif 1040w"
                  sizes="(min-width: 900px) 34rem, 92vw"
                />
                <source
                  type="image/webp"
                  srcSet="/assets/images/mosambi-orchard-drip-irrigation-640.webp 640w, /assets/images/mosambi-orchard-drip-irrigation-1040.webp 1040w"
                  sizes="(min-width: 900px) 34rem, 92vw"
                />
                <img
                  src="/assets/images/mosambi-orchard-drip-irrigation-1040.webp"
                  alt="Rows of mosambi trees loaded with fruit and a drip irrigation line on the ground at Uma Farm"
                  width="1040"
                  height="780"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption>Our orchard rows with drip lines, Adalpura Kampa, Dhansura</figcaption>
            </figure>
            <div className="prose">
              <span className="eyebrow">About the farm</span>
              <h2 id="about-title">A family orchard that grows only mosambi</h2>
              <p>
                Our farm is at Adalpura in Dhansura taluka, Aravalli district. We grow one crop, sweet mosambi,
                and look after every tree ourselves.
              </p>
              <p>
                Trees are planted 20 by 20 feet apart so each one gets full sun and air. Every tree is watered
                by drip line, pruned each season and harvested by hand.
              </p>
              <p>
                <Link className="text-link" to="/about/">
                  More about the farm <Icon name="i-arrow" />
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-alt" aria-labelledby="fruit-title">
          <div className="wrap">
            <div className="section-head center">
              <span className="eyebrow">Our mosambi</span>
              <h2 id="fruit-title">Sweet, juicy and thin-skinned</h2>
              <p className="lede">What buyers get from Uma Farm mosambi.</p>
            </div>
            <div className="cards c4">
              <article className="card">
                <span className="card-icon gold">
                  <Icon name="i-slice" />
                </span>
                <h3>Naturally sweet</h3>
                <p>Low acidity and a clean, sweet taste with no bitter aftertaste.</p>
              </article>
              <article className="card">
                <span className="card-icon">
                  <Icon name="i-leaf" />
                </span>
                <h3>Thin, glossy peel</h3>
                <p>The peel turns from deep green to golden as the fruit ripens on the tree.</p>
              </article>
              <article className="card">
                <span className="card-icon gold">
                  <Icon name="i-glass" />
                </span>
                <h3>More juice per kg</h3>
                <p>Dense, juicy pulp, which is why juice bars ask for it.</p>
              </article>
              <article className="card">
                <span className="card-icon">
                  <Icon name="i-heart" />
                </span>
                <h3>Source of vitamin C</h3>
                <p>Mosambi is a natural source of vitamin C and potassium.</p>
              </article>
            </div>
            <p className="section-more">
              <Link className="text-link" to="/sweet-mosambi/">
                See photos and fruit details <Icon name="i-arrow" />
              </Link>
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="buyers-title">
          <div className="wrap">
            <div className="section-head center">
              <span className="eyebrow">Wholesale</span>
              <h2 id="buyers-title">Who we supply</h2>
              <p className="lede">From full truck loads to a few crates a week.</p>
            </div>
            <div className="cards c3">
              <Link className="card card-link" to="/wholesale/">
                <span className="card-icon">
                  <Icon name="i-truck" />
                </span>
                <span className="k">APMC mandis</span>
                <h3>Mandi traders and agents</h3>
                <p>Crated loads for mandis in Ahmedabad, Himmatnagar, Modasa, Vadodara and Surat.</p>
                <span className="text-link">
                  Mandi supply <Icon name="i-arrow" />
                </span>
              </Link>
              <Link className="card card-link" to="/wholesale/">
                <span className="card-icon">
                  <Icon name="i-glass" />
                </span>
                <span className="k">Juice bars and shops</span>
                <h3>Regular weekly supply</h3>
                <p>Steady sweetness and juice yield for juice bars and fruit sellers.</p>
                <span className="text-link">
                  Business supply <Icon name="i-arrow" />
                </span>
              </Link>
              <Link className="card card-link" to="/wholesale/">
                <span className="card-icon">
                  <Icon name="i-home" />
                </span>
                <span className="k">Farm pickup</span>
                <h3>Buy at the farm</h3>
                <p>Come to Adalpura, check the fruit yourself and load crates on site.</p>
                <span className="text-link">
                  Farm pickup <Icon name="i-arrow" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section bg-alt" aria-labelledby="order-title">
          <div className="wrap">
            <div className="section-head center">
              <span className="eyebrow">How to order</span>
              <h2 id="order-title">Ordering takes one message</h2>
            </div>
            <ol className="order-steps">
              <li>
                <h3>Send your requirement</h3>
                <p>Message us the quantity and your city on WhatsApp.</p>
              </li>
              <li>
                <h3>Get today's rate</h3>
                <p>We quote per crate or per kg based on grade and the current mandi rate.</p>
              </li>
              <li>
                <h3>Pickup or dispatch</h3>
                <p>Collect from the farm, or we load your vehicle for delivery.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="section" aria-labelledby="reviews-title">
          <div className="wrap">
            <div className="reviews-box">
              <div>
                <span className="eyebrow">Google reviews</span>
                <h2 id="reviews-title">Read what buyers say about us on Google</h2>
                <p>
                  All our reviews are on our Google Maps listing. If you have bought from us, a short review helps
                  other buyers find the farm.
                </p>
              </div>
              <div className="reviews-actions">
                <a
                  className="btn btn-outline"
                  href="https://maps.app.goo.gl/2VBfWCgWzmzpPiWw8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="i-star" /> Read reviews on Google
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-alt" aria-labelledby="faq-title">
          <div className="wrap narrow">
            <div className="section-head center">
              <span className="eyebrow">FAQ</span>
              <h2 id="faq-title">Common questions</h2>
            </div>
            <div className="faq-list">
              <FaqItem question="Where is Uma Farm located?">
                <p>
                  Uma Farm is at <strong>Adalpura Kampa, Dhansura, Aravalli district, Gujarat 383310</strong>.
                  Use our{' '}
                  <a href="https://maps.app.goo.gl/2VBfWCgWzmzpPiWw8" target="_blank" rel="noopener noreferrer">
                    Google Maps location
                  </a>{' '}
                  for directions to the farm.
                </p>
              </FaqItem>
              <FaqItem question="How is the wholesale price of mosambi decided?">
                <p>
                  We quote per crate or per kg. The rate depends on fruit grade and size, the quantity and the
                  current APMC mandi rate in Gujarat, so it changes with the market. Ask us on WhatsApp for today's
                  rate.
                </p>
              </FaqItem>
              <FaqItem question="Is your mosambi naturally ripened?">
                <p>
                  Yes. The fruit ripens on the tree. We do not use calcium carbide or any chemical to ripen or
                  colour the fruit.
                </p>
              </FaqItem>
            </div>
            <p className="section-more">
              <Link className="text-link" to="/faq/">
                All questions and answers <Icon name="i-arrow" />
              </Link>
            </p>
          </div>
        </section>
      </main>
      <CtaBand />
    </>
  );
}
