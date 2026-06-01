"use client";

import { motion } from "framer-motion";


interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
  as?: "article" | "div" | "section";

}

export function GlowCard({
  children,
  className = "",
  glowColor = "#3b82f6",
  onClick,
  as: Tag = "article",

}: GlowCardProps) {
  return (

    <motion.article
whileHover={{
        scale: 1.015,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      whileTap={{ scale: 0.99 }}
      layout

      onClick={onClick}

      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick();
            }
          : undefined
      }
      className={`
        relative overflow-hidden rounded-2xl
        bg-[#0d1117]
        border border-[#1e2533]
        cursor-default
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}

      style={{ "--glow-color": glowColor } as React.CSSProperties}
    >

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${glowColor}15 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />


      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
        aria-hidden="true"
      />


      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.article>
  );
}
