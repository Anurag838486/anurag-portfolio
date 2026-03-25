import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import useInView from '../hooks/useInView';

const Resume = () => {
  const [ref, inView] = useInView(0.15);

  const trainingData = [
    "Intensive DSA training — arrays, linked lists, stacks, queues, recursion, sorting & searching",
    "Solved structured problem sets implementing core data structures with clean, optimised C++ code",
    "Built a Gym Management System using OOP and file handling — record creation, member search & display"
  ];

  return (
    <section id="resume" className="section" ref={ref} style={{ 
      background: 'var(--bg-primary)', 
      position: 'relative', 
      overflow: 'hidden',
      padding: '100px 0'
    }}>
      {/* Background Glows */}
      <div style={{
        position: 'absolute', top: '20%', left: '15%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0, 229, 255, 0.05) 0%, transparent 70%)',
        zIndex: 0, filter: 'blur(60px)'
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '10%', width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)',
        zIndex: 0, filter: 'blur(60px)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            MY_BACKGROUND
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{ 
              fontSize: 'clamp(40px, 8vw, 70px)', 
              fontWeight: 800, 
              color: 'var(--text-primary)',
              margin: '0 auto 10px',
              letterSpacing: '-1px'
            }}
          >
            Resume
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

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            maxWidth: '1000px',
            margin: '0 auto 60px',
            background: 'rgba(10, 10, 20, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: '40px 50px',
            position: 'relative'
          }}
          className="resume-card"
        >
          <div style={{ marginBottom: '24px' }}>
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '11px', 
              color: 'var(--accent-primary)', 
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              TRAINING
            </span>
            <h3 style={{ 
              fontSize: 'clamp(22px, 4vw, 32px)', 
              fontWeight: 700, 
              color: 'var(--text-primary)',
              marginTop: '12px',
              marginBottom: '16px',
              lineHeight: 1.3
            }}>
              C++ Programming: Mastering Data Structures & Algorithms
            </h3>
            <div style={{
              display: 'inline-block',
              padding: '4px 12px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              fontSize: '11px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)'
            }}>
              Jul' 25
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {trainingData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}
              >
                <ChevronRight size={18} color="var(--accent-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <p style={{ 
                  fontSize: '16px', 
                  color: 'rgba(240, 240, 255, 0.7)', 
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Button */}
        <div style={{ textAlign: 'center' }}>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--accent-primary)44' }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/uc?export=download&id=11-XbhezGAnUcQaa9BCEBXFObMhW7NvCg"
            download="Anurag_Sharma_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 40px',
              background: 'linear-gradient(90deg, #00ffd5, #00d2ff)',
              borderRadius: '50px',
              color: '#05050d',
              fontSize: '16px',
              fontWeight: 700,
              textDecoration: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 20px rgba(0, 229, 255, 0.2)',
              transition: 'box-shadow 0.3s'
            }}
          >
            Download Full Resume ↓
          </motion.a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .resume-card {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Resume;
