import React from "react";
import styles from "./portfolio.module.css";
import DottedBackground from "@/components/DottedBackground";

const PortfolioPage: React.FC = () => {
  return (
    <DottedBackground
      backgroundColor="var(--bg-color, #000000)"
      dotColor="var(--dot-color, rgba(255, 255, 255, 0.15))"
      dotSize={1.5}
      dotSpacing={30}
      animated={true}
      animationSpeed={0.05}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Toch Ratana</h1>

        <div className={styles.intro}>
          {
            "Hey! I'm Anthony Fu, a fanatical open sourceror and design engineer."
          }
        </div>

        <div className={styles.section}>
          <p>
            Working at <a href="#">⛰ NuxtLabs</a> / <a href="#">▲ Vercel</a>
          </p>

          <p>
            Creator of <a href="#">⚡️ Vitest</a> <a href="#">🧑‍🎨 Slidev</a>{" "}
            <a href="#">🦄 VueUse</a> <a href="#">⚡️ UnoCSS</a>{" "}
            <a href="#">🦌 Elk</a> <a href="#">📝 Type Challenges</a>
          </p>

          <p>
            Core team of <a href="#">💚 Vue</a> <a href="#">🌲 Nuxt</a>{" "}
            <a href="#">⚡️ Vite</a>
          </p>

          <p>
            Maintaining <a href="#">📜 Shiki</a> <a href="#">🦄 Twoslash</a>{" "}
            <a href="#">🔧 ESLint Stylistic</a>
          </p>
        </div>

        <div className={styles.section}>
          <p>
            Dreaming up cool ideas and making them come true is where my passion
            lies. I am enthusiastic about building tools that help myself and
            others to be more productive and enjoy the process of crafting. You
            can find my <a href="#">full projects list here</a>.
          </p>

          <p>
            I give <a href="#">talks</a> and write <a href="#">blog posts</a>{" "}
            about open source, coding, etc. Occasionally, I do live coding
            streams on <a href="#">YouTube</a> and <a href="#">哔哩哔哩</a>. I
            am also co-hosting a podcast <a href="#">No Coding Today</a> (in
            Mandarin), talking about various topics around programming. From
            time to time, I make some generative-art, interactivity experiments
            on <a href="#">100.antfu.me</a>.
          </p>

          <p>
            Outside of programming, I enjoy doing photography and traveling. I
            post <a href="#">photos on this page</a>. I also love anime, movies
            and dramas, I am trying to list my <a href="#">media consumption</a>
            . Also, in case you are interested, here are the{" "}
            <a href="#">hardware/software I use</a>.
          </p>

          <p>
            I recently <a href="#">moved to 東京</a>, if you are around, please
            {"reach out and let's have some coffee or work together."}
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Find me on</p>

          <div className={styles.socialLinks}>
            <a href="#">GitHub</a>
            <a href="#">Bluesky</a>
            <a href="#">Threads</a>
            <a href="#">Discord Server</a>
            <a href="#">YouTube</a>
            <a href="#">Instagram</a>
          </div>

          <div className={styles.socialLinks}>
            <a href="#">哔哩哔哩</a>
            <a href="#">中文推</a>
            <a href="#">日本語</a>
          </div>

          <p className={styles.email}>Or mail me at hi@antfu.me</p>

          <p className={styles.inactive}>
            ( Inactive on <a href="#">Mastodon</a> <a href="#">Twitter</a>{" "}
            <a href="#">知乎</a> <a href="#">微博</a> )
          </p>
        </div>

        <div className={styles.sponsorSection}>
          <p>
            If you enjoy my work and find them useful, consider sponsor me and
            the ecosystem to help Open Source sustainable. Thank you!
          </p>

          <div className={styles.sponsorButtons}>
            <a href="#" className={styles.sponsorBtn}>
              Sponsor the Ecosystem
            </a>
            <a href="#" className={`${styles.sponsorBtn} ${styles.secondary}`}>
              How does this work?
            </a>
            <a href="#" className={`${styles.sponsorBtn} ${styles.secondary}`}>
              Sponsor to support Anthony
            </a>
            <a href="#" className={`${styles.sponsorBtn} ${styles.secondary}`}>
              在爱发电上支持我
            </a>
          </div>
        </div>
      </div>
    </DottedBackground>
  );
};

export default PortfolioPage;
