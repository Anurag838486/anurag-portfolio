import React, { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

const Projects = () => {
  const [ref, inView] = useInView();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetch('/api/projects')
      .then(r => r.json())
      .then(data => { setProjects(data); setLoading(false); })
      .catch(() => {
        // Fallback if backend not running
        setProjects([
          {
            id: 1,
            title: "Prashikshan",
            subtitle: "Academic Industry Collaboration Platform",
            description: "Engineered full-stack platform connecting students, educators, and industry users with secure role-based authentication and profile management. Enabled internship and project posting, viewing, and application features.",
            features: [
              "Role-based authentication for students, educators & industry",
              "Internship/project posting with application workflow",
              "RESTful backend with Node.js, Express & MongoDB",
              "Server-side validation and session handling",
            ],
            techStack: ["PHP", "API Integration", "JSON", "HTML", "CSS", "Node.js", "MongoDB"],
            github: "https://github.com/Anurag838486/Prashiskshan",
            date: "Dec 2025",
            category: "Full Stack",
          },
          {
            id: 2,
            title: "Hotel Reservation System",
            subtitle: "Console-Based Booking Management",
            description: "Developed a console-based Hotel Reservation System in C++ with features for room booking, cancellation and viewing all reservations. Implements structured data handling with automated cost calculation.",
            features: [
              "Room booking and cancellation system",
              "Automated cost calculation based on room type & days",
              "Interactive menu-driven interface",
              "Structured data handling with arrays & structures",
            ],
            techStack: ["C++", "Arrays", "Structures", "Menu-Driven Programming"],
            github: "https://github.com/PiyushTomar05/Production-Planning",
            date: "Jul 2025",
            category: "Systems",
          }
        ]);
        setLoading(false);
      });
  }, []);

  const categoryColors = {
    'Full Stack': 'var(--accent-primary)',
    'Systems': 'var(--accent-tertiary)',
    'Backend': 'var(--accent-secondary)',
    'Frontend': 'var(--accent-warm)',
  };

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <div className="section-tag">03 — Projects</div>
          <h2 className="section-title">Things I've Built</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', marginBottom: '48px' }}>
            A collection of projects showcasing my skills and passion for development.
          </p>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-muted)' }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: '13px', letterSpacing: '2px' }}>LOADING PROJECTS...</div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
            {projects.map((project, i) => {
              const color = categoryColors[project.category] || '#00e5ff';
              const isActive = active === project.id;
              return (
                <div key={project.id}
                  className="glass-card"
                  style={{
                    padding: '32px', cursor: 'pointer',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'none' : 'translateY(40px)',
                    transition: `all 0.6s ease ${i * 0.15}s`,
                    border: isActive ? `1px solid var(--accent-primary)` : '1px solid var(--border-subtle)',
                    boxShadow: isActive ? `var(--shadow-glow)` : 'none',
                    position: 'relative', overflow: 'hidden',
                  }}
                  onClick={() => setActive(isActive ? null : project.id)}
                >
                  {/* Top glow line */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: `linear-gradient(90deg, ${color}, transparent)`,
                    opacity: isActive ? 1 : 0, transition: 'opacity 0.3s',
                  }} />

                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <span style={{
                      padding: '4px 12px', borderRadius: '20px', fontSize: '11px',
                      fontFamily: "var(--font-mono)", letterSpacing: '1px',
                      background: 'var(--bg-secondary)', color, border: `1px solid var(--border-subtle)`,
                    }}>{project.category}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: '11px', color: 'var(--text-muted)' }}>
                      {project.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '4px', color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <div style={{ fontSize: '13px', color, marginBottom: '16px', fontWeight: 500 }}>
                    {project.subtitle}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '20px' }}>
                    {project.description}
                  </p>

                  {/* Features (expanded) */}
                  {isActive && (
                    <div style={{ marginBottom: '20px', animation: 'fadeDown 0.3s ease' }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: '10px', color, letterSpacing: '2px', marginBottom: '10px' }}>
                        KEY FEATURES
                      </div>
                      {project.features.map((f, fi) => (
                        <div key={fi} style={{
                          display: 'flex', gap: '8px', alignItems: 'flex-start',
                          fontSize: '13px', color: 'var(--text-secondary)',
                          padding: '5px 0', borderBottom: fi < project.features.length - 1 ? '1px solid var(--border-subtle)' : 'none'
                        }}>
                          <span style={{ color, marginTop: '2px', flexShrink: 0 }}>›</span>
                          {f}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {project.techStack.map((tech, ti) => (
                      <span key={ti} style={{
                        padding: '4px 10px', borderRadius: '20px', fontSize: '11px',
                        fontFamily: "var(--font-mono)",
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)',
                      }}>{tech}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <a href={project.github} target="_blank" rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        fontSize: '13px', color, fontWeight: 600, textDecoration: 'none',
                        padding: '8px 16px', borderRadius: '8px',
                        border: `1px solid var(--border-subtle)`,
                        background: 'var(--bg-secondary)',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--border-subtle)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; }}
                    >
                      ⌥ View Code
                    </a>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: 'auto' }}>
                      {isActive ? '▲ Less' : '▼ More'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: none; } }
        @media (max-width: 768px) {
          #projects .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
