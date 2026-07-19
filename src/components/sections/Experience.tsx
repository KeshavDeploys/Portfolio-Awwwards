import { experiences } from "../../data/experience";
import ExperienceCard from "../experience/ExperienceCard";
import MobileExperienceCard from "../experience/MobileExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-black py-20 md:py-24 lg:py-32"
    >
      <div className="mx-auto mb-12 max-w-7xl px-6 sm:px-8 md:mb-16 lg:mb-20">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gray-500 sm:text-sm sm:tracking-[0.4em]">
          Career Journey
        </p>

        <h2 className="text-4xl font-bold text-[#F5F2EB] sm:text-5xl lg:text-6xl">
          Experience
        </h2>
      </div>

      {/* Mobile */}
      <div className="space-y-6 lg:hidden">
        {experiences.map((experience, index) => (
          <MobileExperienceCard
            key={`${experience.company}-${experience.year}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>

      {/* Desktop */}
      <div className="mx-auto hidden max-w-[1700px] lg:block">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${experience.year}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>

      <div className="h-16 md:h-24 lg:h-32" />
    </section>
  );
}