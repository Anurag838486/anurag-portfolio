import React from 'react';
import useInView from '../hooks/useInView';

const educationData = [
  {
    institution: 'Lovely Professional University',
    location: 'Jalandhar, Punjab',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    score: 'CGPA: 7.34',
    period: 'Aug 2023 — Present',
    status: 'ongoing',
    icon: '🎓',
    color: 'var(--accent-primary)',
    highlights: ['MERN Stack Development', 'Data Structures & Algorithms', 'System Design'],
  },
  {
    institution: "St. Mary's Convent School",
    location: 'Agra, Uttar Pradesh',
    degree: 'Intermediate (Class XII)',
    score: '66%',
    period: 'Apr 2022 — Mar 2023',
    status: 'completed',
    icon: '📚',
    color: 'var(--accent-secondary)',
    highlights: ['Physics', 'Chemistry', 'Mathematics'],
  },
  {
    institution: "St. Mary's Convent School",
    location: 'Agra, Uttar Pradesh',
    degree: 'Secondary (Class X)',
    score: '86%',
    period: 'Apr 2020 — Mar 2021',
    status: 'completed',
    icon: '🏫',
    color: 'var(--accent-tertiary)',
    highlights: ['Science', 'Mathematics', 'English'],
  },
];

const Education = () => {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="section" ref={ref} style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <div className="section-tag">04 — Education</div>
          <h2 className="section-title">Academic Journey</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', marginBottom: '48px' }}>
            My educational background that shaped my technical foundation.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '40px' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '15px', top: 0, bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), var(--accent-tertiary))',
            opacity: inView ? 0.2 : 0, transition: 'opacity 0.5s ease 0.3s',
          }} />

          {educationData.map((edu, i) => (
            <div key={i} style={{
              position: 'relative', marginBottom: i < educationData.length - 1 ? '40px' : 0,
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateX(-30px)',
              transition: `all 0.6s ease ${i * 0.15}s`,
            }}>
              {/* Timeline dot */}
              <div style={{
                position: 'absolute', left: '-33px', top: '20px',
                width: '16px', height: '16px', borderRadius: '50%',
                background: edu.color,
                boxShadow: `0 0 12px ${edu.color}88`,
                border: '2px solid var(--bg-primary)',
              }} />

              <div className="glass-card" style={{
                padding: '28px',
                borderLeft: `3px solid ${edu.color}44`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '22px' }}>{edu.icon}</span>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>{edu.institution}</h3>
                      {edu.status === 'ongoing' && (
                        <span style={{
                          padding: '3px 10px', borderRadius: '20px', fontSize: '10px',
                          fontFamily: "var(--font-mono)", letterSpacing: '1px',
                          background: 'rgba(16,185,129,0.15)', color: 'var(--accent-tertiary)',
                          border: '1px solid rgba(16,185,129,0.3)',
                        }}>ONGOING</span>
                      )}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: "var(--font-mono)" }}>
                      📍 {edu.location}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontSize: '20px', fontWeight: 800, color: edu.color,
                      fontFamily: "var(--font-mono)",
                    }}>{edu.score}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{edu.period}</div>
                  </div>
                </div>

                <div style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '16px', fontWeight: 500 }}>
                  {edu.degree}
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {edu.highlights.map((h, hi) => (
                    <span key={hi} style={{
                      padding: '4px 12px', borderRadius: '20px', fontSize: '12px',
                      background: 'var(--bg-secondary)', color: edu.color,
                      border: `1px solid var(--border-subtle)`,
                      fontFamily: "var(--font-mono)",
                    }}>{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training section */}
        <div style={{ marginTop: '60px' }}>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: '11px', color: 'var(--accent-warm)',
            letterSpacing: '3px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px',
            opacity: inView ? 1 : 0, transition: 'all 0.6s ease 0.5s',
          }}>
            <span style={{ width: '20px', height: '1px', background: 'var(--accent-warm)' }} />
            TRAINING & CERTIFICATIONS COURSES
          </div>

          <div className="glass-card" style={{
            padding: '28px',
            borderLeft: '3px solid #f59e0b44',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.55s',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '4px' }}>
                  Data Structures and Algorithms Using C++
                </h3>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Intensive Training Program</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '13px', color: 'var(--accent-warm)', fontFamily: "var(--font-mono)" }}>Jun — Jul 2025</div>
                <a href="https://drive.google.com/file/d/1WjT7a7g59YdcB5R8b-onOiE706UMFT1i/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  style={{ fontSize: '12px', color: 'var(--accent-primary)', textDecoration: 'none' }}>
                  View Certificate →
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Arrays', 'Stacks', 'Queues', 'Trees', 'Graphs', 'Sorting', 'Recursion', 'Dynamic Programming', 'STL', 'Memory Management'].map((t, i) => (
                <span key={i} style={{
                  padding: '3px 10px', borderRadius: '20px', fontSize: '11px',
                  background: 'var(--bg-secondary)', color: 'var(--accent-warm)',
                  border: '1px solid var(--border-subtle)',
                  fontFamily: "var(--font-mono)",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
