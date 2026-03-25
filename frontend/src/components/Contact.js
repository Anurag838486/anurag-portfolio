import React, { useState } from 'react';
import useInView from '../hooks/useInView';

const Contact = () => {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({});

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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
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

  const inputStyle = (field) => ({
    width: '100%', padding: '14px 18px',
    background: 'var(--bg-secondary)',
    border: `1px solid ${errors[field] ? '#ef4444' : 'var(--border-subtle)'}`,
    borderRadius: '10px', color: 'var(--text-primary)',
    fontSize: '15px', fontFamily: "var(--font-display)",
    outline: 'none', transition: 'all 0.2s',
    boxSizing: 'border-box',
  });

  const contactInfo = [
    { icon: '✉', label: 'Email', value: 'panditanuragsharma90@gmail.com', href: 'mailto:panditanuragsharma90@gmail.com', color: 'var(--accent-primary)' },
    { icon: '📱', label: 'Phone', value: '+91-9410414196', href: 'tel:+919410414196', color: 'var(--accent-secondary)' },
    { icon: '◈', label: 'LinkedIn', value: 'anurag-sharma-02705129b', href: 'https://www.linkedin.com/in/anurag-sharma-02705129b/', color: 'var(--accent-tertiary)' },
    { icon: '⌥', label: 'GitHub', value: 'Anurag838486', href: 'https://github.com/Anurag838486', color: 'var(--accent-warm)' },
  ];

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease', textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>07 — Contact</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Contact Me</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '48px', alignItems: 'start' }} className="contact-grid">
          {/* Left — Contact info */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateX(-30px)', transition: 'all 0.7s ease 0.1s' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Get In Touch</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.7 }}>
              I'm currently open to new opportunities. Whether you have a job opportunity, project, or just want to say hi — my inbox is always open!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {contactInfo.map((info, i) => (
                <a key={i} href={info.href} target="_blank" rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '16px 20px', borderRadius: '12px', textDecoration: 'none',
                    background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${info.color}0d`; e.currentTarget.style.borderColor = `${info.color}33`; e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(0,229,255,0.08)'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: `${info.color}15`, border: `1px solid ${info.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', color: info.color, flexShrink: 0,
                  }}>{info.icon}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: '10px', color: info.color, letterSpacing: '1px', marginBottom: '2px' }}>
                      {info.label}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 500, wordBreak: 'break-all' }}>
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="glass-card" style={{
            padding: '36px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateX(30px)',
            transition: 'all 0.7s ease 0.2s',
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '28px' }}>Send a Message</h3>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontFamily: "var(--font-mono)", color: 'var(--accent-primary)', letterSpacing: '1px', marginBottom: '8px' }}>
                    NAME *
                  </label>
                  <input name="name" value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    style={inputStyle('name')}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.boxShadow = 'var(--shadow-glow)'; }}
                    onBlur={e => { e.target.style.borderColor = errors.name ? '#ef4444' : 'var(--border-subtle)'; e.target.style.boxShadow = 'none'; }}
                  />
                  {errors.name && <div style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px' }}>{errors.name}</div>}
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontFamily: "var(--font-mono)", color: 'var(--accent-primary)', letterSpacing: '1px', marginBottom: '8px' }}>
                    EMAIL *
                  </label>
                  <input name="email" value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle('email')}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.boxShadow = 'var(--shadow-glow)'; }}
                    onBlur={e => { e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--border-subtle)'; e.target.style.boxShadow = 'none'; }}
                  />
                  {errors.email && <div style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px' }}>{errors.email}</div>}
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontFamily: "var(--font-mono)", color: 'var(--accent-primary)', letterSpacing: '1px', marginBottom: '8px' }}>
                  SUBJECT *
                </label>
                <input name="subject" value={form.subject} onChange={handleChange}
                  placeholder="What's this about?"
                  style={inputStyle('subject')}
                  onFocus={e => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.boxShadow = 'var(--shadow-glow)'; }}
                  onBlur={e => { e.target.style.borderColor = errors.subject ? '#ef4444' : 'var(--border-subtle)'; e.target.style.boxShadow = 'none'; }}
                />
                {errors.subject && <div style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px' }}>{errors.subject}</div>}
              </div>

              {/* Message */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontFamily: "var(--font-mono)", color: 'var(--accent-primary)', letterSpacing: '1px', marginBottom: '8px' }}>
                  MESSAGE *
                </label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project or just say hi..."
                  rows={5}
                  style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '120px' }}
                  onFocus={e => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.boxShadow = 'var(--shadow-glow)'; }}
                  onBlur={e => { e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border-subtle)'; e.target.style.boxShadow = 'none'; }}
                />
                {errors.message && <div style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px' }}>{errors.message}</div>}
              </div>

              {/* Submit */}
              <button type="submit" className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1 }}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div style={{
                  marginTop: '16px', padding: '14px', borderRadius: '10px',
                  background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
                  color: '#10b981', fontSize: '14px', textAlign: 'center',
                }}>
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div style={{
                  marginTop: '16px', padding: '14px', borderRadius: '10px',
                  background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
                  color: '#ef4444', fontSize: '14px', textAlign: 'center',
                }}>
                  ❌ Failed to send. Please try emailing directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
