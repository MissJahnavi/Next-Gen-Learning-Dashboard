"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { itemVariants } from "@/components/dashboard/BentoGrid";
import { generateActivityData, activityColorMap } from "@/lib/utils";

const DAY_LABELS = ["Mon", "", "Wed", "", "Fri", "", "Sun"];
const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

function getMonthLabel(weekIndex: number): string {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const date = new Date();
  date.setDate(date.getDate() - (24 - weekIndex) * 7);
  return months[date.getMonth()];
}

export function ActivityTile() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activityData = useMemo(() => generateActivityData(), []);

  const [tooltip, setTooltip] = useState<{ week: number; day: number; level: number } | null>(null);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.008,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="col-span-1 md:col-span-2"
    >
      <section
        className="relative overflow-hidden rounded-2xl h-full bg-[#0d1117] border border-[#1e2533] p-5 flex flex-col gap-4"
        aria-label="Learning activity over past 24 weeks"
      >
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20">
              <Activity className="w-4 h-4 text-[#3b82f6]" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-[#f0f4ff]">Learning Activity</h2>
              <p className="text-xs text-[#8892a4]">Past 24 weeks</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="text-xs text-[#4a5568]">Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div key={level} className={`w-3 h-3 rounded-sm ${activityColorMap[level]}`} />
            ))}
            <span className="text-xs text-[#4a5568]">More</span>
          </div>
        </div>

        <div className="relative z-10 overflow-x-auto">
          {!mounted ? (
            <div
              className="h-[102px] w-full rounded-lg bg-[#161b27] animate-pulse"
              aria-hidden="true"
            />
          ) : (
            <div className="flex gap-3">
              <div className="flex flex-col justify-around gap-[3px] mt-6" aria-hidden="true">
                {DAY_LABELS.map((label, i) => (
                  <span key={i} className="text-[10px] text-[#4a5568] w-6 text-right h-[10px] leading-none">
                    {label}
                  </span>
                ))}
              </div>

              <div className="flex-1">
                <div className="flex gap-[3px] mb-1 h-4" aria-hidden="true">
                  {activityData.map((_, weekIndex) => (
                    <div key={weekIndex} className="relative w-[10px]">
                      {weekIndex % 4 === 0 && (
                        <span className="absolute text-[9px] text-[#4a5568] whitespace-nowrap">
                          {getMonthLabel(weekIndex)}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex gap-[3px]" role="img" aria-label="Activity contribution grid">
                  {activityData.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[3px]">
                      {week.map((level, dayIndex) => (
                        <motion.div
                          key={dayIndex}
                          className={`w-[10px] h-[10px] rounded-[2px] cursor-default ${activityColorMap[level]}`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: (weekIndex * 7 + dayIndex) * 0.001,
                            duration: 0.2,
                            ease: "easeOut",
                          }}
                          whileHover={{ scale: 1.8, zIndex: 10, transition: { duration: 0.1 } }}
                          onHoverStart={() => setTooltip({ week: weekIndex + 1, day: dayIndex, level })}
                          onHoverEnd={() => setTooltip(null)}
                          aria-label={`Week ${weekIndex + 1}, ${DAYS[dayIndex]}: level ${level}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {tooltip && (
                  <p className="mt-2 text-[10px] text-[#8892a4]">
                    Week {tooltip.week}, {DAYS[tooltip.day]} — level {tooltip.level} activity
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="relative z-10 flex items-center gap-4 pt-2 border-t border-[#1e2533]">
          <div className="text-center">
            <p className="text-base font-bold text-[#f0f4ff]">47</p>
            <p className="text-xs text-[#8892a4]">Active days</p>
          </div>
          <div className="w-px h-8 bg-[#1e2533]" aria-hidden="true" />
          <div className="text-center">
            <p className="text-base font-bold text-[#f0f4ff]">12</p>
            <p className="text-xs text-[#8892a4]">Day streak</p>
          </div>
          <div className="w-px h-8 bg-[#1e2533]" aria-hidden="true" />
          <div className="text-center">
            <p className="text-base font-bold text-[#f0f4ff]">8.5h</p>
            <p className="text-xs text-[#8892a4]">This month</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
