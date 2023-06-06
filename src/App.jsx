import React from "react";
import "./styles/tailwind.css";
import Intro from "./components/intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;
