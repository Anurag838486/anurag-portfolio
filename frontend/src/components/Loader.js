import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + Math.random() * 15;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'var(--bg-primary)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 99999, fontFamily: "var(--font-mono)"
    }}>
      {/* Animated logo */}
      <div style={{ position: 'relative', marginBottom: '40px' }}>
        <svg width="80" height="80" viewBox="0 0 80 80" style={{ animation: 'spin-slow 4s linear infinite' }}>
          <circle cx="40" cy="40" r="36" fill="none" stroke="var(--border-subtle)" strokeWidth="2" />
          <circle cx="40" cy="40" r="36" fill="none" stroke="var(--accent-primary)" strokeWidth="2"
            strokeDasharray="60 160" strokeLinecap="round" />
        </svg>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontSize: '22px', fontWeight: 700,
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          fontFamily: "var(--font-display)"
        }}>AS</div>
      </div>

      <div style={{ 
        fontSize: '18px', color: 'var(--accent-primary)', fontWeight: 700,
        letterSpacing: '6px', marginBottom: '20px', textAlign: 'center'
      }}>
        JAI SHREE RAM
      </div>

      <div style={{ fontSize: '12px', color: 'var(--text-secondary)', letterSpacing: '4px', marginBottom: '40px' }}>
        WELCOME
      </div>

      {/* Progress bar */}
      <div style={{ width: '200px', height: '2px', background: 'var(--border-subtle)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${Math.min(progress, 100)}%`,
          background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
          borderRadius: '2px', transition: 'width 0.1s ease',
          boxShadow: 'var(--shadow-glow)'
        }} />
      </div>

      <div style={{ marginTop: '12px', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '2px' }}>
        {Math.min(Math.round(progress), 100)}%
      </div>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default Loader;
