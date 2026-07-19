import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <section id="about" className="relative h-[250vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center justify-center px-6">
        <div className="max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-sm uppercase tracking-[0.35em] text-zinc-500"
          >
            uwu - ABOUT ME - uwu
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium leading-tight text-[#F5EBDC] sm:text-5xl lg:text-6xl"
          >
            <Typewriter
              words={[
                "Cloud Security Engineer building secure cloud infrastructure.\nDeveloping cloud-native applications and securing containerized workloads.\nFocused on scalable, resilient, and real-world solutions.",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={10}
              deleteSpeed={0}
              delaySpeed={999999}
            />
          </motion.p>
        </div>
      </div>
    </section>
  );
}