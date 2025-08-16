// src/components/AnimeTitleText.tsx
import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "../lib/constant";
import { AnimeTitle } from "../lib/types";

type AnimeTitleTextProps = {
  title: AnimeTitle;
  onHover: (text: string) => void;
  onHoverEnd: () => void;
  className?: string; // NEW prop
};

export const AnimeTitleText = ({
  title,
  onHover,
  onHoverEnd,
  className = "",
}: AnimeTitleTextProps) => (
  <motion.span
    data-text={title.id}
    className={`transition-colors duration-300 ${className}`}
    whileHover={{
      scale: 1.2,
      textShadow: "0 0 10px #ff073a, 0 0 20px #faff00, 0 0 40px #ff073a",
    }}
    onMouseEnter={(e) => onHover(e.currentTarget.dataset.text!)}
    onMouseMove={(e) => onHover(e.currentTarget.dataset.text!)}
    onMouseLeave={onHoverEnd}
  >
    {title.displayName}
  </motion.span>
);
