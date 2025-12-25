import { useRef } from "react";

import Nav from "../components/Nav";
import Hero from "../containers/Hero";
import Work from "../containers/Work";
import Stack from "../containers/Stack";
import About from "../containers/About";
import Footer from "../containers/Footer";

const HomePage = () => {
  const workRef = useRef(null);

  const scrollToWork = () => {
    workRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="mesh-bg text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-700">
      <Nav />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <Hero onViewWork={scrollToWork} />
        <Work ref={workRef} />
        <Stack />
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default HomePage;
