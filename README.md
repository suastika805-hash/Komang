# Portfolio — I Komang Swastika Adnyana

Website portofolio pribadi dibangun dengan menggunakan **Next.js 14** (App Router) dan **Tailwind CSS**.

## Fitur

- 4 Halaman**: Home, About, Projects, Contact
- Dynamic Route**: `/projects/[slug]` — halaman detail per proyek
- Server Components** & **Client Components** (`"use client"`)
- Dark mode / Light mode** toggle (disimpan di localStorage)
- Responsive Design** — mobile, tablet, desktop
- Form validasi** client-side dengan `useState`
- Filter proyek** berdasarkan kategori dengan `useState`
- Animasi scroll** menggunakan `useEffect` + IntersectionObserver
- Typing animation** di Hero menggunakan `useState` + `useEffect`
- Data statis** dari `/data/projects.ts` dan `/data/profile.ts`
- Next/link untuk semua navigasi

Cara Menjalankan Lokal

``bash
# 1. Clone repo
git clone https://github.com/suastika805-hash/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Jalankan dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## Struktur Project

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # / (Home)
│   ├── not-found.tsx           # 404
│   ├── about/
│   │   └── page.tsx            # /about
│   ├── projects/
│   │   ├── page.tsx            # /projects
│   │   └── [slug]/
│   │       └── page.tsx        # /projects/[slug] ← DYNAMIC ROUTE
│   └── contact/
│       └── page.tsx            # /contact
├── components/
│   ├── Navbar.tsx              # Client — navigasi + dark mode toggle
│   ├── HeroSection.tsx         # Client — typing animation
│   ├── AboutSection.tsx        # Server
│   ├── SkillsSection.tsx       # Server
│   ├── FeaturedProjects.tsx    # Server
│   ├── ProjectsFilter.tsx      # Client — filter dengan useState
│   ├── ContactForm.tsx         # Client — validasi dengan useState
│   ├── ScrollReveal.tsx        # Client — IntersectionObserver
│   └── ThemeScript.tsx         # Inline script anti-flash
├── data/
│   ├── projects.ts             # Data proyek statis
│   └── profile.ts              # Data profil & skill statis
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Routing

| Route | Tipe | Keterangan |
|---|---|---|
| `/Home` | Static | Home dengan Hero, About, Skills, Featured Projects |
| `/about` | Static | Profil lengkap dan skill |
| `/projects` | Static | Semua proyek + filter kategori |
| `/projects/[slug]` | **Dynamic** | Detail per proyek |
| `/contact` | Static | Form kontak dengan validasi |

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Syne + JetBrains Mono
- **Deploy**: Vercel
