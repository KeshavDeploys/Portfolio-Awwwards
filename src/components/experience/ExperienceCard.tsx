import { motion } from "framer-motion";
import type { Experience } from "../../data/experience";
import TechGrid from "./TechGrid";

interface Props {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      style={{
        zIndex: index + 1,
      }}
      className="sticky top-10 mb-10 px-6"
    >
      <div className="overflow-hidden rounded-[36px] border border-[#353535] bg-[#111111] shadow-[0_35px_90px_rgba(0,0,0,0.45)]">
        <div className="grid min-h-[500px] lg:grid-cols-[360px_1fr]">
          {/* LEFT */}
          <div
            className="flex flex-col justify-between border-r border-[#2A2A2A] p-12"
            style={{
              background:
                "linear-gradient(180deg,#141414 0%,#111111 100%)",
            }}
          >
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#7A7A7A]">
                Experience
              </p>

              <h2 className="mt-6 text-5xl font-bold leading-none text-[#F5F2EB]">
                {experience.role}
              </h2>

              <p className="mt-5 text-3xl text-[#8F8F8F]">
                {experience.company}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-3">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#454545] bg-[#1A1A1A] px-4 py-2 text-sm text-[#F5F2EB] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 h-px w-20 bg-gradient-to-r from-amber-300 to-transparent" />

              <p className="mt-8 text-base leading-8 text-[#9B9B9B]">
                {experience.description}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative overflow-hidden bg-[#151515]">
            {/* Warm Glow */}
            <div className="absolute right-[-80px] top-[-80px] h-[320px] w-[320px] rounded-full bg-amber-400/10 blur-[130px]" />

            <div className="absolute bottom-[-120px] left-[35%] h-[260px] w-[260px] rounded-full bg-amber-300/5 blur-[120px]" />

            {/* Grid Background */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
                `,
                backgroundSize: "44px 44px",
              }}
            />

            {/* Noise */}
            <div
              className="absolute inset-0 opacity-[0.025] mix-blend-soft-light"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,.5) .8px, transparent .8px)",
                backgroundSize: "10px 10px",
              }}
            />

            {/* Year Watermark */}
            <div className="absolute right-8 top-3 select-none text-[190px] font-black tracking-tight text-white/[0.045]">
              {experience.year}
            </div>

            {/* Content */}
            <div className="relative flex h-full flex-col justify-between p-12">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#7A7A7A]">
                  Highlights
                </p>

                <ul className="mt-10 space-y-5">
                  {experience.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 text-2xl text-[#F5F2EB]"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Section */}
              <div className="mt-10 space-y-8">
                <TechGrid />

                <div className="flex items-end justify-between">
                  <span className="text-6xl font-bold text-[#F5F2EB]">
                    {experience.year}
                  </span>

                  <span className="text-[#6D6D6D] text-lg tracking-widest">
                    0{index + 1}/03
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}