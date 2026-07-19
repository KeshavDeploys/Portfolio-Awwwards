import { motion } from "framer-motion";

const text = "ZWEILIOUS";

export default function ContactWordmark() {
  return (
    <motion.div
      className="select-none overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Giant Wordmark */}

      <div className="-mx-2 overflow-hidden flex justify-center">
        <h1
          className="uppercase leading-[0.9] text-[#F5EBDC] flex"
          style={{
            fontFamily: "Anton",
            fontSize: "clamp(4rem, 10vw, 8rem)",
            letterSpacing: "0.02em",
          }}
        >
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 80,
                  filter: "blur(8px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                },
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* Japanese Signature */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.7,
          duration: 0.6,
        }}
        className="mt-4 text-center"
      >
        <p
          className="text-sm md:text-base opacity-80"
          style={{
            fontFamily: "Instrument Serif",
          }}
        >
          蝶の舞を喰らえ！
        </p>
      </motion.div>
    </motion.div>
  );
}