import { motion, useReducedMotion } from "framer-motion";
import { learning, skillGroups } from "../data/portfolioData";
import { revealProps } from "../utils/motionProps";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import "../styles/skills.css";

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          index="04"
          title="Technical Skills"
          subtitle="Technologies and tools I have worked with and continue to explore."
        />

        <div className="bento">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.id}
              className={`skill-card ${group.span} ${group.tone}`}
              {...revealProps(reduce, index * 0.05)}
            >
              <span className="icon-chip">
                <Icon name={group.icon} />
              </span>
              <h3>{group.title}</h3>
              <ul className="skill-items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.aside className="learning-panel" {...revealProps(reduce, 0.08)}>
          <div>
            <p className="kicker">Currently learning / exploring</p>
            <h3 className="subhead">A separate track from the skills above</h3>
            <p>
              These are areas I am studying now. They are not presented as tools I have already mastered.
            </p>
          </div>
          <ul className="learning-list">
            {learning.map((item) => (
              <li key={item.id}>
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
