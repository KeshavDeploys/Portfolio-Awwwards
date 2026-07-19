import { motion } from "framer-motion";
import type { Experience } from "../../data/experience";

interface Props {
  experience: Experience;
  index: number;
}

export default function MobileExperienceCard({
  experience,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="w-full px-4"
    >
      <div className="relative overflow-hidden rounded-[30px] border border-[#2E2A22] bg-[#131313] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

        {/* Soft Ambient Glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-[#DEDBC8]/5 blur-3xl" />

        {/* Section Label */}
        <p className="mb-6 text-[11px] uppercase tracking-[0.45em] text-[#7E7A72]">
          Experience
        </p>

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <span className="text-5xl font-bold leading-none text-[#F5F2EB]">
            {experience.year}
          </span>

          <span className="rounded-full border border-[#343434] bg-[#191919] px-3 py-1 text-xs tracking-wider text-[#9B9385]">
            {String(index + 1).padStart(2, "0")}/03
          </span>
        </div>

        {/* Role */}
        <div className="mt-8">
          <h3 className="text-[2rem] font-bold leading-[1.05] text-[#F5F2EB]">
            {experience.role}
          </h3>

          <p className="mt-3 text-[1.55rem] text-[#A9A39A]">
            {experience.company}
          </p>

          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#7E7A72]">
            {experience.description}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-7 flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#363636] bg-[#1A1A1A] px-4 py-2 text-xs font-medium text-[#F5F2EB] transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="my-7 h-px bg-gradient-to-r from-transparent via-[#363636] to-transparent" />

        {/* Highlights */}
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#7E7A72]">
            Highlights
          </p>

          <ul className="mt-5 space-y-4">
            {experience.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 text-[15px] leading-7 text-[#F5F2EB]"
              >
                <span className="mt-[11px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#D8B24C]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}