"use client"; 

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;                  
}

export default function DashboardError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-full min-h-[400px] p-8">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">
        <div className="p-4 rounded-full bg-red-500/10 border border-red-500/20">
          <AlertTriangle className="w-10 h-10 text-red-400" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-[#f0f4ff]">
            Something went wrong
          </h2>
          <p className="text-sm text-[#8892a4] leading-relaxed">
            We couldn&apos;t load your dashboard. This might be a temporary
            issue with the database connection.
          </p>
          {process.env.NODE_ENV === "development" && (
            <p className="text-xs text-red-400/70 font-mono mt-3 p-3 bg-red-500/5 rounded-lg border border-red-500/10">
              {error.message}
            </p>
          )}
        </div>

        <button
          onClick={reset}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#161b27] border border-[#1e2533] text-[#f0f4ff] text-sm font-medium hover:bg-[#1e2533] hover:border-[#3b82f6]/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
          aria-label="Retry loading the dashboard"
        >
          <RefreshCw className="w-4 h-4" aria-hidden="true" />
          Try again
        </button>
      </div>
    </div>
  );
}
