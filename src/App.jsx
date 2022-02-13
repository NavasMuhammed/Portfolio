import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/into/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Work from "./Components/work/Work";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import Menu from "./Components/menu/Menu";
import "./app.scss";
import { useState } from "react";
import ParticleBackground from "./Components/ParticleBackground";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ParticleBackground/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
