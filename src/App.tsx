import { useState } from "react";

import Preloader from "./components/preloader/Preloader";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Hobbies from "./components/sections/Hobbies";
import Contact from "./components/contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Preloader onFinish={() => setLoading(false)} />
      )}

      <main
        className={`bg-black text-white transition-opacity duration-700 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
    </>
  );
}

export default App;