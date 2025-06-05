import React, { useEffect, useRef } from 'react';

const NetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const nodes: { x: number; y: number; vx: number; vy: number; targetX: number; targetY: number }[] = [];
    const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 25000);
    const connectionDistance = 150;
    const repulsionRadius = 100;
    const repulsionStrength = 0.5;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: 0,
        targetX: Math.random() * canvas.width,
        targetY: Math.random() * canvas.height
      });
    }

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.fillStyle = '#1e1b4b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (Math.random() < 0.01) {
          node.targetX = Math.random() * canvas.width;
          node.targetY = Math.random() * canvas.height;
        }

        const dx = node.targetX - node.x;
        const dy = node.targetY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 1) {
          node.vx += (dx / distance) * 0.05;
          node.vy += (dy / distance) * 0.05;
        }

        const mouseDx = node.x - mouseRef.current.x;
        const mouseDy = node.y - mouseRef.current.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDistance < repulsionRadius) {
          const force = (repulsionRadius - mouseDistance) / repulsionRadius * repulsionStrength;
          node.vx += (mouseDx / mouseDistance) * force;
          node.vy += (mouseDy / mouseDistance) * force;
        }

        node.vx *= 0.95;
        node.vy *= 0.95;
        node.x += node.vx;
        node.y += node.vy;

        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j];
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            const opacity = (1 - distance / connectionDistance) * 0.15;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ 
        background: 'linear-gradient(to bottom right, #312e81, #581c87, #1e1b4b)'
      }}
    />
  );
};

export default NetworkBackground;