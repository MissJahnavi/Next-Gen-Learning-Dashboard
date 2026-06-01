"use client";

import { motion } from "framer-motion";

interface BentoGridProps {
  children: React.ReactNode;
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  },
};

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <section
      className="p-4 md:p-6 lg:p-8"
      aria-label="Dashboard overview"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          grid gap-4
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          auto-rows-auto
        "
      >
        {children}
      </motion.div>
    </section>
  );
}
