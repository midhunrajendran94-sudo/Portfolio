import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../data/portfolioData";
import { revealProps } from "../utils/motionProps";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import "../styles/contact.css";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject.trim() || "Portfolio enquiry");
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`,
    );
    setSubmitted(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="section-bg" aria-hidden="true">
        <div className="orb orb-contact" />
      </div>
      <div className="container">
        <SectionHeading
          id="contact-title"
          index="08"
          title="Let's Connect"
          subtitle="Have an opportunity or want to connect? Feel free to reach out."
          gradient
        />

        <div className="contact-layout">
          <motion.div className="contact-cards" {...revealProps(reduce)}>
            <a className="info-card" href={`mailto:${profile.email}`}>
              <span className="icon-chip">
                <Mail size={18} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span>
                <span className="info-label">Email</span>
                <span className="info-value">{profile.email}</span>
              </span>
            </a>
            <a className="info-card" href={`tel:${profile.phoneHref}`}>
              <span className="icon-chip">
                <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span>
                <span className="info-label">Phone</span>
                <span className="info-value">{profile.phone}</span>
              </span>
            </a>
            <div className="info-card">
              <span className="icon-chip">
                <MapPin size={18} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span>
                <span className="info-label">Location</span>
                <span className="info-value">{profile.location}</span>
              </span>
            </div>
            <a className="info-card" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="icon-chip">
                <LinkedInIcon />
              </span>
              <span>
                <span className="info-label">LinkedIn</span>
                <span className="info-value">midhun-rajendran</span>
              </span>
            </a>
            {profile.github ? (
              <a className="info-card" href={profile.github} target="_blank" rel="noreferrer">
                <span className="icon-chip">
                  <GitHubIcon />
                </span>
                <span>
                  <span className="info-label">GitHub</span>
                  <span className="info-value">Profile</span>
                </span>
              </a>
            ) : null}
          </motion.div>

          <motion.form className="contact-form" onSubmit={onSubmit} aria-describedby="form-note" {...revealProps(reduce, 0.08)}>
            <p id="form-note" className="form-note">
              This is an email composer, not a hosted form. Nothing is stored on this website. Send Message opens your email app with this note addressed to {profile.name}. You can also use the email address directly.
            </p>
            <label htmlFor="contact-name">
              Name
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={120}
                value={form.name}
                onChange={onChange}
              />
            </label>
            <label htmlFor="contact-email">
              Email
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={120}
                value={form.email}
                onChange={onChange}
              />
            </label>
            <label htmlFor="contact-subject">
              Subject
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                maxLength={160}
                value={form.subject}
                onChange={onChange}
              />
            </label>
            <label htmlFor="contact-message">
              Message
              <textarea
                id="contact-message"
                name="message"
                required
                maxLength={4000}
                value={form.message}
                onChange={onChange}
              />
            </label>
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
            {submitted ? (
              <div className="form-success" role="status">
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>
                  Email draft prepared! If your email app did not open automatically, reach out directly at{" "}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </span>
              </div>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
