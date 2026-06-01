export default function DashboardLoading() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <aside className="hidden lg:flex flex-col w-64 h-full border-r border-[#1e2533] p-4 gap-4">
        <div className="skeleton h-10 rounded-lg" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="skeleton h-10 rounded-lg" />
        ))}
      </aside>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="skeleton h-8 w-48 rounded-lg mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="skeleton col-span-1 md:col-span-2 lg:col-span-3 h-48 rounded-2xl" />

          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="skeleton h-52 rounded-2xl" />
          ))}

          <div className="skeleton col-span-1 md:col-span-2 h-64 rounded-2xl" />
        </div>
      </main>
    </div>
  );
}
