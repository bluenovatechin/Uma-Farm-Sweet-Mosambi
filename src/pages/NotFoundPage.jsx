import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import QuickBar from '../components/QuickBar';

export default function NotFoundPage() {
  return (
    <>
      <Seo path="/404.html" />
      <main id="main">
        <section className="wrap not-found">
          <p className="code" aria-hidden="true">
            404
          </p>
          <h1>Page not found</h1>
          <p>The page you are looking for does not exist or has moved. These links may help.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/">
              Go to the homepage
            </Link>
            <Link className="btn btn-outline" to="/contact/">
              Contact the farm
            </Link>
          </div>
        </section>
      </main>
      <QuickBar />
    </>
  );
}
