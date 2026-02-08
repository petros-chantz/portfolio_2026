import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed bottom-4 right-4 z-20
        rounded-full border border-black/10 bg-white/90 backdrop-blur
        px-3 py-2 text-sm
        text-[var(--color-text-secondary)]
        hover:text-[var(--color-text-primary)]
        transition
      "
    >
      Top ↑
    </button>
  );
}
