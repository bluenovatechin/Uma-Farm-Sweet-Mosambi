import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { seoData } from '../data/seoData';

export default function Seo({ path = '/' }) {
  const meta = seoData[path] || seoData['/'];

  // Ensure document title updates client-side even if hydration timing varies
  useEffect(() => {
    if (meta?.title) {
      document.title = meta.title;
    }
  }, [meta]);

  const schemaString = meta.schema ? JSON.stringify(meta.schema) : null;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content={meta.robots || 'index, follow, max-image-preview:large'} />
      <link rel="canonical" href={meta.canonical} />
      <meta name="author" content="Uma Farm Sweet Mosambi" />
      <meta name="theme-color" content="#173823" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Adalpura Kampa, Dhansura, Gujarat" />

      {/* Open Graph */}
      <meta property="og:site_name" content="Uma Farm Sweet Mosambi" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:image" content={meta.ogImage || 'https://www.umafarm.com/assets/images/uma-farm-sweet-mosambi-og.jpg'} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={meta.ogImageAlt || 'Sweet mosambi on the tree at Uma Farm, Adalpura Kampa, Dhansura, Gujarat'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.ogImage || 'https://www.umafarm.com/assets/images/uma-farm-sweet-mosambi-og.jpg'} />

      {/* Preconnect & Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Young+Serif&display=swap"
      />

      {/* Structured Data (JSON-LD) */}
      {schemaString && (
        <script type="application/ld+json">
          {schemaString}
        </script>
      )}
    </Helmet>
  );
}
