import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24"
    >
      {/* Giant Background Text */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          select-none
          whitespace-nowrap
          font-black
          uppercase
          tracking-tight
          text-white/[0.1]
        "
      >
        <h1 className="text-[9rem] md:text-[13rem] lg:text-[18rem] leading-none">
          PROJECTS
        </h1>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            Selected Work
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            Projects
          </h2>

          <p className="mt-4 max-w-2xl text-neutral-400">
            A collection of cloud-native and full-stack projects built using
            AWS, React, Next.js and modern web technologies.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}