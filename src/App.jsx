import { useState, createContext, useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Stack from "./sections/Stack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

// ── Theme Context ──
export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export default function App() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
  );
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Stack />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
