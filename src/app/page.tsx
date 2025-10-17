import React from "react";
import styles from "./portfolio.module.css";
import DottedBackground from "@/components/DottedBackground";

const PortfolioPage: React.FC = () => {
  return (
    <DottedBackground
      backgroundColor="var(--bg-color, #000000)"
      dotColor="var(--dot-color, rgba(255, 255, 255, 0.15))"
      dotSize={0.9}
      dotSpacing={30}
      animated={true}
      animationSpeed={0.05}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Toch Ratana</h1>

        <div className={styles.intro}>
          {"Hey! I'm Toch Ratana, a 2nd-year IT student at SETEC Institute and also studying Full Stack Web Development at ISTAD."}
        </div>

        <div className={styles.section}>
          <p>
            I&apos;m passionate about <strong>web development</strong>, especially
            frontend with React and Tailwind CSS. I also enjoy exploring backend
            technologies like <strong>Spring Boot</strong> and <strong>PostgreSQL</strong>.
          </p>

          <p>
            Currently, I’m focusing on improving my skills to become a strong
            full-stack developer and working toward building my dream project — an{" "}
            <strong>e-learning platform</strong> to teach coding to beginners 🚀.
          </p>
        </div>

        <div className={styles.section}>
          <p>
            I love sharing my experiences and knowledge online — from coding tips
            to daily life as an IT student. You can find my{" "}
            <a href="#">projects</a> and <a href="#">blogs</a> where I document
            what I learn along the way.
          </p>

          <p>
            In my free time, I enjoy going out alone, taking photos, making{" "}
            <a href="#">YouTube</a> and <a href="#">TikTok</a> videos about my
            student life, and listening to music 🎧.
          </p>

          <p>
            My dream is to secure a great job by my third year, keep improving,
            and inspire others to learn and grow in tech 💪.
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Find me on</p>

          <div className={styles.socialLinks}>
            <a href="https://github.com/tochratana" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.youtube.com/@tochratana" target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a href="https://www.instagram.com/toch.ratana" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@tochratana" target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href="mailto:ratana.toch@camasean.edu.kh">Email</a>
          </div>
        </div>

        <div className={styles.sponsorSection}>
          <p>
            If you enjoy my work or find my content inspiring, feel free to
            support or collaborate with me. Let’s learn and build something
            amazing together 🌟
          </p>

          <div className={styles.sponsorButtons}>
            <a href="#" className={styles.sponsorBtn}>
              Let’s Collaborate
            </a>
            <a href="#" className={`${styles.sponsorBtn} ${styles.secondary}`}>
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </DottedBackground>
  );
};

export default PortfolioPage;
