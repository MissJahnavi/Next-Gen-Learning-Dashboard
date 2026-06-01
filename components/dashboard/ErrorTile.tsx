"use client";

import { motion } from "framer-motion";
import { WifiOff, RefreshCw } from "lucide-react";
import { itemVariants } from "@/components/dashboard/BentoGrid";

interface ErrorTileProps {
  message: string;
}

export function ErrorTile({ message }: ErrorTileProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="col-span-1 md:col-span-2 lg:col-span-2"
    >
      <div className="
        relative overflow-hidden rounded-2xl
        bg-[#0d1117] border border-red-500/20
        p-6 flex flex-col items-center justify-center gap-4
        min-h-[200px] text-center
      ">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(239,68,68,0.05) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="p-3 rounded-full bg-red-500/10 border border-red-500/20">
            <WifiOff className="w-6 h-6 text-red-400" aria-hidden="true" />
          </div>

          <div>
            <p className="text-sm font-semibold text-[#f0f4ff] mb-1">
              Couldn&apos;t load courses
            </p>
            <p className="text-xs text-[#8892a4]">
              Check your Supabase connection and environment variables.
            </p>
          </div>

          {process.env.NODE_ENV === "development" && (
            <code className="text-xs text-red-400/70 bg-red-500/5 border border-red-500/10 px-3 py-2 rounded-lg max-w-full overflow-auto">
              {message}
            </code>
          )}

          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161b27] border border-[#1e2533] text-xs font-medium text-[#f0f4ff] hover:border-[#3b82f6]/30 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
            Retry
          </button>
        </div>
      </div>
    </motion.div>
  );
}
