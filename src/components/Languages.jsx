import { motion, useReducedMotion } from "framer-motion";
import { languages } from "../data/portfolioData";
import { revealProps } from "../utils/motionProps";
import SectionHeading from "./SectionHeading";
import "../styles/languages.css";

export default function Languages() {
  const reduce = useReducedMotion();

  return (
    <section id="languages" className="section languages" aria-labelledby="languages-title">
      <div className="container">
        <SectionHeading id="languages-title" index="07" title="Languages" />
        <ul className="lang-grid">
          {languages.map((language, index) => (
            <motion.li key={language.id} {...revealProps(reduce, index * 0.05)}>
              <article className="lang-card">
                <span className="lang-mark" lang={language.lang}>
                  {language.mark}
                </span>
                <div>
                  <h3>{language.name}</h3>
                  <p>{language.level}</p>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
