# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm run dev` - Start development server on http://localhost:3000
- `pnpm run build` - Build for production
- `pnpm run generate` - Generate static site
- `pnpm run preview` - Preview production build locally

### Package Management
- `pnpm install` - Install dependencies (preferred package manager based on pnpm-lock.yaml)

## Architecture

This is a **Nuxt 3** portfolio website with static site generation. The site showcases personal projects and work experience.

### Key Configuration
- **SSR**: Enabled with static preset for deployment
- **Styling**: Bootstrap 5 + custom SCSS (`morokai.scss`)
- **Component Structure**: Vue 3 composition with auto-imported components prefixed with "Top"

### Directory Structure
- `pages/index.vue` - Main page that orchestrates all Top components
- `components/top/` - Section components (Head, Aboutme, Timeline, Works, Slideshow)
- `assets/json/works.json` - Portfolio projects data
- `assets/works/` - Project-specific content and assets
- `public/` - Static assets and deployment files

### Component Architecture
The main page uses a series of section components:
- `TopHead` - Header/hero section
- `TopAboutme` - About section  
- `TopTimeline` - Experience timeline
- `TopWorks` - Portfolio projects (reads from works.json)
- `TopSlideshow` - Currently commented out

### Data Management
- **Portfolio Projects**: `assets/json/works.json` with corresponding detail pages in `assets/works/[project-name]/about.md`
- **Timeline Data**: `assets/json/timeline.json` contains chronological events and achievements
- **Asset Organization**: Duplicate structure between `assets/` and `public/assets/` for build compatibility

### Styling Approach
- Bootstrap 5 for layout and components
- Custom SCSS variables in `morokai.scss` (Morokai color scheme)
- Responsive design with custom breakpoints at 650px (`.br-pc`/`.br-sp` classes)
- Font Awesome icons for social links
- Global styles defined in `pages/index.vue`

### Build Configuration
- **Static Generation**: Uses Nuxt's static preset for GitHub Pages deployment
- **Component Auto-import**: Components in `components/top/` are auto-imported with "Top" prefix
- **SCSS Processing**: Custom SCSS variables available globally via Vite preprocessor
- **Bootstrap Integration**: Bootstrap CSS loaded globally, with client-side JS via plugin

### Deployment
- Builds to `dist/` directory for static hosting
- Includes `public/CNAME` for custom domain
- Serves as a personal portfolio showcasing technical projects and career timeline