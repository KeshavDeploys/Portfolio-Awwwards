import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-black">

      {/* Subtle Paper / Film Grain */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.055]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />


      {/* Minimal Infrastructure Network */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.14]"
        viewBox="0 0 1200 700"
        fill="none"
      >

        {/* Left Structure */}
        <path
          d="M80 140 L210 80 L310 160"
          stroke="#F5EBDC"
          strokeWidth="1"
        />

        <path
          d="M210 80 L250 260"
          stroke="#F5EBDC"
          strokeWidth="1"
        />


        {/* Right Structure */}
        <path
          d="M930 130 L1050 220 L1120 170"
          stroke="#F5EBDC"
          strokeWidth="1"
        />

        <path
          d="M1050 220 L990 340"
          stroke="#F5EBDC"
          strokeWidth="1"
        />


        {/* Bottom Hidden Network */}
        <path
          d="M420 520 L560 470 L720 520"
          stroke="#F5EBDC"
          strokeWidth="1"
        />


        {/* Nodes */}
        <g fill="#F5EBDC">

          <circle cx="80" cy="140" r="3" />
          <circle cx="210" cy="80" r="3" />
          <circle cx="310" cy="160" r="3" />

          <circle cx="930" cy="130" r="3" />
          <circle cx="1050" cy="220" r="3" />
          <circle cx="1120" cy="170" r="3" />

          <circle cx="420" cy="520" r="3" />
          <circle cx="560" cy="470" r="3" />
          <circle cx="720" cy="520" r="3" />

        </g>

      </svg>



      {/* Floating Technical Markers */}

      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          left-12
          top-32
          text-[10px]
          uppercase
          tracking-[0.5em]
          text-[#F5EBDC]
        "
      >
        CLOUD_NODE_01
      </motion.div>


      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 1,
        }}
        className="
          absolute
          right-14
          bottom-36
          text-[10px]
          uppercase
          tracking-[0.5em]
          text-[#F5EBDC]
        "
      >
        SECURITY_LAYER
      </motion.div>



      {/* Soft Edge Depth */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/20
          via-transparent
          to-black/80
        "
      />

    </div>
  );
}