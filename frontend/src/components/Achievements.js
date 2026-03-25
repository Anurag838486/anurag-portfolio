import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, GraduationCap, Award } from 'lucide-react';
import useInView from '../hooks/useInView';

const achievementData = [
  {
    title: 'Secured Top 5% Rank in NPTEL Exam',
    date: "Mar ' 25",
    icon: <Award size={24} />,
  },
  {
    title: 'Solved 500+ problems on LeetCode (DSA, graph, dynamic programming)',
    date: '2024-2025',
    icon: <Laptop size={24} />,
    active: true
  },
  {
    title: 'Earned 4+ certifications including NPTEL Cloud Computing and LPU DSA program',
    date: '2025',
    icon: <GraduationCap size={24} />,
  }
];

const AchievementRow = ({ title, date, icon, active, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
    whileHover={{ x: 10, scale: 1.01, background: 'rgba(255, 255, 255, 0.03)' }}
    style={{
      background: 'rgba(10, 10, 20, 0.4)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '20px',
      padding: '24px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      marginBottom: '20px',
      boxShadow: active ? '0 10px 40px rgba(0, 0, 0, 0.4), 0 0 20px var(--accent-primary)22' : 'none',
      transition: 'all 0.3s ease'
    }}
  >
    {/* Icon Wrapper */}
    <div style={{
      width: '56px', height: '56px', borderRadius: '50%',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: active ? 'var(--accent-primary)' : 'var(--text-secondary)',
      background: 'rgba(255, 255, 255, 0.02)',
      flexShrink: 0
    }}>
      {icon}
    </div>

    {/* Text Content */}
    <div>
      <h3 style={{
        fontSize: 'clamp(16px, 3vw, 18px)',
        fontWeight: 700,
        color: 'var(--text-primary)',
        margin: '0 0 6px 0',
        letterSpacing: '0.3px'
      }}>
        {title}
      </h3>
      <div style={{
        fontSize: '11px',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        {date}
      </div>
    </div>
  </motion.div>
);

const Achievements = () => {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="achievements" className="section" ref={ref} style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
              letterSpacing: '5px',
              textTransform: 'uppercase',
              marginBottom: '16px',
              opacity: 0.8
            }}
          >
            MILESTONES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'clamp(40px, 8vw, 68px)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              margin: '0 auto 15px',
              letterSpacing: '-1px'
            }}
          >
            Achievements
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

        {/* List of Achievement Rows */}
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {achievementData.map((item, idx) => (
            <AchievementRow
              key={idx}
              {...item}
              index={idx}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
