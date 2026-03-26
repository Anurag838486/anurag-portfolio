import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certificates' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const themes = [
  { id: 'cyber', name: 'Cyber Dark', color: '#08a1afff', bg: '#05050d' },
  { id: 'aurora', name: 'Aurora', color: '#00ffa3', bg: '#020c0b' },
  { id: 'sunset', name: 'Sunset', color: '#ff8c42', bg: '#0d0805' },
  { id: 'forest', name: 'Forest', color: '#22c55e', bg: '#050d05' },
  { id: 'galaxy', name: 'Galaxy', color: '#a855f7', bg: '#0a0414' },
  { id: 'light', name: 'Light', color: '#3b82f6', bg: '#f8fafc' },
];

const Navbar = ({ theme, setTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const selectorRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPos = window.scrollY + 150;
      sections.forEach((section, i) => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActive(navLinks[i].href);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectorRef.current && !selectorRef.current.contains(e.target)) {
        setShowThemeSelector(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '24px 0',
        background: scrolled ? 'rgba(5, 5, 13, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.4s ease',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* TEXT LOGO ONLY (image removed) */}
          <div style={{
            fontSize: '24px',
            fontWeight: 900,
            letterSpacing: '-0.5px',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-display)'
          }}>
            Anurag<span style={{ color: 'var(--accent-primary)' }}>.dev</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              display: 'flex', gap: '5px', alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.03)', padding: '6px',
              borderRadius: '40px', border: '1px solid rgba(255, 255, 255, 0.05)'
            }} className="desktop-nav">
              {navLinks.map(link => {
                const isActive = active === link.href;
                return (
                  <a key={link.href} href={link.href} onClick={e => handleNav(e, link.href)}
                    style={{
                      padding: '10px 18px', borderRadius: '25px', textDecoration: 'none',
                      fontSize: '13px', fontWeight: 600, transition: 'all 0.3s ease',
                      color: isActive ? 'var(--accent-primary)' : 'rgba(255,255,255,0.6)',
                      background: isActive ? 'rgba(74, 44, 29, 0.8)' : 'transparent',
                      border: isActive ? '1px solid var(--accent-primary)44' : '1px solid transparent'
                    }}>{link.label}</a>
                );
              })}
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} style={{
              background: 'none', border: 'none',
              color: 'var(--accent-primary)', fontSize: '24px', display: 'none'
            }} className="hamburger">☰</button>
          </div>
        </div>

        {menuOpen && (
          <div style={{
            background: 'var(--bg-primary)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px',
            position: 'absolute', top: '100%', left: 0, right: 0, borderBottom: '1px solid var(--border-subtle)'
          }}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={e => handleNav(e, link.href)}
                style={{
                  padding: '12px 16px', textDecoration: 'none',
                  color: active === link.href ? 'var(--accent-primary)' : 'var(--text-primary)',
                  fontSize: '15px', fontWeight: 500, borderRadius: '8px',
                  background: active === link.href ? 'rgba(74, 44, 29, 0.4)' : 'transparent'
                }}>{link.label}</a>
            ))}
          </div>
        )}
      </nav>

      <AnimatePresence>
        {showThemeSelector && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            ref={selectorRef}
            style={{
              position: 'fixed', bottom: '85px', right: '30px', zIndex: 1002,
              background: 'var(--bg-card)', backdropFilter: 'blur(30px)',
              border: '1px solid var(--accent-primary)44', borderRadius: '24px',
              padding: '24px', width: '320px',
              boxShadow: '0 20px 80px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-primary)',
              letterSpacing: '2px', marginBottom: '24px', opacity: 0.8
            }}>SELECT THEME</div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {themes.map(t => (
                <button
                  key={t.id}
                  onClick={() => { setTheme(t.id); setShowThemeSelector(false); }}
                  style={{
                    background: 'none', border: theme === t.id ? '2px solid var(--accent-primary)' : '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '16px', padding: '16px 8px', cursor: 'pointer',
                    transition: 'all 0.2s', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: '8px'
                  }}
                >
                  <div style={{
                    width: '45px', height: '35px', background: t.bg,
                    borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: t.color, boxShadow: `0 0 10px ${t.color}` }} />
                  </div>
                  <span style={{ fontSize: '10px', color: 'var(--text-secondary)', fontWeight: 600 }}>{t.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1100px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;