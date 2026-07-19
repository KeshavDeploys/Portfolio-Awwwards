import { motion } from "framer-motion";
import { useMemo } from "react";

interface Props {
  collapse: boolean;
  freeze: boolean;
  count?: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  rotate: number;
  delay: number;
  duration: number;
  driftX: number;
  driftY: number;
  opacity: number;
  targetX: number;
}

export default function Particles({
  collapse,
  freeze,
  count = 40,
}: Props) {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,

        x: Math.random() * 100,
        y: Math.random() * 100,

        width: 8 + Math.random() * 10,
        height: 2,

        rotate: Math.random() * 180,

        delay: Math.random() * 2,

        duration: 4 + Math.random() * 2,

        driftX: (Math.random() - 0.5) * 70,
        driftY: (Math.random() - 0.5) * 50,

        opacity: 0.25 + Math.random() * 0.55,

        // Random destination on loader line
        targetX: Math.random() * 320 - 160,
      })),
    [count]
  );

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.width,
            height: p.height,
            borderRadius: 999,
            background: "#F5E8D0",
            rotate: `${p.rotate}deg`,
            opacity: p.opacity,
            pointerEvents: "none",
            willChange: "transform",
            boxShadow:
              "0 0 8px rgba(245,232,208,.28),0 0 24px rgba(245,232,208,.10)",
          }}
          initial={{
            x: 0,
            y: 0,
            scale: 1,
          }}
          animate={
            collapse
              ? {
                  x: `calc(50vw - ${p.x}vw + ${p.targetX}px)`,
                  y: `calc(50vh - ${p.y}vh)`,

                  rotate: 0,

                  scale: 0.15,

                  opacity: 0,
                }
              : freeze
              ? {
                  x: 0,
                  y: 0,
                  opacity: p.opacity,
                }
              : {
                  x: [
                    0,
                    p.driftX,
                    -p.driftX * 0.7,
                    0,
                  ],
                  y: [
                    0,
                    p.driftY,
                    -p.driftY * 0.5,
                    0,
                  ],
                  opacity: [
                    p.opacity,
                    1,
                    p.opacity,
                  ],
                }
          }
          transition={
            collapse
              ? {
                  duration: 0.9,
                  ease: [0.76, 0, 0.24, 1],
                }
              : freeze
              ? {
                  duration: 0.2,
                }
              : {
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </>
  );
}