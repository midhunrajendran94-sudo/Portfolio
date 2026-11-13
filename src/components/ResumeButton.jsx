import { Download } from "lucide-react";
import { profile } from "../data/portfolioData";

export default function ResumeButton({ className }) {
  const resumePath = profile.resume || "/resume/Midhun_Rajendran_Resume.pdf";

  return (
    <a
      className={className}
      href={resumePath}
      download="Midhun_Rajendran_Resume.pdf"
      target="_blank"
      rel="noreferrer"
    >
      <Download size={18} strokeWidth={1.5} aria-hidden="true" />
      Download Resume
    </a>
  );
}
