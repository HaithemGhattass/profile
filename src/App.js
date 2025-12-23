import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./containers/Work";
import Stack from "./containers/Stack";
import About from "./containers/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mesh-bg text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-700">
      <Nav />
      <main class="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <Hero />
        <Work />
        <Stack />
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default App;
