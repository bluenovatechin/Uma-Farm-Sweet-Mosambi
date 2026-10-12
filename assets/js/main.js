/* Uma Farm Sweet Mosambi · www.umafarm.com */
(function () {
  'use strict';

  /* ---------- Site settings ---------- */
  // Paste your Google Analytics 4 Measurement ID here (looks like "G-XXXXXXXXXX").
  // While it is empty, no analytics script loads and no cookie banner is shown.
  var GA_MEASUREMENT_ID = '';
  var FARM_WHATSAPP_NUMBER = '919426040220';
  var CONSENT_KEY = 'uma_cookie_consent';

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
  }

  /* ---------- Footer year ---------- */
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Mobile menu ---------- */
  var menuBtn = $('#menuBtn');
  var navLinks = $('#navLinks');
  if (menuBtn && navLinks) {
    var setMenu = function (open) {
      navLinks.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    menuBtn.addEventListener('click', function () { setMenu(!navLinks.classList.contains('open')); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) { setMenu(false); menuBtn.focus(); }
    });
  }

  /* ---------- Analytics (loads only after consent) ---------- */
  function loadAnalytics() {
    if (!GA_MEASUREMENT_ID || window.gtag) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }
  function track(action, label) {
    if (typeof window.gtag === 'function') window.gtag('event', action, { event_label: label || '' });
  }

  var banner = $('#cookieBanner');
  if (GA_MEASUREMENT_ID && banner) {
    var consent = store(CONSENT_KEY);
    if (consent === 'accepted') loadAnalytics();
    else if (!consent) banner.hidden = false;
    $('#cookieAccept').addEventListener('click', function () {
      store(CONSENT_KEY, 'accepted'); banner.hidden = true; loadAnalytics();
    });
    $('#cookieDecline').addEventListener('click', function () {
      store(CONSENT_KEY, 'declined'); banner.hidden = true;
    });
  }
  $$('[data-cookie-settings]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!GA_MEASUREMENT_ID || !banner) return;
      banner.hidden = false;
      $('#cookieAccept').focus();
    });
  });

  // Count clicks on WhatsApp and phone links (only when analytics is allowed)
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="https://wa.me"], a[href^="tel:"]');
    if (a) track(a.href.indexOf('tel:') === 0 ? 'phone_click' : 'whatsapp_click', a.getAttribute('data-track') || location.pathname);
  });

  /* ---------- Orchard layout diagram ---------- */
  var rows = $('#orchardRows');
  if (rows) {
    var NS = 'http://www.w3.org/2000/svg';
    var xs = [40, 120, 200, 280], ys = [30, 90, 150, 210];
    ys.forEach(function (y) {
      var l = document.createElementNS(NS, 'line');
      l.setAttribute('x1', 20); l.setAttribute('x2', 300); l.setAttribute('y1', y + 14); l.setAttribute('y2', y + 14);
      l.setAttribute('class', 'drip'); rows.appendChild(l);
      xs.forEach(function (x) {
        var c = document.createElementNS(NS, 'circle');
        c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', 24); c.setAttribute('class', 'canopy'); rows.appendChild(c);
        var t = document.createElementNS(NS, 'circle');
        t.setAttribute('cx', x); t.setAttribute('cy', y); t.setAttribute('r', 7); t.setAttribute('class', 'tree'); rows.appendChild(t);
      });
    });
  }

  /* ---------- Wholesale inquiry form: validate, then open WhatsApp ---------- */
  var form = $('#inquiryForm');
  if (form) {
    var startedAt = Date.now();
    var status = $('#formStatus');
    var rules = {
      name: { test: function (v) { return v.length >= 2; }, msg: 'Please enter your name.' },
      phone: { test: function (v) { return /^(\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/.test(v); }, msg: 'Please enter a valid 10-digit mobile number.' },
      qty: { test: function (v) { return v.length >= 1; }, msg: 'Please tell us how much you need.' },
      city: { test: function (v) { return v.length >= 2; }, msg: 'Please enter your delivery city.' }
    };

    function check(name) {
      var input = form.elements[name];
      var err = document.getElementById('err-' + name);
      var ok = rules[name].test(input.value.trim());
      if (ok) { input.removeAttribute('aria-invalid'); err.textContent = ''; }
      else { input.setAttribute('aria-invalid', 'true'); err.textContent = rules[name].msg; }
      return ok;
    }

    Object.keys(rules).forEach(function (name) {
      var input = form.elements[name];
      input.addEventListener('blur', function () { if (input.value.trim()) check(name); });
      input.addEventListener('input', function () { if (input.getAttribute('aria-invalid')) check(name); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.className = 'form-status'; status.textContent = '';

      // Spam protection: hidden honeypot field + minimum fill time
      if (form.elements.website.value) return;
      if (Date.now() - startedAt < 2500) {
        status.className = 'form-status error';
        status.textContent = 'Please check your details and press the button again.';
        return;
      }

      var firstBad = null;
      Object.keys(rules).forEach(function (name) { if (!check(name) && !firstBad) firstBad = form.elements[name]; });
      if (firstBad) { firstBad.focus(); return; }

      var v = function (n) { return form.elements[n].value.trim(); };
      var lines = [
        'Wholesale mosambi inquiry (umafarm.com)',
        'Name: ' + v('name'),
        v('business') ? 'Business: ' + v('business') : '',
        'Buyer type: ' + v('type'),
        'Quantity: ' + v('qty'),
        'Delivery city: ' + v('city'),
        'Phone: ' + v('phone'),
        v('msg') ? 'Notes: ' + v('msg') : ''
      ].filter(Boolean).join('\n');

      track('wholesale_inquiry', v('type'));
      var url = 'https://wa.me/' + FARM_WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines);
      status.className = 'form-status success';
      status.textContent = 'Opening WhatsApp with your inquiry. Press send in WhatsApp to reach us.';
      var win = window.open(url, '_blank');
      if (win) win.opener = null; else window.location.href = url;
    });
  }
})();
