import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in crafting responsive, high-performance web and mobile applications with React, React Native, and modern UI frameworks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p> 
                I have experience developing scalable APIs and secure server-side systems with Node.js, Express.js, and robust database integrations.
              </p>
            </div>
          </li> 
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Security Icon" />
            <div className={styles.aboutItemText}>
              <h3>Security Advocate</h3>
              <p>
              I enhance application security by implementing OAuth 2.0, JWT, and OWASP-compliant solutions to mitigate vulnerabilities.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>AI/ML Integration</h3>
              <p>
              I integrate machine learning models into applications and train custom models to deliver intelligent, data-driven solutions.
              </p>
            </div>
          </li>
        </ul>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
      </div>
    </section>
  );
};
