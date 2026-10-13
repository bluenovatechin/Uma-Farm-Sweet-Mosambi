import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import CtaBand from '../components/CtaBand';
import OrchardPlan from '../components/OrchardPlan';

export default function AboutPage() {
  return (
    <>
      <Seo path="/about/" />
      <main id="main">
        <nav className="breadcrumb wrap" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">About</span>
            </li>
          </ol>
        </nav>

        <section className="wrap page-head">
          <span className="eyebrow">About the farm</span>
          <h1>About Uma Farm Sweet Mosambi</h1>
          <p className="lede">
            A family-run orchard at Adalpura Kampa, Dhansura in Gujarat's Aravalli district. We grow sweet mosambi
            and sell it directly to buyers.
          </p>
        </section>

        <section className="section section-tight">
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
              <figcaption>Mosambi trees and drip line in our orchard</figcaption>
            </figure>
            <div className="prose">
              <h2>Our farm</h2>
              <p>
                Uma Farm is a sweet lime (mosambi) orchard at Adalpura village in Dhansura taluka. Mosambi is the
                only crop we grow, so all of our time goes into these trees and this fruit.
              </p>
              <p>
                We sell straight from the farm. Mandi traders, juice bars and fruit sellers buy from us directly,
                and many buyers come to the farm to pick up their crates.
              </p>
              <ul className="checklist">
                <li>
                  <span className="tick">
                    <Icon name="i-check" />
                  </span>
                  Fruit ripens on the tree, no carbide or chemical ripening
                </li>
                <li>
                  <span className="tick">
                    <Icon name="i-check" />
                  </span>
                  Every tree is watered by its own drip line
                </li>
                <li>
                  <span className="tick">
                    <Icon name="i-check" />
                  </span>
                  Fruit is sorted honestly by size and peel quality
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section bg-alt" aria-labelledby="care-title">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">How we grow</span>
              <h2 id="care-title">How we look after the orchard</h2>
            </div>
            <div className="split">
              <ol className="steps">
                <li>
                  <div>
                    <h3>20 by 20 feet tree spacing</h3>
                    <p>
                      Each tree has its own space, so sunlight reaches the whole canopy and air moves freely.
                      This helps keep fungal disease away.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Drip irrigation at the roots</h3>
                    <p>
                      Drip lines take water straight to the roots. Less water is lost and the leaves stay dry and
                      healthy.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Pruning every season</h3>
                    <p>
                      We remove water shoots and weak growth so the tree puts its strength into fruit-bearing
                      branches.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Careful hand picking</h3>
                    <p>
                      Fruit is cut at the stem with clean tools in the early morning, without tearing the peel.
                      This helps crates last longer in transit.
                    </p>
                  </div>
                </li>
              </ol>
              <OrchardPlan />
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="visit-title">
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
              <figcaption>A fruit-laden mosambi tree at Uma Farm</figcaption>
            </figure>
            <div className="prose">
              <span className="eyebrow">Visit us</span>
              <h2 id="visit-title">Visit the farm</h2>
              <p>
                The farm is at Adalpura Kampa, Dhansura, Aravalli, Gujarat 383310, India. We are open every day from
                6:00 AM to 7:00 PM.
              </p>
              <p>
                Please send a WhatsApp message before you come so we can have fruit picked and crates ready for
                you.
              </p>
              <p>
                <a
                  className="btn btn-outline"
                  href="https://maps.app.goo.gl/2VBfWCgWzmzpPiWw8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="i-pin" /> Get directions on Google Maps
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <CtaBand />
    </>
  );
}
