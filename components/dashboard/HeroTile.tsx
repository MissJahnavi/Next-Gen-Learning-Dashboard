"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Flame, Star, Clock } from "lucide-react";
import { itemVariants } from "@/components/dashboard/BentoGrid";
import { getTimeGreeting } from "@/lib/utils";
import type { HeroTileProps } from "@/types";

export function HeroTile({ userName, streakCount }: HeroTileProps) {
  const greeting = getTimeGreeting();
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, streakCount, {
      duration: 1.5,
      delay: 0.5,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [streakCount, count]);

  return (
    <motion.div
      variants={itemVariants}
      className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4"
    >
      <div className="
        relative overflow-hidden rounded-2xl
        bg-[#0d1117] border border-[#1e2533]
        p-6 md:p-8
        group
      ">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
            transform: "translate(-30%, -30%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-8 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
            transform: "translate(30%, 30%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="text-[#8892a4] text-sm font-medium tracking-wide uppercase">
              {greeting}
            </p>
            <h1
              className="text-3xl md:text-4xl font-bold text-[#f0f4ff] tracking-tight"
              aria-label={`${greeting}, ${userName}`}
            >
              Welcome back,{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
                {userName}
              </span>
            </h1>
            <p className="text-[#8892a4] text-sm max-w-md">
              You&apos;re making great progress. Keep up the momentum and hit your learning goals.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#161b27] border border-[#1e2533] min-w-[90px]">
              <div className="flex items-center gap-1.5 mb-1">
                <Flame className="w-4 h-4 text-orange-400" aria-hidden="true" />
                <motion.span
                  className="text-2xl font-bold text-[#f0f4ff] tabular-nums"
                  aria-live="polite"
                  aria-label={`${streakCount} day streak`}
                >
                  {roundedCount}
                </motion.span>
              </div>
              <span className="text-xs text-[#8892a4]">Day Streak</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
                  <Star className="w-3.5 h-3.5 text-green-400" aria-hidden="true" />
                  <span className="text-green-400 font-medium">4 Active Courses</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20">
                  <Clock className="w-3.5 h-3.5 text-[#3b82f6]" aria-hidden="true" />
                  <span className="text-[#3b82f6] font-medium">2.5 hrs this week</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}
