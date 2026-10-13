import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import CtaBand from '../components/CtaBand';
import QuickBar from '../components/QuickBar';

export default function SweetMosambiPage() {
  return (
    <>
      <Seo path="/sweet-mosambi/" />
      <main id="main">
        <nav className="breadcrumb wrap" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">Our Mosambi</span>
            </li>
          </ol>
        </nav>

        <section className="wrap page-head">
          <span className="eyebrow">Our mosambi</span>
          <h1>Sweet mosambi from Uma Farm</h1>
          <p className="lede">
            Mosambi, also called sweet lime (Citrus limetta), grown and ripened on the tree at our farm in
            Dhansura, Gujarat.
          </p>
        </section>

        <section className="section section-tight">
          <div className="wrap">
            <div className="cards c4">
              <article className="card">
                <span className="card-icon gold">
                  <Icon name="i-slice" />
                </span>
                <h3>Naturally sweet</h3>
                <p>High natural sweetness and low acidity. Smooth taste with no bitter aftertaste.</p>
              </article>
              <article className="card">
                <span className="card-icon">
                  <Icon name="i-leaf" />
                </span>
                <h3>Thin, glossy peel</h3>
                <p>The peel is thin and rich in citrus oil. It turns from deep green to golden as the fruit ripens.</p>
              </article>
              <article className="card">
                <span className="card-icon gold">
                  <Icon name="i-glass" />
                </span>
                <h3>High juice yield</h3>
                <p>Dense pulp gives more juice per kg, which matters for juice bars and juice centres.</p>
              </article>
              <article className="card">
                <span className="card-icon">
                  <Icon name="i-heart" />
                </span>
                <h3>Good for you</h3>
                <p>A natural source of vitamin C, potassium and citrus flavonoids.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section bg-alt" aria-labelledby="ripe-title">
          <div className="wrap split">
            <figure className="photo">
              <picture>
                <source
                  type="image/avif"
                  srcSet="/assets/images/sliced-mosambi-and-fresh-juice-640.avif 640w, /assets/images/sliced-mosambi-and-fresh-juice-1200.avif 1200w"
                  sizes="(min-width: 900px) 34rem, 92vw"
                />
                <source
                  type="image/webp"
                  srcSet="/assets/images/sliced-mosambi-and-fresh-juice-640.webp 640w, /assets/images/sliced-mosambi-and-fresh-juice-1200.webp 1200w"
                  sizes="(min-width: 900px) 34rem, 92vw"
                />
                <img
                  src="/assets/images/sliced-mosambi-and-fresh-juice-1200.webp"
                  alt="Halved sweet mosambi on a plate next to a glass of fresh mosambi juice"
                  width="1200"
                  height="653"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption>Cut Uma Farm mosambi and fresh juice</figcaption>
            </figure>
            <div className="prose">
              <span className="eyebrow">Ripened on the tree</span>
              <h2 id="ripe-title">No carbide, no forced ripening</h2>
              <p>
                Our mosambi changes colour naturally on the branch. We do not use calcium carbide or any chemical
                to ripen or colour the fruit.
              </p>
              <p>
                We pick in the early morning while the fruit is cool. Fruit picked this way keeps its moisture
                and travels better.
              </p>
              <div
                className="ripen"
                role="img"
                aria-label="Peel colour changes from dark green early in the season to golden yellow at full ripeness"
              >
                <div className="ripen-bar"></div>
                <div className="ripen-labels">
                  <span>Early (green)</span>
                  <span>Mid season</span>
                  <span>Fully ripe (golden)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="gallery-title">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Photos</span>
              <h2 id="gallery-title">Photos from our orchard</h2>
              <p className="lede">All photos were taken at Uma Farm, Adalpura Kampa, Dhansura.</p>
            </div>
            <div className="gallery">
              <figure>
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/assets/images/sweet-mosambi-on-tree-uma-farm-480.avif 480w, /assets/images/sweet-mosambi-on-tree-uma-farm-800.avif 800w, /assets/images/sweet-mosambi-on-tree-uma-farm-1200.avif 1200w"
                    sizes="(min-width: 1000px) 17rem, (min-width: 700px) 45vw, 92vw"
                  />
                  <source
                    type="image/webp"
                    srcSet="/assets/images/sweet-mosambi-on-tree-uma-farm-480.webp 480w, /assets/images/sweet-mosambi-on-tree-uma-farm-800.webp 800w, /assets/images/sweet-mosambi-on-tree-uma-farm-1200.webp 1200w"
                    sizes="(min-width: 1000px) 17rem, (min-width: 700px) 45vw, 92vw"
                  />
                  <img
                    src="/assets/images/sweet-mosambi-on-tree-uma-farm-1200.webp"
                    alt="Four green sweet mosambi fruits hanging on a branch at Uma Farm, Adalpura Kampa, Dhansura, Gujarat"
                    width="1200"
                    height="1600"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <figcaption>
                  <b>Mosambi on the branch</b>Fruit growing on one of our trees
                </figcaption>
              </figure>
              <figure>
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/assets/images/mosambi-tree-with-fruit-480.avif 480w, /assets/images/mosambi-tree-with-fruit-960.avif 960w"
                    sizes="(min-width: 1000px) 17rem, (min-width: 700px) 45vw, 92vw"
                  />
                  <source
                    type="image/webp"
                    srcSet="/assets/images/mosambi-tree-with-fruit-480.webp 480w, /assets/images/mosambi-tree-with-fruit-960.webp 960w"
                    sizes="(min-width: 1000px) 17rem, (min-width: 700px) 45vw, 92vw"
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
                <figcaption>
                  <b>A full mosambi tree</b>Trees are pruned every season
                </figcaption>
              </figure>
              <figure>
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/assets/images/mosambi-orchard-drip-irrigation-640.avif 640w, /assets/images/mosambi-orchard-drip-irrigation-1040.avif 1040w"
                    sizes="(min-width: 1000px) 17rem, (min-width: 700px) 45vw, 92vw"
                  />
                  <source
                    type="image/webp"
                    srcSet="/assets/images/mosambi-orchard-drip-irrigation-640.webp 640w, /assets/images/mosambi-orchard-drip-irrigation-1040.webp 1040w"
                    sizes="(min-width: 1000px) 17rem, (min-width: 700px) 45vw, 92vw"
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
                <figcaption>
                  <b>Orchard rows</b>Drip lines water every tree
                </figcaption>
              </figure>
              <figure>
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/assets/images/sliced-mosambi-and-fresh-juice-640.avif 640w, /assets/images/sliced-mosambi-and-fresh-juice-1200.avif 1200w"
                    sizes="(min-width: 1000px) 17rem, (min-width: 700px) 45vw, 92vw"
                  />
                  <source
                    type="image/webp"
                    srcSet="/assets/images/sliced-mosambi-and-fresh-juice-640.webp 640w, /assets/images/sliced-mosambi-and-fresh-juice-1200.webp 1200w"
                    sizes="(min-width: 1000px) 17rem, (min-width: 700px) 45vw, 92vw"
                  />
                  <img
                    src="/assets/images/sliced-mosambi-and-fresh-juice-1200.webp"
                    alt="Halved sweet mosambi on a plate next to a glass of fresh mosambi juice"
                    width="1200"
                    height="653"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <figcaption>
                  <b>Cut fruit and juice</b>Thin peel and juicy pulp
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section bg-alt" aria-labelledby="uses-title">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Uses and storage</span>
              <h2 id="uses-title">Using and storing mosambi</h2>
            </div>
            <div className="cards c3">
              <article className="card">
                <span className="card-icon gold">
                  <Icon name="i-glass" />
                </span>
                <h3>Fresh juice</h3>
                <p>
                  Mosambi juice is one of the most popular fresh juices in India. Our fruit is chosen by juice
                  bars for its yield.
                </p>
              </article>
              <article className="card">
                <span className="card-icon">
                  <Icon name="i-store" />
                </span>
                <h3>Retail and eating</h3>
                <p>
                  Even size and a clean peel make it easy to sell loose or by the dozen at fruit stalls and shops.
                </p>
              </article>
              <article className="card">
                <span className="card-icon">
                  <Icon name="i-box" />
                </span>
                <h3>Storage</h3>
                <p>
                  Keep crates in a cool, shaded place with good air flow. Do not stack too high. Use within a few
                  days for the best taste.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <CtaBand />
      <QuickBar />
    </>
  );
}
