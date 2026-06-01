"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import type { ProgressBarProps } from "@/types";
import { clamp, getProgressColor } from "@/lib/utils";

export function ProgressBar({ value, color, className = "" }: ProgressBarProps) {
  const safeValue = clamp(value, 0, 100);
  const progressMotionValue = useMotionValue(0);
  const scaleX = useTransform(progressMotionValue, [0, 100], [0, 1]);

  useEffect(() => {
    const controls = animate(progressMotionValue, safeValue, {
      duration: 1.2,
      delay: 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    });

    return () => controls.stop();
  }, [safeValue, progressMotionValue]);

  const barColor = color ?? getProgressColor(safeValue);

  return (
    <div
      className={`relative ${className}`}
      role="progressbar"
      aria-valuenow={safeValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${safeValue}% complete`}
    >
      <div className="h-1.5 w-full rounded-full bg-[#161b27] overflow-hidden">
        <motion.div
          className="h-full w-full rounded-full"
          style={{
            scaleX,
            originX: 0,
            backgroundColor: barColor,
            boxShadow: `0 0 8px ${barColor}60`,
          }}
        />
      </div>

      <div className="flex justify-between items-center mt-1.5">
        <span className="text-xs text-[#8892a4]">Progress</span>
        <span className="text-xs font-medium text-[#f0f4ff]">{safeValue}%</span>
      </div>
    </div>
  );
}
