import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { revealProps } from "../utils/motionProps";
import { BallotArt, ScanArt, SuiteArt } from "./ProjectArt";
import SectionHeading from "./SectionHeading";
import "../styles/projects.css";

function ProjectLinks({ project }) {
  const links = [
    project.demo ? { href: project.demo, label: "View project" } : null,
    project.repo ? { href: project.repo, label: "Source code" } : null,
  ].filter(Boolean);

  if (links.length === 0) return null;

  return (
    <div className="project-links">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
          <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          index="05"
          title="Featured Projects"
          subtitle="Academic projects that reflect my technical interests and problem-solving approach."
          gradient
        />

        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project-card ${project.visual}`}
              {...revealProps(reduce, index * 0.06)}
            >
              <div className="project-visual">
                {project.visual === "scan" ? (
                  <ScanArt />
                ) : project.visual === "suite" ? (
                  <SuiteArt />
                ) : (
                  <BallotArt />
                )}
              </div>
              <div className="project-body">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <div className="project-details">
                  <p>{project.description}</p>
                  <div>
                    <h4>Technologies</h4>
                    <ul className="tech-list">
                      {project.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ProjectLinks project={project} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
