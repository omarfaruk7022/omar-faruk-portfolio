import { Route, Routes } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Projects from "./Pages/Projects";
import ProjectsCard from "./Pages/ProjectsCard";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 20,
          particles: {
            number: {
              value: 88,
              density: {
                enable: true,
                value_area: 700,
              },
            },
            color: {
              value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 15,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1.5,
                opacity_min: 0.15,
                sync: false,
              },
            },
            size: {
              value: 2.5,
              random: false,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.15,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 110,
              color: "#33b1f8",
              opacity: 0.25,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      >
      </Particles>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectCard/:id" element={<ProjectsCard />} />
          <Route path="/aboutMe" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
