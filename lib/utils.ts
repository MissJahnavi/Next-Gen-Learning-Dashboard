export function getTimeGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export function formatOrdinal(n: number): string {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function getProgressColor(progress: number): string {
  if (progress >= 75) return "#10b981";
  if (progress >= 40) return "#3b82f6";
  return "#8b5cf6";
}

export function generateActivityData(): number[][] {
  const weeks = 24;
  const days = 7;

  return Array.from({ length: weeks }, () =>
    Array.from({ length: days }, () => {
      const rand = Math.random();
      if (rand < 0.45) return 0;
      if (rand < 0.70) return 1;
      if (rand < 0.85) return 2;
      if (rand < 0.95) return 3;
      return 4;
    })
  );
}

export const activityColorMap: Record<number, string> = {
  0: "bg-bg-border",
  1: "bg-accent-blue/20",
  2: "bg-accent-blue/40",
  3: "bg-accent-blue/70",
  4: "bg-accent-blue",
};
