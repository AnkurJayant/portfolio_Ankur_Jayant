import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.pfp}>
        <img
          src={getImageUrl("hero/pfp2.jpg")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ankur!</h1>
        <p className={styles.description}>
        Empowering ideas with code—I'm a full-stack web developer specializing in scalable backend systems, intuitive frontend designs, 
        and cloud-powered solutions. Ready to collaborate? Let's build something extraordinary together!
        </p>
        <a href="mailto:ankurjayant12@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
