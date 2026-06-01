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
          <HeroTile
            userName="Jahnavi"
            streakCount={12}
          />

          {error ? (
            <ErrorTile message={error} />
          ) : (
        
            (courses ?? []).map((course, index) => (
              <CourseTile
                key={course.id}    
                course={course}   
                index={index}     
              />
            ))
          )}

          <ActivityTile />
        </BentoGrid>
      </Suspense>
    </DashboardShell>
  );
}
