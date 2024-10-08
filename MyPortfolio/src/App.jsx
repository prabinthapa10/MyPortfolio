import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";

export default function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}
