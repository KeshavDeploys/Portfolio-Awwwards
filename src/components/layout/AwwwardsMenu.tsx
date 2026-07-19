import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import resume from "../../assets/Keshav_Resume.pdf";
import { menuItems } from "./menu";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AwwwardsMenu({
  open,
  onClose,
}: Props) {
  const handleClick = (id: string) => {
    if (id === "resume") {
      window.open(resume, "_blank");
      onClose();
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[999] overflow-hidden bg-black/95 backdrop-blur-2xl md:hidden"
        >

          {/* Moving Glow */}
          <motion.div
            className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E1E0CC]/10 blur-[120px]"
            animate={{
              x: [0, 60, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          {/* Close */}
          <motion.button
            onClick={onClose}
            whileHover={{
              rotate: 90,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
              absolute
              right-6
              top-6
              z-10
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
            "
          >
            <X
              size={26}
              className="text-[#E1E0CC]"
            />
          </motion.button>


          {/* Menu */}
          <div className="flex h-full flex-col justify-center px-8">

            {menuItems.map((item,index)=>(
              <motion.button
                key={item.id}
                onClick={()=>handleClick(item.id)}

                initial={{
                  opacity:0,
                  y:60,
                }}

                animate={{
                  opacity:1,
                  y:0,
                }}

                exit={{
                  opacity:0,
                  y:40,
                }}

                transition={{
                  duration:.6,
                  delay:index*.08,
                  ease:[0.16,1,0.3,1],
                }}

                className="
                group
                relative
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-8
                text-left
                overflow-hidden
                "
              >

                {/* Hover Glow */}
                <motion.div
                  className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-[#E1E0CC]/10
                  via-transparent
                  to-transparent
                  "
                  transition={{
                    duration:.5,
                  }}
                  whileHover={{
                    translateX:"100%",
                  }}
                />


                <div className="relative flex items-center gap-5">


                  <span
                    className="
                    text-xs
                    tracking-[0.4em]
                    text-white/30
                    transition-all
                    duration-300
                    group-hover:text-[#E1E0CC]
                    "
                  >
                    {item.number}
                  </span>


                  <span
                    className="
                    relative
                    text-[clamp(2.5rem,9vw,5rem)]
                    font-semibold
                    uppercase
                    tracking-[-0.06em]
                    text-[#E1E0CC]
                    transition-all
                    duration-500
                    group-hover:tracking-[-0.02em]
                    group-hover:translate-x-3
                    "
                  >
                    {item.label}


                    {/* underline */}
                    <span
                      className="
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      w-0
                      bg-[#E1E0CC]
                      transition-all
                      duration-500
                      group-hover:w-full
                      "
                    />

                  </span>

                </div>


                <ArrowUpRight
                  size={36}
                  className="
                  relative
                  text-[#E1E0CC]
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:opacity-100
                  "
                />


              </motion.button>
            ))}

          </div>


          {/* Footer */}
          <motion.p
            initial={{
              opacity:0,
            }}
            animate={{
              opacity:1,
            }}
            transition={{
              delay:.8,
            }}
            className="
            absolute
            bottom-8
            left-8
            text-[11px]
            uppercase
            tracking-[0.5em]
            text-white/25
            "
          >
            KESHAV DEPLOYS
          </motion.p>


        </motion.div>
      )}
    </AnimatePresence>
  );
}