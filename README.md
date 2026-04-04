# Personal Portfolio — Gautam Manak

A modern, dark-mode-ready personal portfolio and blog built with **Next.js 14**, **Tailwind CSS**, and **MDX**. Features articles, experience timeline, project showcase, photo gallery, newsletter subscription, and an RSS feed.

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-1B1F24?style=for-the-badge&logo=mdx&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

## Features

- **MDX Blog** — Write articles in MDX with GitHub Flavored Markdown, syntax highlighting via Prism, and automatic slug-based routing
- **Experience Timeline** — Work history section with company logos, roles, and date ranges
- **Project Showcase** — Dedicated projects page to highlight key work
- **Photo Gallery** — Masonry-layout gallery powered by Cloudinary and `react-masonry-css`
- **Newsletter Subscription** — Email signup with Nodemailer-backed API route
- **RSS Feed** — Auto-generated feed at `/feed.xml` using the `feed` package
- **Dark Mode** — Theme toggling via `next-themes` with smooth transitions
- **Responsive Design** — Fully responsive layout with Tailwind CSS utility classes
- **Animated UI** — Page transitions and section reveals with Framer Motion
- **Speaking Page** — Dedicated page for speaking engagements and past events

## Tech Stack

| Layer        | Technology                                           |
| ------------ | ---------------------------------------------------- |
| Framework    | [Next.js 14](https://nextjs.org/) (App Router)      |
| Language     | TypeScript                                           |
| Styling      | [Tailwind CSS 3.4](https://tailwindcss.com/) + `@tailwindcss/typography` |
| Content      | [MDX](https://mdxjs.com/) with `remark-gfm` + `rehype-prism` |
| Animation    | [Framer Motion](https://www.framer.com/motion/)      |
| UI           | [Headless UI](https://headlessui.com/), [Lucide React](https://lucide.dev/) |
| Images       | [Cloudinary](https://cloudinary.com/), Next.js Image |
| Email        | [Nodemailer](https://nodemailer.com/)                |
| Feed         | [feed](https://github.com/jpmonette/feed)            |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/gautammanak1/test-prod.git
   cd test-prod
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set environment variables**

   Create a `.env.local` file in the project root:

   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Visit** `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Usage

- **Write articles** — Add `.mdx` files under `src/app/articles/{slug}/page.mdx` with frontmatter for title, date, and description
- **Update experience** — Edit the `resume` array in `src/app/page.tsx` with company, role, logo, and dates
- **Manage gallery** — Images are loaded from Cloudinary; configure your cloud name in `src/lib/cloudinary.ts`
- **Newsletter** — The subscription endpoint lives at `src/app/api/subscribe/route.js`

## Project Structure

```
test-prod/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page (hero, articles, resume)
│   │   ├── layout.tsx            # Root layout with theme providers
│   │   ├── about/                # About page
│   │   ├── articles/             # MDX blog articles
│   │   ├── projects/             # Projects showcase
│   │   ├── gallery/              # Photo gallery
│   │   ├── Experience/           # Experience timeline
│   │   ├── speaking/             # Speaking engagements
│   │   ├── thank-you/            # Post-subscription page
│   │   ├── feed.xml/             # RSS feed route
│   │   └── api/subscribe/        # Newsletter API
│   ├── components/               # Reusable UI components
│   ├── images/                   # Static images and logos
│   ├── lib/                      # Utilities (articles, dates, Cloudinary)
│   └── styles/                   # Tailwind CSS and Prism styles
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

## License

This project is licensed under the terms specified in [LICENSE.md](LICENSE.md).
