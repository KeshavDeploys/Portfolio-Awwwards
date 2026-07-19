import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import AwwwardsMenu from "./AwwwardsMenu";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header className="absolute left-1/2 top-4 z-40 hidden w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2 px-2 md:block md:top-6 md:px-0">
        <nav className="rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-xl sm:px-6">
          <ul className="flex items-center justify-between gap-4 overflow-x-auto whitespace-nowrap text-xs sm:text-sm">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="cursor-pointer text-[#E1E0CC]/80 transition-colors duration-300 hover:text-[#E1E0CC]"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Hamburger */}
      <motion.button
        onClick={() => setMenuOpen((prev) => !prev)}
        whileTap={{ scale: 0.9 }}
        className="fixed right-5 top-5 z-[1000] flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl md:hidden"
      >
        <AnimatePresence mode="wait">
          {menuOpen ? (
            <motion.div
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-[#E1E0CC]" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} className="text-[#E1E0CC]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu */}
      <AwwwardsMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}