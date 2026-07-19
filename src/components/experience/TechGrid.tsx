import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const logs = [
  {
    command: "prisma scan production",
    output: "✔ Security Score: 96% · 128 Resources",
  },
  {
    command: "wiz audit --cloud",
    output: "✔ No Critical Findings",
  },
  {
    command: "docker compose ps",
    output: "✔ All Services Running",
  },
];

export default function TechGrid() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const current = logs[step].command;

    if (typed.length < current.length) {
      const t = setTimeout(() => {
        setTyped(current.slice(0, typed.length + 1));
      }, 28);

      return () => clearTimeout(t);
    }

    const next = setTimeout(() => {
      setTyped("");
      setStep((prev) => (prev + 1) % logs.length);
    }, 2200);

    return () => clearTimeout(next);
  }, [typed, step]);

  return (
    <div className="relative h-[165px] overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B]">
      {/* Ambient Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent"
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <motion.div
            className="h-2.5 w-2.5 rounded-full bg-amber-400"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
          <span className="text-xs uppercase tracking-[0.25em] text-white/50">
            AWS Production
          </span>
        </div>

        <span className="font-mono text-[11px] text-emerald-400">
          ● LIVE
        </span>
      </div>

      {/* Console */}
      <div className="space-y-4 px-5 py-5 font-mono text-[14px]">
        {/* Current command */}
        <div className="flex items-center text-white">
          <span className="mr-2 text-amber-300">$</span>

          <span>{typed}</span>

          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="ml-1 text-amber-300"
          >
            █
          </motion.span>
        </div>

        {/* Previous Result */}
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="pl-6 text-emerald-300"
        >
          {logs[(step + logs.length - 1) % logs.length].output}
        </motion.div>

        {/* Status */}
        <div className="flex justify-between pl-6 text-xs text-white/35">
          <span>Last Scan • Just Now</span>
          <span>Cloud Security</span>
        </div>
      </div>
    </div>
  );
}