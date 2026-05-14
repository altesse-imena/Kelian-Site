import React, { useEffect, useRef } from 'react';

const StarfieldCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H, stars = [], shoots = [], frame = 0;
    const MAX_SHOOTS = 7;
    let animationId;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      buildStars();
    }

    function buildStars() {
      stars = [];
      const n = Math.floor((W * H) / 820);
      for (let i = 0; i < n; i++) {
        const t = Math.random();
        let r, ba, pa;
        if (t < 0.70) {
          r = Math.random() * 0.55 + 0.1;
          ba = Math.random() * 0.22 + 0.04;
          pa = 0.12;
        } else if (t < 0.92) {
          r = Math.random() * 0.75 + 0.3;
          ba = Math.random() * 0.28 + 0.08;
          pa = 0.22;
        } else {
          r = Math.random() * 0.9 + 0.5;
          ba = Math.random() * 0.38 + 0.14;
          pa = 0.38;
        }
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r,
          ba,
          pa,
          sp: Math.random() * 0.009 + 0.0015,
          off: Math.random() * Math.PI * 2,
          gold: Math.random() > 0.84,
          warm: Math.random() > 0.91
        });
      }
    }

    function drawStar(s) {
      const a = Math.max(0, s.ba + s.pa * Math.sin(frame * s.sp + s.off) * 0.5);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.gold 
        ? `rgba(201,168,76,${a})` 
        : s.warm 
        ? `rgba(230,220,200,${a})` 
        : `rgba(210,222,240,${a})`;
      ctx.fill();
    }

    function spawnShoot() {
      if (shoots.length >= MAX_SHOOTS) return;
      const e = Math.floor(Math.random() * 4);
      let sx, sy;
      if (e === 0) {
        sx = Math.random() * W;
        sy = -8;
      } else if (e === 1) {
        sx = W + 8;
        sy = Math.random() * H;
      } else if (e === 2) {
        sx = Math.random() * W;
        sy = H + 8;
      } else {
        sx = -8;
        sy = Math.random() * H;
      }
      const ba = Math.atan2(H * 0.5 - sy, W * 0.5 - sx);
      const angle = ba + (Math.random() - 0.5) * 1.3;
      const spd = 3 + Math.random() * 5;
      shoots.push({
        x: sx,
        y: sy,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        tail: 60 + Math.random() * 120,
        alpha: 0,
        life: 0,
        maxLife: 55 + Math.random() * 55,
        phase: 'in',
        gold: Math.random() > 0.45
      });
    }

    function drawShoot(s) {
      const len = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
      const tx = s.x - (s.vx / len) * s.tail;
      const ty = s.y - (s.vy / len) * s.tail;
      const col = s.gold 
        ? `rgba(201,168,76,${s.alpha})` 
        : `rgba(220,232,250,${s.alpha})`;
      const g = ctx.createLinearGradient(tx, ty, s.x, s.y);
      g.addColorStop(0, 'rgba(0,0,0,0)');
      g.addColorStop(1, col);
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(s.x, s.y);
      ctx.strokeStyle = g;
      ctx.lineWidth = s.gold ? 1.2 : 0.9;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.gold ? 1.5 : 1.1, 0, Math.PI * 2);
      ctx.fillStyle = col;
      ctx.fill();
    }

    let nextSpawn = 90;

    function loop() {
      ctx.clearRect(0, 0, W, H);
      frame++;
      stars.forEach(s => drawStar(s));

      if (frame >= nextSpawn && shoots.length < MAX_SHOOTS) {
        spawnShoot();
        nextSpawn = frame + 80 + Math.floor(Math.random() * 240);
      }

      for (let i = shoots.length - 1; i >= 0; i--) {
        const s = shoots[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life++;

        if (s.phase === 'in') {
          s.alpha = Math.min(0.7, s.alpha + 0.07);
          if (s.alpha >= 0.68) s.phase = 'hold';
        } else if (s.phase === 'hold') {
          if (s.life > s.maxLife * 0.58) s.phase = 'out';
        } else {
          s.alpha = Math.max(0, s.alpha - 0.038);
        }

        if (s.alpha > 0.01) drawShoot(s);

        if (s.life > s.maxLife || 
            (s.phase === 'out' && s.alpha <= 0) || 
            s.x < -250 || s.x > W + 250 || 
            s.y < -250 || s.y > H + 250) {
          shoots.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(loop);
    }

    window.addEventListener('resize', resize);
    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} id="canvas" />;
};

export default StarfieldCanvas;
