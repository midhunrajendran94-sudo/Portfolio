import { motion, useReducedMotion } from "framer-motion";
import { training } from "../data/portfolioData";
import { revealProps } from "../utils/motionProps";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import "../styles/training.css";

export default function Training() {
  const reduce = useReducedMotion();

  return (
    <section id="training" className="section training" aria-labelledby="training-title">
      <div className="container">
        <SectionHeading
          id="training-title"
          index="06"
          title="Training & Workshops"
          subtitle="Learning beyond the classroom."
        />

        <div className="training-grid">
          {training.map((item, index) => (
            <motion.article key={item.id} className="training-card" {...revealProps(reduce, index * 0.04)}>
              <div className="training-top">
                <span className="icon-chip">
                  <Icon name={item.icon} />
                </span>
                <span className="training-year">{item.year}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.provider}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
