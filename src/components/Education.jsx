import { motion, useReducedMotion } from "framer-motion";
import { education } from "../data/portfolioData";
import { revealProps } from "../utils/motionProps";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import "../styles/education.css";

export default function Education() {
  const reduce = useReducedMotion();

  return (
    <section id="education" className="section education" aria-labelledby="education-title">
      <div className="section-bg" aria-hidden="true">
        <div className="orb orb-edu" />
      </div>
      <div className="container">
        <SectionHeading
          id="education-title"
          index="03"
          title="Education"
          subtitle="My academic journey."
        />

        <ol className="timeline">
          {education.map((item, index) => (
            <motion.li key={item.id} className="timeline-item" {...revealProps(reduce, index * 0.06)}>
              <article className="edu-card">
                <span className="icon-chip">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <p className="edu-period">{item.period}</p>
                  <h3>
                    {item.level} – {item.program}
                  </h3>
                  <p className="edu-school">{item.school}</p>
                  <p className="edu-result">
                    <span>{item.resultLabel}</span>
                    {item.result}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
