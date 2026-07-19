import { motion, MotionValue, useTransform } from "framer-motion";

interface LoaderProps {
  progress: MotionValue<number>;
  status: string;

  moveToCenter: boolean;
  expand: boolean;
  reveal: boolean;
}

export default function Loader({
  progress,
  status,
  moveToCenter,
  expand,
  reveal,
}: LoaderProps) {
  const fill = useTransform(progress, [0, 100], ["0%", "100%"]);
  const percent = useTransform(progress, (v) => `${Math.round(v)}%`);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        x: "-50%",
        bottom: 60,
        overflow: "hidden",
        transformOrigin: "center center",
        zIndex: 20,
      }}
      animate={
        reveal
          ? {
              bottom: "50%",
              width: "100vw",
              height: "100vh",
              y: "50%",
              borderRadius: 0,
            }
          : expand
          ? {
              bottom: "50%",
              width: "100vw",
              height: 160,
              y: "50%",
              borderRadius: 80,
            }
          : moveToCenter
          ? {
              bottom: "50%",
              width: 220,
              height: 2,
              y: "50%",
              borderRadius: 999,
            }
          : {
              bottom: 60,
              width: "min(680px,85vw)",
              height: 2,
              y: 0,
              borderRadius: 999,
            }
      }
      transition={{
        duration: reveal ? 0.45 : 0.7,
        ease: [0.87, 0, 0.13, 1],
      }}
    >
      {/* Status */}

      {!moveToCenter && (
        <motion.div
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 18,
            display: "flex",
            justifyContent: "space-between",
            color: "#E9DCC5",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            pointerEvents: "none",
          }}
        >
          <span>{status}</span>

          <motion.span>{percent}</motion.span>
        </motion.div>
      )}

      {/* Loading Bar */}

      {!moveToCenter && (
        <>
          <motion.div
            style={{
              width: fill,
              height: "100%",
              background: "#F5E8D0",
              borderRadius: 999,
              boxShadow:
                "0 0 12px rgba(245,232,208,.35),0 0 28px rgba(245,232,208,.18)",
            }}
          />

          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            style={{
              position: "absolute",
              left: fill,
              top: -2,
              x: "-50%",
              width: 16,
              height: 6,
              borderRadius: 999,
              background: "#FFF7EA",
              filter: "blur(2px)",
            }}
          />
        </>
      )}

      {/* Morph */}

      {moveToCenter && (
        <motion.div
          animate={{
            background: "#F5E8D0",
          }}
          transition={{
            duration: 0.3,
          }}
          style={{
            width: "100%",
            height: "100%",
            background: "#F5E8D0",
            borderRadius: "inherit",
            boxShadow:
              "0 0 40px rgba(245,232,208,.18),0 0 120px rgba(245,232,208,.08)",
          }}
        />
      )}
    </motion.div>
  );
}