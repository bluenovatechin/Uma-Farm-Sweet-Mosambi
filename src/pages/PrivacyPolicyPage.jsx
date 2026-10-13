import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function PrivacyPolicyPage() {
  function handleCookieSettings() {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  }

  return (
    <>
      <Seo path="/privacy-policy/" />
      <main id="main">
        <nav className="breadcrumb wrap" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">Privacy Policy</span>
            </li>
          </ol>
        </nav>

        <section className="wrap narrow page-head">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <div className="page-head-meta">
            <span>Effective: January 1, 2026</span>
            <span>Last updated: October 12, 2026</span>
          </div>
        </section>

        <section className="section section-tight">
          <div className="wrap narrow">
            <article className="legal">
              <p>
                This Privacy Policy explains how Uma Farm Sweet Mosambi ("we", "us") handles information when
                you visit www.umafarm.com, send us an inquiry or contact us by phone or WhatsApp.
              </p>

              <h2>1. Information we receive</h2>
              <p>We only receive information that you choose to send us:</p>
              <ul>
                <li>
                  <strong>Contact details:</strong> your name, phone or WhatsApp number and delivery city.
                </li>
                <li>
                  <strong>Order details:</strong> business name (if any), buyer type, quantity and any notes
                  about dates or delivery.
                </li>
              </ul>

              <h2>2. The inquiry form</h2>
              <p>
                The inquiry form on our contact page does not save your details on our website or on any server.
                When you press the button, your browser opens WhatsApp with a message containing what you typed.
                The message reaches us only if you press send in WhatsApp. WhatsApp's own privacy policy applies
                to messages sent through WhatsApp.
              </p>

              <h2>3. How we use your information</h2>
              <ul>
                <li>To reply to your inquiry with prices and availability.</li>
                <li>To arrange farm pickup, loading and delivery of your order.</li>
                <li>To contact you about an order you have placed.</li>
              </ul>

              <h2>4. Sharing</h2>
              <p>
                We do not sell or rent your information. We share it only with the transport provider handling
                your order, or when required by Indian law.
              </p>

              <h2>5. Cookies and analytics</h2>
              <p>
                We may use Google Analytics to count visits and see which pages are useful. Analytics cookies are
                set only if you choose "Allow analytics" in the cookie banner. If you decline, no analytics
                cookies are set. Your choice is saved in your browser's local storage so we do not ask again. You
                can change your choice at any time with the button below.
              </p>
              <p>
                <button
                  className="btn btn-outline btn-sm"
                  type="button"
                  data-cookie-settings
                  onClick={handleCookieSettings}
                >
                  Change cookie settings
                </button>
              </p>

              <h2>6. Your rights</h2>
              <p>
                You can ask us to tell you what information we hold about you, to correct it, or to delete it.
                Contact us using the details below.
              </p>

              <h2>7. Changes to this policy</h2>
              <p>We may update this policy. The "Last updated" date at the top shows when it last changed.</p>

              <h2>8. Contact</h2>
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
