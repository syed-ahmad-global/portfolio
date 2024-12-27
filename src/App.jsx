import React from "react";
import Work from "./components/Work.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Layout from "./components/Layout";

import "./index.css";

function App() {
  return (
    <Layout>
      <Hero />
      <Work />
      <Skills />
      <Projects />
      <Footer />
    </Layout>
  );
}

export default App;
