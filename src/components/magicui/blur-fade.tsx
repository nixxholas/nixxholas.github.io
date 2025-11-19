"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}
const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  // Track if we've animated to prevent re-animation issues
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="visible"
      animate="visible"
      variants={combinedVariants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
