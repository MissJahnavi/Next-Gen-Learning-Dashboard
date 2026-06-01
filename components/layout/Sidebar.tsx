"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  type LucideProps,
} from "lucide-react";
import type { SidebarProps, NavItem } from "@/types";

const NAV_ITEMS: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "LayoutDashboard", href: "/dashboard" },
  { id: "courses",   label: "My Courses", icon: "BookOpen",        href: "/courses"   },
  { id: "progress",  label: "Progress",   icon: "BarChart3",       href: "/progress"  },
  { id: "achievements", label: "Achievements", icon: "Trophy",     href: "/achievements" },
  { id: "settings",  label: "Settings",   icon: "Settings",        href: "/settings"  },
];

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Trophy,
  Settings,
};

const sidebarVariants = {
  expanded: {
    width: "240px",
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  collapsed: {
    width: "72px",
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const labelVariants = {
  visible: {
    opacity: 1,
    x: 0,
    display: "block",
    transition: { delay: 0.1, duration: 0.15 },
  },
  hidden: {
    opacity: 0,
    x: -10,
    transitionEnd: { display: "none" },
    transition: { duration: 0.1 },
  },
};

export function Sidebar({
  isCollapsed,
  onToggle,
  activeItemId,
  onNavItemClick,
}: SidebarProps) {
  return (
    <motion.aside
      variants={sidebarVariants}
      animate={isCollapsed ? "collapsed" : "expanded"}
      initial="expanded"
      className="hidden lg:flex flex-col h-full relative border-r border-[#1e2533] bg-[#0d1117] overflow-hidden flex-shrink-0"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-3 px-4 py-5 border-b border-[#1e2533]">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
          <GraduationCap className="w-4 h-4 text-white" aria-hidden="true" />
        </div>

        <motion.span
          variants={labelVariants}
          animate={isCollapsed ? "hidden" : "visible"}
          className="font-bold text-[#f0f4ff] text-sm whitespace-nowrap overflow-hidden"
        >
          NextLearn
        </motion.span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Dashboard navigation">
        {NAV_ITEMS.map((item) => {
          const Icon = ICON_MAP[item.icon];
          const isActive = activeItemId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavItemClick(item.id)}
              aria-current={isActive ? "page" : undefined}
              aria-label={isCollapsed ? item.label : undefined}
              className={`
                relative flex items-center gap-3 w-full px-3 py-2.5 rounded-xl
                text-sm font-medium transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]
                ${isActive ? "text-[#f0f4ff]" : "text-[#8892a4] hover:text-[#f0f4ff]"}
              `}
            >
              {isActive && (
                <motion.span
                  layoutId="sidebar-active-bg"
                  className="absolute inset-0 rounded-xl bg-[#161b27] border border-[#3b82f6]/20"
                  style={{ zIndex: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  aria-hidden="true"
                />
              )}

              {isActive && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#3b82f6] z-10" aria-hidden="true" />
              )}

              <span className="relative z-10 flex-shrink-0">
                {Icon && (
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-[#3b82f6]" : "text-current"}`}
                    aria-hidden="true"
                  />
                )}
              </span>

              <motion.span
                variants={labelVariants}
                animate={isCollapsed ? "hidden" : "visible"}
                className="relative z-10 whitespace-nowrap overflow-hidden text-left"
              >
                {item.label}
              </motion.span>
            </button>
          );
        })}
      </nav>

      <div className="px-3 pb-5 border-t border-[#1e2533] pt-4">
        <button
          onClick={onToggle}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!isCollapsed}
          className="flex items-center justify-center w-full p-2 rounded-xl text-[#8892a4] hover:text-[#f0f4ff] hover:bg-[#161b27] transition-colors duration-150"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isCollapsed ? (
              <motion.span
                key="expand"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="collapse"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>

          <motion.span
            variants={labelVariants}
            animate={isCollapsed ? "hidden" : "visible"}
            className="ml-3 text-sm whitespace-nowrap"
          >
            Collapse
          </motion.span>
        </button>
      </div>
    </motion.aside>
  );
}
