import { motion } from "framer-motion";
import AuroraBackground from "./AuroraBackground";
import ContactLink from "./ContactLink";
import ContactWordmark from "./ContactWordmark";
import resume from "../../assets/Keshav_Resume.pdf"; // <-- Adjust path if needed

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-12 text-[#F5EBDC] md:py-16"
    >
      <AuroraBackground />

      <div className="relative z-10 mx-auto max-w-[1700px] px-6 md:px-12">
        {/* Top */}

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">
            KeshavDeploys°
          </h2>

          <a
            href="mailto:keshavdeploys@gmail.com"
            className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.3em]"
          >
            LET&apos;S CONNECT

            <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <div
            style={{
              fontFamily: "Instrument Serif",
            }}
          >
            <h1 className="text-4xl leading-none md:text-6xl">
              Timeless
            </h1>

            <h1 className="text-4xl leading-none md:text-6xl">
              Craft.
            </h1>
          </div>
        </motion.div>

        {/* Links */}

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          <ContactLink
            title="EMAIL"
            href="mailto:keshavdeploys@gmail.com"
          />

          <ContactLink
            title="GITHUB"
            href="https://github.com/KeshavDeploys"
          />

          <ContactLink
            title="LINKEDIN"
            href="https://www.linkedin.com/in/keshav-kumar-3649812b5/"
          />

          <ContactLink
            title="RESUME"
            href={resume}
          />
        </div>

        {/* Wordmark */}

        <div className="mt-14">
          <ContactWordmark />
        </div>

        {/* Footer */}

        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-2 text-[11px] text-neutral-500 md:flex-row md:justify-between">
            <p>© 2026 KeshavDeploys</p>

            <p>Designed & Developed by Keshav Kumar</p>
          </div>
        </div>
      </div>
    </section>
  );
}