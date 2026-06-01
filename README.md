# NextLearn — Student Learning Dashboard

A futuristic dark-mode student dashboard built with Next.js 15, Supabase, Framer Motion, and Tailwind CSS.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework + Server Components |
| Supabase | PostgreSQL database |
| Framer Motion | Animations |
| Tailwind CSS | Styling |
| TypeScript | Type safety |
| Lucide React | Icons |

---

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up Supabase
1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run `supabase-setup.sql` (included in this project)
3. This creates the `courses` table and seeds 4 sample rows

### 3. Add environment variables
```bash
cp .env.example .env.local
```
Fill in `.env.local` with your Supabase credentials from **Project Settings → API**:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
app/
├── layout.tsx              # Root layout + fonts
├── page.tsx                # Redirects to /dashboard
└── dashboard/
    ├── page.tsx            # Server Component — fetches Supabase data
    ├── loading.tsx         # Skeleton shown while fetching
    └── error.tsx           # Error boundary

components/
├── layout/
│   ├── DashboardShell.tsx  # Layout wrapper + sidebar state
│   ├── Sidebar.tsx         # Collapsible sidebar
│   └── MobileNav.tsx       # Bottom nav on mobile
├── dashboard/
│   ├── BentoGrid.tsx       # Stagger animation grid
│   ├── HeroTile.tsx        # Greeting + streak counter
│   ├── CourseTile.tsx      # Course card (data from DB)
│   ├── ActivityTile.tsx    # Contribution graph
│   └── DashboardSkeletons.tsx
└── ui/
    ├── ProgressBar.tsx     # Animated progress bar
    └── DynamicIcon.tsx     # Renders Lucide icon from string

lib/
├── supabase/server.ts      # Supabase server client
├── supabase/queries.ts     # DB query functions
└── utils.ts                # Helper functions
```

---

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Add the same two environment variables (`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`) in the Vercel dashboard under **Project → Settings → Environment Variables**.

---

## Key Concepts

**Server vs Client Components**
- `app/dashboard/page.tsx` is a Server Component — it fetches from Supabase on the server before sending HTML to the browser. No loading flash, no exposed DB calls.
- Components with animations use `"use client"` since Framer Motion needs browser APIs.

**Animations (all GPU-safe)**
- Stagger entrance: cards fade + slide up sequentially on load
- Progress bars: animate from 0% to actual value on mount
- Sidebar: spring-physics collapse, `layoutId` active highlight travels between nav items
- Hover: `scale: 1.015` spring on every card