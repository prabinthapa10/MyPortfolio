import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <Hero />
    </div>
  );
}
