import { motion } from "framer-motion";
import { ArrowUpRight, SquareCode } from "lucide-react";
import type { Project } from "../../data/projects";
import TechStack from "./TechStack";

interface Props {
  project: Project;
  index: number;
}

const accentClasses = {
  amber: {
    border: "group-hover:border-amber-400/40",
    glow: "group-hover:shadow-[0_0_50px_rgba(251,191,36,0.15)]",
    badge: "bg-amber-400/10 text-amber-300 border-amber-400/20",
  },
  purple: {
    border: "group-hover:border-violet-400/40",
    glow: "group-hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]",
    badge: "bg-violet-400/10 text-violet-300 border-violet-400/20",
  },
  emerald: {
    border: "group-hover:border-emerald-400/40",
    glow: "group-hover:shadow-[0_0_50px_rgba(52,211,153,0.15)]",
    badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  },
};

export default function ProjectCard({ project, index }: Props) {
  const accent =
  accentClasses[project.accent as keyof typeof accentClasses];

  return (
    <motion.article
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="group h-full"
    >
      <div
        className={`
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-gradient-to-b
          from-white/[0.03]
          to-white/[0.015]
          p-7
          backdrop-blur
          transition-all
          duration-500
          hover:-translate-y-2
          ${accent.border}
          ${accent.glow}
        `}
      >
        {/* Number */}
        <span className="absolute right-6 top-5 text-6xl font-black text-white/5 select-none">
          {String(project.id).padStart(2, "0")}
        </span>

        {/* Badge */}
        {project.featured && (
          <div
            className={`mb-6 w-fit rounded-full border px-3 py-1 text-xs font-medium ${accent.badge}`}
          >
            Featured
          </div>
        )}

        {/* Title */}
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-white">
            {project.title}
          </h3>

          <p className="mt-1 text-sm text-neutral-400">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="mt-5 flex-1 leading-7 text-neutral-400">
          {project.description}
        </p>

        <TechStack technologies={project.technologies} />

        {/* Links */}
        <div className="mt-8 flex gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white transition hover:border-amber-400/40 hover:bg-white/5"
            >
              <ArrowUpRight size={16} />
              Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/5"
            >
              <SquareCode size={16} />
              GitHub
            </a>
          )}
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-white/10" />

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {project.stats.map((stat: Project["stats"][number]) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}