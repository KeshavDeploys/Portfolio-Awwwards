import { ArrowRight, Download } from "lucide-react";
import Navbar from "../layout/Navbar";
import resume from "../../assets/Keshav_Resume.pdf";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="h-screen bg-black p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black md:rounded-[2rem]">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/10 to-black/75" />

        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="absolute inset-x-0 bottom-8 z-20 px-6 md:bottom-12 md:px-12 lg:px-16">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            {/* Left */}
            <div className="lg:col-span-8">
              <h1
                className="font-medium leading-[0.82] tracking-[-0.07em]"
                style={{ color: "#E1E0CC" }}
              >
                <span className="block text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[11vw]">
                  Keshav
                </span>

                <span className="block text-[14vw] sm:text-[13vw] md:text-[11vw] lg:text-[9vw] xl:text-[8vw]">
                  Deploys.
                </span>
              </h1>
            </div>

            {/* Right */}
            <div className="lg:col-span-4">
              <p className="max-w-sm text-sm leading-relaxed text-[#E1E0CC]/75 md:text-base">
                Cloud Security Engineer focused on AWS, Kubernetes,
                Cloud-Native Security, and modern web development.
                Building secure systems with clean architecture and
                meaningful user experiences.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {/* View Projects */}
                <button
                  onClick={scrollToProjects}
                  className="group flex items-center gap-2 rounded-full bg-[#DEDBC8] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                >
                  View Projects

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                {/* Resume */}
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-[#DEDBC8]/30 bg-black/30 px-6 py-3 text-sm font-semibold text-[#E1E0CC] backdrop-blur-md transition-all duration-300 hover:border-[#DEDBC8] hover:bg-black/50"
                >
                  Resume

                  <Download
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;