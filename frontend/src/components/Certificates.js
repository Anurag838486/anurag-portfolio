import React from 'react';
import useInView from '../hooks/useInView';

const certs = [
  {
    title: 'Programming Using C++',
    issuer: 'Infosys Springboard',
    date: 'Aug 2025',
    link: 'https://drive.google.com/file/d/1drTYuJZh4BAoJWvbnV7m1TN1vk_ABJ7W/view?usp=sharing',
    color: '#00599c',
    icon: '💻',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Oct 2023',
    link: 'https://www.freecodecamp.org/certification/fcc23156c4a-5520-4cd9-8bf9-3798d50f9e0c/responsive-web-design',
    color: '#3b82f6',
    icon: '📱',
  },
  {
    title: 'Introduction to Hardware and Operating Systems',
    issuer: 'IBM (Coursera)',
    date: 'Jan 2024',
    link: 'https://coursera.org/share/1babbf0ba977d208418a1b22683384a9',
    color: '#0066fe',
    icon: '💻',
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google (Coursera)',
    date: 'Feb 2024',
    link: 'https://coursera.org/share/6ce4ba1e8d46bccb2a20174511fe38f3',
    color: '#4285F4',
    icon: '🏢',
  },
  {
    title: 'Introduction to DevOps, Cloud, and Agile Foundations',
    issuer: 'IBM (Coursera)',
    date: 'Mar 2024',
    link: 'https://coursera.org/share/386b5815464f7d500c70008fec6a8772',
    color: '#0ea5e9',
    icon: '♾️',
  },
  {
    title: 'Master Generative AI & Generative AI Tools (ChatGPT & more)',
    issuer: 'Infosys Springboard',
    date: 'Aug 2025',
    link: 'https://drive.google.com/file/d/1sQ19MJ5cm0ZEkA0cg9fROQ5vnXqZjiAq/view?usp=sharing',
    color: 'var(--accent-primary)',
    icon: '🤖',
  },
  {
    title: 'Computational Theory: Language Principles & Finite Automata',
    issuer: 'Infosys Springboard',
    date: 'Aug 2025',
    link: 'https://drive.google.com/file/d/1TuwVRd5bhfl16VK3dS5OUHNaOZxV98jJ/view?usp=sharing',
    color: 'var(--accent-secondary)',
    icon: '⚙️',
  },
  {
    title: 'Java Programming',
    issuer: 'IamNeo',
    date: 'May 2025',
    link: 'https://drive.google.com/file/d/12709EX9LaKauxM0pRapa9psPLVTkZ3lk/view?usp=sharing',
    color: 'var(--accent-warm)',
    icon: '☕',
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'Apr 2025',
    link: 'https://drive.google.com/file/d/173tD6xxdD8PNoTHQRKOjDyV1g4jmvbG9/view?usp=sharing',
    color: 'var(--accent-tertiary)',
    icon: '☁️',
  },
];

const Certificates = () => {
  const [ref, inView] = useInView();

  return (
    <section id="certificates" className="section" ref={ref}>
      <div className="container">
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <div className="section-tag">05 — Certificates</div>
          <h2 className="section-title">Credentials</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', marginBottom: '48px' }}>
            Professional certifications validating my technical expertise.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {certs.map((cert, i) => (
            <div key={i}
              className="glass-card"
              style={{
                padding: '28px', position: 'relative', overflow: 'hidden',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(30px)',
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              {/* Background accent */}
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                width: '80px', height: '80px', borderRadius: '50%',
                background: `radial-gradient(circle, ${cert.color}15, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{cert.icon}</div>

              <div style={{
                fontFamily: "var(--font-mono)", fontSize: '10px',
                color: cert.color, letterSpacing: '2px', marginBottom: '8px', textTransform: 'uppercase',
              }}>{cert.issuer} · {cert.date}</div>

              <h3 style={{ fontSize: '15px', fontWeight: 700, lineHeight: 1.5, marginBottom: '20px', color: 'var(--text-primary)' }}>
                {cert.title}
              </h3>

              <a href={cert.link} target="_blank" rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '12px', color: cert.color, textDecoration: 'none',
                  fontFamily: "var(--font-mono)",
                  padding: '7px 14px', borderRadius: '8px',
                  border: `1px solid var(--border-subtle)`,
                  background: 'var(--bg-secondary)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--border-subtle)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.transform = 'none'; }}
              >
                View Certificate →
              </a>

              {/* Bottom border accent */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, ${cert.color}66, transparent)`,
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
