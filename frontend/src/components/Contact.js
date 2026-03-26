import React, { useState } from 'react';
import useInView from '../hooks/useInView';

const Contact = () => {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('loading');
    try {
      const apiBase = process.env.REACT_APP_API_URL || '';
      const res = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      await res.json();
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus(null), 5000);
  };

  const contactInfo = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      label: 'Email',
      value: 'panditanuragsharma90@gmail.com',
      href: 'mailto:panditanuragsharma90@gmail.com',
      accentVar: '--accent-primary',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.41a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
        </svg>
      ),
      label: 'Phone',
      value: '+91-9410414196',
      href: 'tel:+919410414196',
      accentVar: '--accent-secondary',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'anurag-sharma-02705129b',
      href: 'https://www.linkedin.com/in/anurag-sharma-02705129b/',
      accentVar: '--accent-tertiary',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      label: 'GitHub',
      value: 'Anurag838486',
      href: 'https://github.com/Anurag838486',
      accentVar: '--accent-warm',
    },
  ];

  const getInputStyle = (field) => ({
    width: '100%',
    padding: '13px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? '#ef4444' : focused === field ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: '10px',
    color: 'var(--text-primary)',
    fontSize: '14px',
    fontFamily: 'var(--font-display)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
    boxShadow: focused === field ? `0 0 0 3px color-mix(in srgb, var(--accent-primary) 15%, transparent)` : 'none',
  });

  return (
    <section id="contact" className="section" ref={ref}>
      <style>{`
        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          margin-bottom: 12px;
        }
        .contact-info-card:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.15);
          transform: translateX(4px);
        }
        .contact-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-submit-btn {
          width: 100%;
          padding: 14px;
          background: var(--accent-primary);
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          font-family: var(--font-display);
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          margin-top: 4px;
          letter-spacing: 0.02em;
        }
        .contact-submit-btn:hover:not(:disabled) {
          opacity: 0.88;
          transform: translateY(-1px);
        }
        .contact-submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .form-field-wrap {
          margin-bottom: 14px;
        }
        .field-error {
          font-size: 12px;
          color: #ef4444;
          margin-top: 5px;
          padding-left: 4px;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="container">

        {/* Header */}
        <div style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(30px)',
          transition: 'all 0.7s ease',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>07 — Contact</div>
          <h2 className="section-title">Contact Me</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        {/* Grid */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '48px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.2s',
          }}
        >

          {/* LEFT — Contact Info */}
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px', lineHeight: 1.6 }}>
              Feel free to reach out through any of these channels. I typically respond within 24 hours.
            </p>

            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                target="_blank"
                rel="noreferrer"
                className="contact-info-card"
              >
                <div
                  className="contact-icon-wrap"
                  style={{
                    background: `color-mix(in srgb, var(${info.accentVar}) 15%, transparent)`,
                    color: `var(${info.accentVar})`,
                  }}
                >
                  {info.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {info.label}
                  </div>
                  <div style={{
                    fontSize: '13.5px',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>
                    {info.value}
                  </div>
                </div>
                <div style={{ marginLeft: 'auto', color: 'var(--text-muted)', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* RIGHT — Form */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: '32px',
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px', color: 'var(--text-primary)' }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div className="form-field-wrap" style={{ margin: 0 }}>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    placeholder="Your name"
                    style={getInputStyle('name')}
                  />
                  {errors.name && <div className="field-error">{errors.name}</div>}
                </div>
                <div className="form-field-wrap" style={{ margin: 0 }}>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    placeholder="your@email.com"
                    style={getInputStyle('email')}
                  />
                  {errors.email && <div className="field-error">{errors.email}</div>}
                </div>
              </div>

              <div className="form-field-wrap">
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  placeholder="Subject"
                  style={getInputStyle('subject')}
                />
                {errors.subject && <div className="field-error">{errors.subject}</div>}
              </div>

              <div className="form-field-wrap">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  style={{ ...getInputStyle('message'), resize: 'vertical', minHeight: '120px' }}
                />
                {errors.message && <div className="field-error">{errors.message}</div>}
              </div>

              <button type="submit" className="contact-submit-btn" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : 'Send Message →'}
              </button>

              {status === 'success' && (
                <div style={{
                  marginTop: '12px', padding: '12px 16px',
                  background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                  borderRadius: '10px', color: '#4ade80', fontSize: '14px', textAlign: 'center'
                }}>
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div style={{
                  marginTop: '12px', padding: '12px 16px',
                  background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
                  borderRadius: '10px', color: '#f87171', fontSize: '14px', textAlign: 'center'
                }}>
                  ✕ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;