import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export default function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me with laptop"
        />
        <ul className={styles.items}>
          <li className={styles.item}>
            <img src={getImageUrl("about/cursorIcon.png")} alt=" cursor icon" />
            <div className={styles.itemText}>
              <h3>Frontend Developer</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                pariatur voluptates quibusdam? Explicabo asperiores tempora
                suscipit libero inventore, nulla provident dignissimos minus
                voluptates ut, impedit dolores eligendi ipsa maiores neque.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.itemText}>
              <h3>Backend Developer</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                pariatur voluptates quibusdam? Explicabo asperiores tempora
                suscipit libero inventore, nulla provident dignissimos minus
                voluptates ut, impedit dolores eligendi ipsa maiores neque.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img src={getImageUrl("about/uiIcon.png")} alt=" ui icon" />
            <div className={styles.itemText}>
              <h3>UI Design </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                pariatur voluptates quibusdam? Explicabo asperiores tempora
                suscipit libero inventore, nulla provident dignissimos minus
                voluptates ut, impedit dolores eligendi ipsa maiores neque.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
