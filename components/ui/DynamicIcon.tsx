
import {
  Layers,
  Brain,
  Network,
  Code2,
  BookOpen,
  Cpu,
  Database,
  Globe,
  Lock,
  Rocket,
  Sparkles,
  Terminal,
  Zap,
  type LucideProps,
} from "lucide-react";


const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Layers,
  Brain,
  Network,
  Code2,
  BookOpen,
  Cpu,
  Database,
  Globe,
  Lock,
  Rocket,
  Sparkles,
  Terminal,
  Zap,
};


interface DynamicIconProps extends LucideProps {
  name: string;
  fallback?: React.ComponentType<LucideProps>;
}

export function DynamicIcon({
  name,
  fallback: Fallback = BookOpen,
  ...props
}: DynamicIconProps) {
  const Icon = ICON_MAP[name] ?? Fallback;

  return <Icon {...props} />;
}
