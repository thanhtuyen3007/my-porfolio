import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";

function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);
  return (
    <div className="App">
      <Header ref={headerRef} />

      <main style={{ marginTop: headerHeight }}>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
