import React, { useState, useRef } from 'react';
import Icon from './Icon';

const FARM_WHATSAPP_NUMBER = '919426040220';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    website: '', // honeypot
    name: '',
    phone: '',
    type: 'Mandi trader / commission agent',
    business: '',
    qty: '',
    city: '',
    msg: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const startedAtRef = useRef(Date.now());

  const rules = {
    name: {
      test: (v) => v.trim().length >= 2,
      msg: 'Please enter your name.'
    },
    phone: {
      test: (v) => /^(\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/.test(v.trim()),
      msg: 'Please enter a valid 10-digit mobile number.'
    },
    qty: {
      test: (v) => v.trim().length >= 1,
      msg: 'Please tell us how much you need.'
    },
    city: {
      test: (v) => v.trim().length >= 2,
      msg: 'Please enter your delivery city.'
    }
  };

  function validateField(name, value) {
    if (rules[name]) {
      const ok = rules[name].test(value);
      setErrors((prev) => ({
        ...prev,
        [name]: ok ? '' : rules[name].msg
      }));
      return ok;
    }
    return true;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      validateField(name, value);
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    if (value.trim()) {
      validateField(name, value);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    // Spam honeypot
    if (formData.website) return;

    // Minimum fill time check (2.5 seconds)
    if (Date.now() - startedAtRef.current < 2500) {
      setStatus({
        type: 'error',
        message: 'Please check your details and press the button again.'
      });
      return;
    }

    // Validate all required fields
    const newErrors = {};
    let firstInvalid = null;
    Object.keys(rules).forEach((key) => {
      if (!rules[key].test(formData[key])) {
        newErrors[key] = rules[key].msg;
        if (!firstInvalid) firstInvalid = key;
      }
    });

    if (firstInvalid) {
      setErrors(newErrors);
      document.getElementById(`f-${firstInvalid}`)?.focus();
      return;
    }

    setSubmitting(true);

    // Optional Hostinger PHP API recording
    try {
      fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => {
        // Silently catch if not on Hostinger or API unavailable in dev
      });
    } catch {}

    // Build WhatsApp message
    const lines = [
      'Wholesale mosambi inquiry (umafarm.com)',
      `Name: ${formData.name.trim()}`,
      formData.business.trim() ? `Business: ${formData.business.trim()}` : '',
      `Buyer type: ${formData.type.trim()}`,
      `Quantity: ${formData.qty.trim()}`,
      `Delivery city: ${formData.city.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      formData.msg.trim() ? `Notes: ${formData.msg.trim()}` : ''
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${FARM_WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;

    setStatus({
      type: 'success',
      message: 'Opening WhatsApp with your inquiry. Press send in WhatsApp to reach us.'
    });

    const win = window.open(whatsappUrl, '_blank');
    if (win) {
      win.opener = null;
    } else {
      window.location.href = whatsappUrl;
    }

    setSubmitting(false);
  }

  return (
    <div className="form-card">
      <h2 id="form-title">Wholesale inquiry</h2>
      <p>
        Fill in the form and press the button. WhatsApp opens with your message ready to send. Fields marked{' '}
        <span className="req">*</span> are required.
      </p>
      <form
        className="inquiry-form"
        id="inquiryForm"
        onSubmit={handleSubmit}
        noValidate
        aria-labelledby="form-title"
      >
        <div className="hp-field" aria-hidden="true" style={{ display: 'none' }}>
          <label htmlFor="f-website">Leave this field empty</label>
          <input
            type="text"
            id="f-website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor="f-name">
              Your name <span className="req">*</span>
            </label>
            <input
              id="f-name"
              name="name"
              required
              minLength="2"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.name)}
              aria-describedby="err-name"
            />
            <span className="field-error" id="err-name" aria-live="polite">
              {errors.name}
            </span>
          </div>
          <div className="field">
            <label htmlFor="f-phone">
              Mobile / WhatsApp number <span className="req">*</span>
            </label>
            <input
              id="f-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              required
              autoComplete="tel"
              placeholder="98765 43210"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby="err-phone"
            />
            <span className="field-error" id="err-phone" aria-live="polite">
              {errors.phone}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor="f-type">
              I am a <span className="req">*</span>
            </label>
            <select id="f-type" name="type" required value={formData.type} onChange={handleChange}>
              <option value="Mandi trader / commission agent">Mandi trader / agent</option>
              <option value="Juice bar / juice centre">Juice bar / juice centre</option>
              <option value="Fruit shop / vendor">Fruit shop / vendor</option>
              <option value="Distributor / aggregator">Distributor / aggregator</option>
              <option value="Farm pickup / direct buyer">Farm pickup / direct buyer</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-business">
              Business name <span className="opt">(optional)</span>
            </label>
            <input
              id="f-business"
              name="business"
              autoComplete="organization"
              value={formData.business}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor="f-qty">
              Quantity needed <span className="req">*</span>
            </label>
            <input
              id="f-qty"
              name="qty"
              required
              value={formData.qty}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.qty)}
              aria-describedby="err-qty qty-hint"
            />
            <span className="hint" id="qty-hint">
              For example: 500 kg or 25 crates
            </span>
            <span className="field-error" id="err-qty" aria-live="polite">
              {errors.qty}
            </span>
          </div>
          <div className="field">
            <label htmlFor="f-city">
              Delivery city <span className="req">*</span>
            </label>
            <input
              id="f-city"
              name="city"
              required
              autoComplete="address-level2"
              value={formData.city}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.city)}
              aria-describedby="err-city"
            />
            <span className="field-error" id="err-city" aria-live="polite">
              {errors.city}
            </span>
          </div>
        </div>
        <div className="field">
          <label htmlFor="f-msg">
            Notes <span className="opt">(optional)</span>
          </label>
          <textarea
            id="f-msg"
            name="msg"
            value={formData.msg}
            onChange={handleChange}
          ></textarea>
        </div>
        {status.message && (
          <div className={`form-status ${status.type}`} id="formStatus" role="status" aria-live="polite">
            {status.message}
          </div>
        )}
        <button className="btn btn-wa btn-block" type="submit" disabled={submitting}>
          <Icon name="i-chat" /> Send inquiry on WhatsApp
        </button>
        <p className="form-note">
          Your details are not stored on this website. They go only into your WhatsApp message to us.
        </p>
      </form>
    </div>
  );
}
