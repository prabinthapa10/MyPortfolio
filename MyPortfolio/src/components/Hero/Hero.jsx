import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Prabin.</h1>{" "}
        <p className={styles.desc}>
          I am full stack developer with no experience. I am a learner. Reach
          out if you like to learn more!
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:prabinmagarg636@gmail.com"
        >
          Contact me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bttomBlur} />
    </section>
  );
}
