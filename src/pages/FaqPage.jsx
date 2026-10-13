import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import CtaBand from '../components/CtaBand';
import FaqItem from '../components/FaqItem';
import QuickBar from '../components/QuickBar';

export default function FaqPage() {
  return (
    <>
      <Seo path="/faq/" />
      <main id="main">
        <nav className="breadcrumb wrap" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">FAQ</span>
            </li>
          </ol>
        </nav>

        <section className="wrap narrow page-head">
          <span className="eyebrow">FAQ</span>
          <h1>Frequently asked questions</h1>
          <p className="lede">
            Answers to the questions buyers ask us most. If your question is not here, message us on WhatsApp.
          </p>
        </section>

        <section className="section section-tight">
          <div className="wrap narrow">
            <div className="faq-group">
              <h2>Location and visits</h2>
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
                <FaqItem question="Is Dhansura in Aravalli or Sabarkantha district?">
                  <p>
                    Dhansura taluka is in Aravalli district. Aravalli was formed from part of Sabarkantha district
                    in 2013, so many people still search for Dhansura under Sabarkantha.
                  </p>
                </FaqItem>
                <FaqItem question="Can I visit the farm and buy directly?">
                  <p>
                    Yes. Buyers can come to the farm to see the harvest and load crates. Please message us on
                    WhatsApp before you come so we can have fruit ready. Farm hours are 6:00 AM to 7:00 PM, every
                    day.
                  </p>
                </FaqItem>
              </div>
            </div>

            <div className="faq-group">
              <h2>Ordering and price</h2>
              <div className="faq-list">
                <FaqItem question="What is the phone or WhatsApp number for orders?">
                  <p>
                    Call or WhatsApp <a href="tel:+919426040220">+91 94260 40220</a>. Share the quantity you need
                    and your city, and we will reply with the rate and availability.
                  </p>
                </FaqItem>
                <FaqItem question="How is the wholesale price of mosambi decided?">
                  <p>
                    We quote per crate or per kg. The rate depends on fruit grade and size, the quantity and the
                    current APMC mandi rate in Gujarat, so it changes with the market. Ask us on WhatsApp for
                    today's rate.
                  </p>
                </FaqItem>
                <FaqItem question="Do you supply small quantities to juice bars and fruit sellers?">
                  <p>
                    Yes. We supply juice bars, juice centres and local fruit sellers as well as full loads for mandi
                    traders. Tell us your weekly need and we will plan supply.
                  </p>
                </FaqItem>
                <FaqItem question="Which places do you supply?">
                  <p>
                    We supply buyers across Gujarat, including APMC mandis in Ahmedabad, Himmatnagar, Modasa,
                    Vadodara and Surat. Buyers can also pick up from the farm.
                  </p>
                </FaqItem>
              </div>
            </div>

            <div className="faq-group">
              <h2>Our fruit</h2>
              <div className="faq-list">
                <FaqItem question="Is your mosambi naturally ripened?">
                  <p>
                    Yes. The fruit ripens on the tree. We do not use calcium carbide or any chemical to ripen or
                    colour the fruit.
                  </p>
                </FaqItem>
                <FaqItem question="What is the difference between mosambi and sweet lime?">
                  <p>
                    They are the same fruit. Mosambi is the common Indian name for sweet lime (Citrus limetta). In
                    Gujarati it is called મોસંબી.
                  </p>
                </FaqItem>
                <FaqItem question="How do you pack mosambi for transport?">
                  <p>
                    Fruit is picked by hand in the early morning, sorted by size and peel quality, and packed in
                    ventilated crates so it stays fresh on the road.
                  </p>
                </FaqItem>
                <FaqItem question="How should I store mosambi after delivery?">
                  <p>
                    Keep crates in a cool, shaded place with good air flow and do not stack them too high. Use the
                    fruit within a few days for the best juice and taste.
                  </p>
                </FaqItem>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CtaBand
        title="Still have a question?"
        description="Message us on WhatsApp and we will answer you directly."
      />
      <QuickBar />
    </>
  );
}
