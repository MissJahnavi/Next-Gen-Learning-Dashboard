"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { itemVariants } from "@/components/dashboard/BentoGrid";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { getProgressColor } from "@/lib/utils";
import type { CourseTileProps } from "@/types";

const GRADIENTS = [
  "from-[#3b82f6]/8 to-[#8b5cf6]/5",
  "from-[#8b5cf6]/8 to-[#06b6d4]/5",
  "from-[#06b6d4]/8 to-[#10b981]/5",
  "from-[#10b981]/8 to-[#3b82f6]/5",
];

export function CourseTile({ course, index }: CourseTileProps) {
  const gradient = GRADIENTS[index % GRADIENTS.length];
  const progressColor = getProgressColor(course.progress);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.015,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      whileTap={{ scale: 0.99 }}
      className="group"
    >
      <article
        className="
          relative overflow-hidden rounded-2xl h-full min-h-[200px]
          bg-[#0d1117] border border-[#1e2533]
          hover:border-[#1e2533]/80
          transition-colors duration-300
          p-5 flex flex-col gap-4
        "
        aria-label={`${course.title} course, ${course.progress}% complete`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 0%, ${progressColor}12 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col gap-4 h-full">
          <div className="flex items-start justify-between">
            <div
              className="p-2.5 rounded-xl border"
              style={{
                backgroundColor: `${progressColor}15`,
                borderColor: `${progressColor}25`,
              }}
              aria-hidden="true"
            >
              <DynamicIcon
                name={course.icon_name}
                className="w-5 h-5"
                style={{ color: progressColor }}
                aria-hidden="true"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -4 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-hidden="true"
            >
              <ChevronRight className="w-4 h-4 text-[#8892a4]" />
            </motion.div>
          </div>

          <div className="flex-1">
            <h2 className="text-sm font-semibold text-[#f0f4ff] leading-tight line-clamp-2">
              {course.title}
            </h2>
          </div>

          <div className="mt-auto">
            <ProgressBar
              value={course.progress}
              color={progressColor}
            />
          </div>
        </div>
      </article>
    </motion.div>
  );
}
