"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [activeNavId, setActiveNavId] = useState<string>("dashboard");

  return (
    <div className="flex h-screen overflow-hidden bg-[#080c14]">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed((prev) => !prev)}
        activeItemId={activeNavId}
        onNavItemClick={setActiveNavId}
      />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <header className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-[#1e2533]">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center">
              <span className="text-white text-xs font-bold">N</span>
            </div>
            <span className="font-semibold text-[#f0f4ff] text-sm">NextLearn</span>
          </div>
        </header>

        <main
          className="flex-1 overflow-y-auto pb-20 lg:pb-0"
          role="main"
          aria-label="Dashboard content"
        >
          {children}
        </main>
      </div>

      <MobileNav
        activeItemId={activeNavId}
        onNavItemClick={setActiveNavId}
      />
    </div>
  );
}
