"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Trophy,
  Settings,
  type LucideProps,
} from "lucide-react";

interface MobileNavProps {
  activeItemId: string;
  onNavItemClick: (id: string) => void;
}

const MOBILE_NAV_ITEMS: Array<{
  id: string;
  label: string;
  Icon: React.ComponentType<LucideProps>;
}> = [
  { id: "dashboard",    label: "Home",     Icon: LayoutDashboard },
  { id: "courses",      label: "Courses",  Icon: BookOpen        },
  { id: "progress",     label: "Progress", Icon: BarChart3       },
  { id: "achievements", label: "Awards",   Icon: Trophy          },
  { id: "settings",     label: "Settings", Icon: Settings        },
];

export function MobileNav({ activeItemId, onNavItemClick }: MobileNavProps) {
  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 border-t border-[#1e2533] bg-[#0d1117]/95 backdrop-blur-md"
      aria-label="Mobile navigation"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-center justify-around h-16">
        {MOBILE_NAV_ITEMS.map(({ id, label, Icon }) => {
          const isActive = activeItemId === id;

          return (
            <button
              key={id}
              onClick={() => onNavItemClick(id)}
              aria-current={isActive ? "page" : undefined}
              aria-label={label}
              className="relative flex flex-col items-center justify-center gap-1 flex-1 h-full px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-inset"
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-active"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-[#3b82f6]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  aria-hidden="true"
                />
              )}

              <motion.span
                animate={{ scale: isActive ? 1.1 : 1 }}
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive ? "text-[#3b82f6]" : "text-[#8892a4]"
                  }`}
                  aria-hidden="true"
                />
              </motion.span>

              <span
                className={`text-[10px] font-medium transition-colors ${
                  isActive ? "text-[#3b82f6]" : "text-[#4a5568]"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
