import { motion, useReducedMotion } from "framer-motion";
import { about } from "../data/portfolioData";
import { revealProps } from "../utils/motionProps";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import "../styles/about.css";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="section-bg" aria-hidden="true">
        <div className="orb orb-soft" />
      </div>
      <div className="container">
        <SectionHeading
          id="about-title"
          index="02"
          title="About Me"
          subtitle="Getting to know the person behind the code."
        />

        <div className="about-layout">
          <motion.div className="about-copy" {...revealProps(reduce)}>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div className="about-side" {...revealProps(reduce, 0.08)}>
            <article className="objective-card">
              <p className="kicker">Career objective</p>
              <p>{about.objective}</p>
            </article>
            <div className="interest-block">
              <h3 className="subhead">Areas of interest</h3>
              <ul className="interest-list">
                {about.interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="strengths">
          <h3 className="subhead">My Strengths</h3>
          <p className="subhead-note">
            Qualities I bring to learning, academic projects and the way I approach problems.
          </p>
          <ul className="strength-grid">
            {about.strengths.map((item, index) => (
              <motion.li key={item.id} className="strength-card" {...revealProps(reduce, index * 0.05)}>
                <span className="icon-chip">
                  <Icon name={item.icon} />
                </span>
                <h4>{item.title}</h4>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
