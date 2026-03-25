import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 1024) return;

    const cursor = cursorRef.current;
    const trailEl = trailRef.current;
    if (!cursor || !trailEl) return;

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    let animId;
    const animate = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.12;
      trail.current.y += (pos.current.y - trail.current.y) * 0.12;
      trailEl.style.left = trail.current.x + 'px';
      trailEl.style.top = trail.current.y + 'px';
      animId = requestAnimationFrame(animate);
    };
    animate();

    const hover = () => cursor.classList.add('hovering');
    const unhover = () => cursor.classList.remove('hovering');

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', hover);
      el.addEventListener('mouseleave', unhover);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        @media (max-width: 1024px) { * { cursor: auto !important; } }
        .custom-cursor {
          position: fixed; width: 8px; height: 8px;
          background: var(--accent-primary); border-radius: 50%;
          pointer-events: none; z-index: 99998;
          transform: translate(-50%, -50%);
          transition: transform 0.1s, background 0.2s;
          box-shadow: var(--shadow-glow);
        }
        .custom-cursor.hovering { transform: translate(-50%, -50%) scale(2.5); background: var(--accent-secondary); }
        .cursor-trail {
          position: fixed; width: 28px; height: 28px;
          border: 1px solid var(--border-glow); border-radius: 50%;
          pointer-events: none; z-index: 99997;
          transform: translate(-50%, -50%);
          transition: border-color 0.2s;
        }
      `}</style>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
};

export default Cursor;
