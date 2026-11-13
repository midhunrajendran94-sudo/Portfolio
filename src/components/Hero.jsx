import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { hero, profile } from "../data/portfolioData";
import { enterProps } from "../utils/motionProps";
import Icon from "./Icon";
import ProfilePhoto from "./ProfilePhoto";
import ResumeButton from "./ResumeButton";
import "../styles/hero.css";

const photoReady = Boolean(profile.photo);

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="hero-gridlines" />
        <div className="hero-shape" />
        <div className="hero-grain" />
      </div>

      <div className="container hero-layout">
        <div className="hero-copy">
          <motion.p className="kicker" {...enterProps(reduce, 0.05)}>
            {hero.greeting}
          </motion.p>
          <motion.h1 id="hero-title" {...enterProps(reduce, 0.12)}>
            <span className="name-line">Midhun</span>
            <span className="name-line text-gradient">Rajendran</span>
          </motion.h1>
          <motion.p className="hero-role" {...enterProps(reduce, 0.2)}>
            {profile.title}
          </motion.p>
          <motion.p className="hero-intro" {...enterProps(reduce, 0.28)}>
            {hero.intro}
          </motion.p>
          <motion.p className="hero-tagline" {...enterProps(reduce, 0.36)}>
            {hero.tagline}
          </motion.p>
          <motion.div className="hero-actions" {...enterProps(reduce, 0.44)}>
            <a className="btn btn-primary" href="#projects">
              View My Projects
            </a>
            <ResumeButton className="btn btn-ghost" />
            <a className="btn btn-text" href="#contact">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div className="hero-visual" {...enterProps(reduce, 0.2)}>
          <div className="portrait-wrap">
            <div className="portrait-glow" aria-hidden="true" />
            <div className="portrait-frame">
              <div className="portrait-inner">
                <ProfilePhoto src={profile.photo} enabled={photoReady} />
              </div>
            </div>
          </div>
          <ul className="float-list">
            {hero.cards.map((card, index) => (
              <li key={card.id} className={`float-card c${index + 1}`}>
                <span className="float-icon">
                  <Icon name={card.icon} size={16} />
                </span>
                <span>{card.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="container">
        <a className="scroll-cue" href="#about">
          <span>Scroll</span>
          <ArrowDown size={16} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
