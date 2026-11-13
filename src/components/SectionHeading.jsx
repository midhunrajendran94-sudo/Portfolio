export default function SectionHeading({ id, index, title, subtitle, gradient = false }) {
  return (
    <header className="section-heading">
      <span className="section-watermark" aria-hidden="true">
        {index}
      </span>
      <p className="section-index">{index}</p>
      <h2 id={id} className={gradient ? "text-gradient" : undefined}>
        {title}
      </h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  );
}
