import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid var(--border-subtle)',
      padding: '40px 0',
      background: 'var(--bg-glass)',
      backdropFilter: 'blur(20px)',
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: '14px', color: 'var(--bg-primary)'
            }}>AS</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px' }}>Anurag Sharma</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: '11px', color: 'var(--accent-primary)' }}>Full Stack Developer</div>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/Anurag838486' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anurag-sharma-02705129b/' },
              { label: 'Email', href: 'mailto:panditanuragsharma90@gmail.com' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                style={{
                  fontSize: '13px', color: 'var(--text-secondary)',
                  textDecoration: 'none', transition: 'color 0.2s',
                  fontFamily: "var(--font-mono)",
                }}
                onMouseEnter={e => e.target.style.color = 'var(--accent-primary)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >{link.label}</a>
            ))}
          </div>

          {/* Copyright */}
          <div style={{ fontFamily: "var(--font-mono)", fontSize: '11px', color: 'var(--text-muted)', textAlign: 'right' }}>
            © {year} Anurag Sharma
            <br />
            <span style={{ color: 'var(--text-muted)', opacity: 0.6 }}>Built with React · Node · MongoDB</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
