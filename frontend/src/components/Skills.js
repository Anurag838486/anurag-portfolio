import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';

const skillData = [
  {
    category: 'LANGUAGES',
    skills: [
      { name: 'C++', level: 88 },
      { name: 'Python', level: 75 },
      { name: 'JavaScript', level: 90 },
      { name: 'PHP', level: 65 },
      { name: 'Java', level: 60 },
    ]
  },
  {
    category: 'FRAMEWORKS',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Node.js', level: 82 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
    ]
  },
  {
    category: 'TOOLS & PLATFORMS',
    skills: [
      { name: 'MySQL', level: 72 },
      { name: 'MongoDB', level: 78 },
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
    ]
  },
  {
    category: 'SOFT SKILLS',
    skills: [
      { name: 'DSA & Algorithms', level: 85 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Team Player', level: 80 },
      { name: 'Communication', level: 75 },
    ]
  }
];

const SkillCard = ({ name, level, inView, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 229, 255, 0.1)' }}
    style={{
      background: 'rgba(10, 10, 20, 0.8)',
      padding: '24px 20px',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <div style={{ fontWeight: 700, fontSize: '20px', color: 'var(--text-primary)', marginBottom: '18px' }}>
      {name}
    </div>
    
    <div style={{ height: '5px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '10px', overflow: 'hidden', marginBottom: '10px' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : {}}
        transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
          borderRadius: '10px',
          boxShadow: '0 0 10px var(--accent-primary)aa'
        }}
      />
    </div>
    
    <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
      {level}%
    </div>
  </motion.div>
);

const Skills = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" className="section" ref={ref} style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '12px', 
              color: 'var(--accent-primary)', 
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            WHAT_I_KNOW
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{ 
              fontSize: 'clamp(36px, 6vw, 56px)', 
              fontWeight: 800, 
              color: 'var(--text-primary)',
              margin: '0 auto 10px'
            }}
          >
            My Skills
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={inView ? { width: '80px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ 
              height: '4px', 
              background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
              margin: '0 auto',
              borderRadius: '2px'
            }}
          />
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {skillData.map((cat, ci) => (
            <div key={cat.category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--accent-primary)',
                  letterSpacing: '2px',
                  marginBottom: '24px',
                  textTransform: 'uppercase'
                }}
              >
                {cat.category}
              </motion.h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '20px'
              }}>
                {cat.skills.map((skill, si) => (
                  <SkillCard 
                    key={skill.name} 
                    {...skill} 
                    inView={inView} 
                    delay={ci * 0.1 + si * 0.05} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
