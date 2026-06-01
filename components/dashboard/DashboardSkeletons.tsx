export function DashboardSkeletons() {
  return (
    <section className="p-4 md:p-6 lg:p-8" aria-busy="true" aria-label="Loading dashboard content">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
          <div className="skeleton rounded-2xl h-[160px]" aria-hidden="true">
            <div className="p-6 flex flex-col gap-3">
              <div className="h-3 w-24 rounded-full bg-[#161b27]" />
              <div className="h-8 w-72 rounded-lg bg-[#161b27]" />
              <div className="h-3 w-80 rounded-full bg-[#161b27] mt-1" />
            </div>
          </div>
        </div>

        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            <div className="skeleton rounded-2xl h-[200px] p-5 flex flex-col gap-4" aria-hidden="true">
              <div className="w-10 h-10 rounded-xl bg-[#161b27]" />
              <div className="space-y-2 flex-1">
                <div className="h-3.5 w-3/4 rounded-full bg-[#161b27]" />
                <div className="h-3 w-1/2 rounded-full bg-[#161b27]" />
              </div>
              <div className="space-y-2 mt-auto">
                <div className="h-1.5 w-full rounded-full bg-[#161b27]" />
                <div className="flex justify-between">
                  <div className="h-2.5 w-12 rounded-full bg-[#161b27]" />
                  <div className="h-2.5 w-8 rounded-full bg-[#161b27]" />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="col-span-1 md:col-span-2">
          <div className="skeleton rounded-2xl h-[260px] p-5 flex flex-col gap-4" aria-hidden="true">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#161b27]" />
              <div className="space-y-1.5">
                <div className="h-3.5 w-32 rounded-full bg-[#161b27]" />
                <div className="h-2.5 w-20 rounded-full bg-[#161b27]" />
              </div>
            </div>
            <div className="flex-1 bg-[#161b27] rounded-xl" />
            <div className="flex gap-4 pt-2 border-t border-[#1e2533]">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-1">
                  <div className="h-5 w-8 rounded bg-[#161b27]" />
                  <div className="h-3 w-14 rounded-full bg-[#161b27]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
