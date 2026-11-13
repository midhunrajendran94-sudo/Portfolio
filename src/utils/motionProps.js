const ease = [0.22, 1, 0.36, 1];

export function enterProps(reduce, delay = 0) {
  if (reduce) return {};
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease, delay },
  };
}

export function revealProps(reduce, delay = 0) {
  if (reduce) return {};
  return {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -10% 0px" },
    transition: { duration: 0.7, ease, delay },
  };
}
