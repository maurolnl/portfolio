/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <section className={styles.landing_section}>
        <div className={styles.hero_container}>
          <div className={styles.hero_image}>
            <Image 
              src="/me.jpg"
              alt="Logo"
              height={300}
              width={300}
            />
          </div>
          <div className={styles.hero_content}>
            <h1 className={styles.hero_title}>Mauro Leonel Quiroga</h1>
            <p className={styles.hero_description}>Hey, I&apos;m a passionate full-stack Web Developer based on San Luis, Argentina </p>
          </div>
          <nav className={styles.nav_bar}>
            <div className={styles.nav_bar_container}>
              <a className={styles.nav_bar_item} href="#about_me">About Me</a>
              <a className={styles.nav_bar_item} href="#projects">Projects</a>
              <a className={styles.nav_bar_item} href="#skills">Skills</a>
            </div>
          </nav>
        </div>
      </section>

      <section id="hero-section" className="hero-section">
        vos
      </section>
      <section id="projects-section" className="projects-section">
        je
      </section>
      <section id="skills-section"className="skills-section">
        ja
      </section>

    
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
