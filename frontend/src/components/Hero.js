import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  'Full Stack Developer',
  'React.js Developer',
  'Node.js Engineer',
  'Problem Solver',
  'MERN Stack Dev',
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showFullPhoto, setShowFullPhoto] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIdx];
    if (!deleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed === '') {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % roles.length);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(prev =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      }, deleting ? 60 : 90);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIdx]);

  const social = [
    { label: 'GitHub', href: 'https://github.com/Anurag838486', icon: '⌥' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anurag-sharma-02705129b/', icon: '◈' },
    { label: 'LeetCode', href: 'https://leetcode.com', icon: '⌘' },
  ];

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      {/* Full Screen Photo Modal */}
      <AnimatePresence>
        {showFullPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFullPhoto(false)}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(5, 5, 13, 0.95)',
              zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'zoom-out', backdropFilter: 'blur(10px)'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                position: 'relative', maxWidth: '90vw', maxHeight: '80vh',
                borderRadius: '24px', overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 0 100px rgba(0, 229, 255, 0.2)'
              }}
            >
              <img src="/profile.jpg" alt="Full Profile" style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
              <div style={{
                position: 'absolute', bottom: '0', left: 0, right: 0, padding: '20px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                color: 'white', textAlign: 'center', fontFamily: 'var(--font-display)',
                fontSize: '18px', fontWeight: 700
              }}>
                Anurag Sharma
              </div>
            </motion.div>
            <button 
              onClick={() => setShowFullPhoto(false)}
              style={{
                position: 'absolute', top: '30px', right: '30px',
                background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white',
                width: '40px', height: '40px', borderRadius: '50%', fontSize: '20px',
                cursor: 'pointer', zIndex: 2001
              }}
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '60px', alignItems: 'center' }}>
          {/* Left Content */}
          <div>
            {/* Status badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 16px', borderRadius: '30px',
              background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
              marginBottom: '32px',
              opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
              transition: 'all 0.7s ease',
            }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: 'var(--accent-tertiary)', animation: 'pulse-dot 2s ease-in-out infinite',
                display: 'inline-block'
              }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: '12px', color: 'var(--accent-tertiary)', letterSpacing: '1px' }}>
                Available for Work
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              lineHeight: 1.05,
              marginBottom: '12px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(30px)',
              transition: 'all 0.7s ease 0.1s',
            }}>
              <span style={{ color: 'var(--text-primary)' }}>Hi, I'm</span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 60%, var(--accent-tertiary) 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Anurag Sharma</span>
            </h1>

            {/* Typed role */}
            <div style={{
              fontSize: 'clamp(1.3rem, 3vw, 2rem)', fontWeight: 600,
              color: 'var(--text-secondary)', marginBottom: '24px',
              minHeight: '3rem', display: 'flex', alignItems: 'center', gap: '4px',
              opacity: visible ? 1 : 0,
              transition: 'all 0.7s ease 0.2s',
            }}>
              <span style={{ fontFamily: "var(--font-mono)", color: 'var(--accent-primary)' }}>&gt;</span>
              <span style={{ marginLeft: '8px' }}>{displayed}</span>
              <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--accent-primary)', fontWeight: 300 }}>|</span>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '16px', color: 'var(--text-muted)',
              maxWidth: '560px', lineHeight: 1.8, marginBottom: '40px',
              opacity: visible ? 1 : 0, transition: 'all 0.7s ease 0.3s',
            }}>
              B.Tech CSE student at Lovely Professional University, passionate about building
              elegant full-stack solutions. Specializing in MERN stack with strong foundations
              in DSA and system design.
            </p>

            {/* Buttons */}
            <div style={{
              display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px',
              opacity: visible ? 1 : 0, transition: 'all 0.7s ease 0.4s',
            }}>
              <a href="#projects" className="btn-primary"
                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View My Work
                <span style={{ fontSize: '18px' }}>→</span>
              </a>
              <a href="#contact" className="btn-secondary"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=11-XbhezGAnUcQaa9BCEBXFObMhW7NvCg"
                download="Anurag_Sharma_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '12px 24px', borderRadius: '12px',
                  border: '1px solid var(--border-subtle)',
                  textDecoration: 'none', color: 'var(--text-secondary)',
                  fontSize: '15px', fontWeight: 600, transition: 'all 0.3s',
                  background: 'var(--bg-glass)', backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Download CV
                <span style={{ fontSize: '18px' }}>↓</span>
              </a>
            </div>

            {/* Socials */}
            <div style={{
              display: 'flex', gap: '12px',
              opacity: visible ? 1 : 0, transition: 'all 0.7s ease 0.5s',
            }}>
              {social.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none', color: 'var(--text-secondary)',
                    fontSize: '18px', transition: 'all 0.2s',
                    background: 'var(--bg-secondary)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.background = 'var(--border-subtle)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--bg-secondary)'; }}
                  title={s.label}
                >{s.icon}</a>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '4px' }}>
                <div style={{ width: '30px', height: '1px', background: 'var(--border-subtle)' }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '1px' }}>
                  +91-9410414196
                </span>
              </div>
            </div>
          </div>

          {/* Right — Floating Card */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '16px',
            opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(30px)',
            transition: 'all 0.8s ease 0.3s',
          }} className="hero-card-area">

            {/* Profile card */}
            <div className="glass-card" style={{ padding: '28px', textAlign: 'center', minWidth: '260px' }}>
              <div 
                onClick={() => setShowFullPhoto(true)}
                style={{
                  width: '85px', height: '85px', borderRadius: '50%', margin: '0 auto 16px',
                  padding: '3px', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: 'var(--shadow-glow)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{
                  width: '100%', height: '100%', borderRadius: '50%',
                  overflow: 'hidden', border: '2px solid var(--bg-primary)',
                  background: 'var(--bg-secondary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                  />
                  <div style={{ 
                    display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', 
                    fontSize: '24px', fontWeight: 900, color: 'var(--bg-primary)', background: 'var(--accent-primary)',
                    fontFamily: 'var(--font-display)' 
                  }}>
                    AS
                  </div>
                </div>
              </div>
              <div style={{ fontWeight: 700, fontSize: '18px', marginBottom: '4px' }}>Anurag Sharma</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: '11px', color: 'var(--accent-primary)', letterSpacing: '1px', marginBottom: '16px' }}>
                Full Stack Developer
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                {['React', 'Node.js', 'MongoDB'].map(t => (
                  <span key={t} className="tech-badge" style={{ fontSize: '11px', padding: '3px 10px' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="glass-card" style={{ padding: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', textAlign: 'center' }}>
                {[
                  { val: '100+', label: 'Problems Solved' },
                  { val: '4★', label: 'HackerRank' },
                  { val: '2+', label: 'Projects Built' },
                  { val: '7.34', label: 'CGPA (LPU)' },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1 }}>{s.val}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', fontFamily: "var(--font-mono)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          marginTop: '60px', opacity: 0.4,
          animation: 'fadeIn 1s ease 1.5s forwards',
        }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: '10px', color: 'var(--accent-primary)', letterSpacing: '3px' }}>SCROLL</div>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)', animation: 'scrollLine 2s ease-in-out infinite' }} />
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes scrollLine { 0%, 100% { opacity: 1; transform: scaleY(1); } 50% { opacity: 0.3; transform: scaleY(0.5); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 0.4; } }
        @media (max-width: 900px) {
          .hero-card-area { display: none !important; }
          #hero .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
