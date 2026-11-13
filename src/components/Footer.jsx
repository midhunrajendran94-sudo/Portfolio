import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolioData";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import "../styles/footer.css";

export default function Footer({ locked = false }) {
  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="site-footer" inert={locked ? true : undefined}>
      <div className="container footer-bar">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-title">{profile.title}</p>
        </div>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon />
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>
            Email
          </a>
          {profile.github ? (
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon />
              GitHub
            </a>
          ) : null}
          <button type="button" onClick={toTop}>
            <ArrowUp size={16} strokeWidth={1.5} aria-hidden="true" />
            Back to Top
          </button>
        </div>
      </div>
      <div className="container">
        <p className="copyright">© 2026 Midhun Rajendran. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
