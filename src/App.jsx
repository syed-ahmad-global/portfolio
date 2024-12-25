import React from "react";
import Work from "./components/Work.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Layout from "./components/Layout";
import "./index.css";

function App() {
  return (
    <Layout>
      <main id="main">
        <Hero />
        <Work />
        <Skills />
        <Projects />
      </main>
    </Layout>
  );
}

export default App;
