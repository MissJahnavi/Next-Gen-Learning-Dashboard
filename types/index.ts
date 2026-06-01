/**
 * Represents a single row from the 'courses' table in Supabase.
 *
 * TypeScript syntax explanation:
 *   `export` = other files can import this type
 *   `interface` = a named shape/blueprint (not a class, no runtime code)
 *   Each line = field_name: TypeName
 */
export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}


export interface CourseTileProps {
  course: Course;
  index: number;
}

export interface ProgressBarProps {
  value: number;
  color?: string;
  className?: string;
}

export interface HeroTileProps {
  userName: string;
  streakCount: number;
  lastActiveDate?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
}

export interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  activeItemId: string;
  onNavItemClick: (id: string) => void;
}

export type CourseUpdate = Partial<Course>;

export type CourseSummary = Pick<Course, "id" | "title" | "progress">;
