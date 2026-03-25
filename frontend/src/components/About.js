import React from 'react';
import useInView from '../hooks/useInView';

const About = () => {
  const [ref, inView] = useInView();

  const info = [
    { label: 'University', value: 'Lovely Professional University' },
    { label: 'Degree', value: 'B.Tech — Computer Science' },
    { label: 'CGPA', value: '7.34 / 10' },
    { label: 'Location', value: 'Jalandhar, Punjab' },
    { label: 'Email', value: 'panditanuragsharma90@gmail.com' },
    { label: 'Phone', value: '+91-9410414196' },
  ];

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(40px)', transition: 'all 0.7s ease' }}>
          <div className="section-tag">01 — About Me</div>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start',
          marginTop: '48px'
        }} className="about-grid">
          {/* Left */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateX(-30px)', transition: 'all 0.8s ease 0.1s' }}>
            <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--text-secondary)', marginBottom: '24px' }}>
              I'm a passionate <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Full Stack Developer</span> and
              B.Tech Computer Science student at Lovely Professional University. I love turning complex problems
              into elegant, user-friendly solutions.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--text-secondary)', marginBottom: '24px' }}>
              My journey spans from crafting interactive React frontends to architecting robust Node.js backends
              with MongoDB. I've solved <span style={{ color: 'var(--accent-tertiary)', fontWeight: 600 }}>100+ coding problems</span> on
              LeetCode & GeeksforGeeks and hold a <span style={{ color: 'var(--accent-warm)', fontWeight: 600 }}>4-Star Gold Rating</span> on
              HackerRank.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
              I thrive in collaborative environments and am always eager to learn new technologies. Currently
              seeking opportunities to contribute to impactful projects.
            </p>

            <div style={{ marginTop: '32px', display: 'flex', gap: '12px' }}>
              <a href="https://www.linkedin.com/in/anurag-sharma-02705129b/" target="_blank" rel="noreferrer" className="btn-primary">
                LinkedIn Profile
              </a>
              <a href="https://github.com/Anurag838486" target="_blank" rel="noreferrer" className="btn-secondary">
                GitHub
              </a>
            </div>
          </div>

          {/* Right — Info cards */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateX(30px)', transition: 'all 0.8s ease 0.2s' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {info.map((item, i) => (
                <div key={i} className="glass-card" style={{ padding: '18px', transition: `all 0.3s ease ${i * 0.05}s` }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: '10px', color: 'var(--accent-primary)', letterSpacing: '2px', marginBottom: '6px', textTransform: 'uppercase' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', wordBreak: 'break-all', opacity: 0.9 }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Fun facts */}
            <div className="glass-card" style={{ marginTop: '12px', padding: '20px' }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: '11px', color: 'var(--accent-primary)', letterSpacing: '2px', marginBottom: '14px' }}>
                QUICK FACTS
              </div>
              {['🎯 100+ LeetCode & GFG problems solved', '⭐ 4-Star Gold on HackerRank (Java, C, Python)', '🚀 MERN Stack enthusiast', '☁️ NPTEL Cloud Computing certified'].map((fact, i) => (
                <div key={i} style={{ fontSize: '13px', color: 'var(--text-secondary)', padding: '6px 0', borderBottom: i < 3 ? '1px solid var(--border-subtle)' : 'none' }}>
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
