import { useEffect, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
} from "framer-motion";

import Loader from "./Loader";
import Particles from "./Particles";

interface Props {
  onFinish: () => void;
}

const WORDS = [
  {
    title: "BUILD.",
    status: "Initializing Experience",
  },
  {
    title: "SECURE.",
    status: "Loading Projects",
  },
  {
    title: "DEPLOY.",
    status: "Rendering Portfolio",
  },
];

export default function Preloader({ onFinish }: Props) {
  const progress = useMotionValue(0);

  const [step, setStep] = useState(0);

  const [collapse, setCollapse] = useState(false);

  const [moveLoader, setMoveLoader] = useState(false);

  const [expand, setExpand] = useState(false);

  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    animate(progress, 15, {
      duration: 0.5,
    });

    const timers = [
      // BUILD
      setTimeout(() => {
        setStep(1);

        animate(progress, 45, {
          duration: 0.8,
        });
      }, 900),

      // SECURE
      setTimeout(() => {
        setStep(2);

        animate(progress, 100, {
          duration: 1,
        });
      }, 1900),

      // Particles rush into loader
      setTimeout(() => {
        setCollapse(true);
      }, 3300),

      // Loader moves to center
      setTimeout(() => {
        setMoveLoader(true);
      }, 3850),

      // Line stretches + becomes pill
      setTimeout(() => {
        setExpand(true);
      }, 4250),

      // Pill grows into fullscreen reveal
      setTimeout(() => {
        setReveal(true);
      }, 4500),

      // Remove preloader
      setTimeout(() => {
        onFinish();
      }, 5000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onFinish, progress]);

  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        background: "#050505",
        overflow: "hidden",
        zIndex: 99999,
      }}
    >
      {/* Grain */}

      <motion.div
        animate={{
          opacity: reveal ? 0 : 0.05,
        }}
        transition={{
          duration: 0.35,
        }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle,#fff 1px,transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />

      {/* Particles */}

      <Particles
        collapse={collapse}
        freeze={moveLoader}
      />

      {/* Words */}

      <motion.div
        animate={{
          opacity: moveLoader ? 0 : 1,
          scale: moveLoader ? 0.95 : 1,
          filter: moveLoader ? "blur(8px)" : "blur(0px)",
        }}
        transition={{
          duration: 0.45,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
          pointerEvents: "none",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={WORDS[step].title}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.92,
              letterSpacing: ".35em",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              letterSpacing: ".08em",
            }}
            exit={{
              opacity: 0,
              y: -60,
              scale: 1.08,
              letterSpacing: ".45em",
            }}
            transition={{
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              color: "#F5E8D0",
              margin: 0,
              fontWeight: 700,
              fontSize: "clamp(72px,12vw,180px)",
              userSelect: "none",
            }}
          >
            {WORDS[step].title}
          </motion.h1>
        </AnimatePresence>
      </motion.div>

      {/* Loader */}

      <Loader
        progress={progress}
        status={WORDS[step].status}
        moveToCenter={moveLoader}
        expand={expand}
        reveal={reveal}
      />
    </motion.div>
  );
}