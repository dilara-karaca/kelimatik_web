import { motion } from "framer-motion";
import { PLAY_STORE_URL, pub } from "../lib/constants";

type PlayCtaProps = {
  variant?: "button" | "badge";
  className?: string;
};

export function PlayCta({ variant = "button", className = "" }: PlayCtaProps) {
  if (variant === "badge") {
    return (
      <motion.a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block ${className}`}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
        aria-label="Google Play'den indir"
      >
        <img
          src={pub("google-play-badge.png")}
          alt="Google Play'den indirin"
          className="h-14 sm:h-16 w-auto"
        />
      </motion.a>
    );
  }

  return (
    <motion.a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_24px_-8px_rgba(252,139,4,0.55)] ${className}`}
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
    >
      Google Play'den İndir
    </motion.a>
  );
}
