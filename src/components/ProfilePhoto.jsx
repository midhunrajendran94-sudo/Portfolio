import { useState } from "react";

export default function ProfilePhoto({ src, enabled }) {
  const [hasError, setHasError] = useState(false);

  if (!enabled || hasError) {
    return (
      <div
        className="portrait-fallback"
        role="img"
        aria-label="Portrait placeholder for Midhun Rajendran"
      >
        <span>MR</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt="Portrait of Midhun Rajendran"
      onError={() => setHasError(true)}
    />
  );
}
