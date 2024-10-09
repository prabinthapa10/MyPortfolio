import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Hero from "./components/Hero/Hero.jsx";

export default function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <Hero />
    </div>
  );
}
