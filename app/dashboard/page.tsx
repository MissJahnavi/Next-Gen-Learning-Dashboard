// =============================================================================
// DASHBOARD PAGE — app/dashboard/page.tsx  (SERVER COMPONENT)
// =============================================================================
// `force-dynamic` tells Next.js/Vercel: "always render this page on the
// server at request time, never pre-build it as a static HTML file."
//
// WHY IS THIS NEEDED?
// By default, Next.js tries to pre-render pages at BUILD TIME (static).
// But our page fetches live data from Supabase — it must run at REQUEST TIME.
// Without this, Vercel's build process tries to call Supabase during
// build and fails with "Dynamic server usage" errors.
//
// With force-dynamic: page always runs fresh on every request. ✓
// =============================================================================
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { getCourses } from "@/lib/supabase/queries";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { BentoGrid } from "@/components/dashboard/BentoGrid";
import { HeroTile } from "@/components/dashboard/HeroTile";
import { CourseTile } from "@/components/dashboard/CourseTile";
import { ActivityTile } from "@/components/dashboard/ActivityTile";
import { DashboardSkeletons } from "@/components/dashboard/DashboardSkeletons";
import { ErrorTile } from "@/components/dashboard/ErrorTile";

export default async function DashboardPage() {
  const { data: courses, error } = await getCourses();

  return (
    <DashboardShell>
      <Suspense fallback={<DashboardSkeletons />}>
        <BentoGrid>
          <HeroTile userName="Alex Chen" streakCount={12} />

          {error ? (
            <ErrorTile message={error} />
          ) : (
            (courses ?? []).map((course, index) => (
              <CourseTile key={course.id} course={course} index={index} />
            ))
          )}

          <ActivityTile />
        </BentoGrid>
      </Suspense>
    </DashboardShell>
  );
}
