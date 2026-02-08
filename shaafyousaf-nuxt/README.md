# Shaaf Yousaf Portfolio - Nuxt 3

A modern, minimalist portfolio built with Nuxt 3, featuring a Gold/Black/White aesthetic with cinematic animations.

## 🎨 Design System

### Color Palette
- **Black** (#000000) - Primary background
- **White** (#FFFFFF) - Primary text
- **Gold** (#FFD700) - Accent color for highlights and interactions

### Typography
- **Sans-Serif**: Inter (Primary text)
- **Display**: Plus Jakarta Sans (Headings)
- **Monospace**: Menlo/Monaco (Code)

## 🚀 Features

- ✨ Cinematic splash screen animation
- 🎬 Video background with overlay
- 📱 Fully responsive Bento Grid layout
- 🎭 Motion animations using motion-v
- 🖼️ Optimized images with @nuxt/image
- 🎯 Clean, modular component architecture
- ⚡ Fast page loads with Nuxt 3

## 📁 Project Structure

```
shaafyousaf-nuxt/
├── app/
│   ├── components/
│   │   ├── AppFooter.vue       # Footer with social links
│   │   ├── AppHeader.vue       # Navigation header
│   │   ├── BentoCard.vue       # Bento grid card component
│   │   ├── MotionDemo.vue      # Motion.dev examples
│   │   ├── ProjectCard.vue     # Project showcase card
│   │   ├── SplashScreen.vue    # Loading splash animation
│   │   └── VideoBackground.vue # Background video player
│   ├── layouts/
│   │   └── default.vue         # Main layout wrapper
│   ├── pages/
│   │   ├── index.vue           # Homepage with Bento Grid
│   │   ├── lab.vue             # Projects & Hackathons
│   │   ├── studio.vue          # Creative work
│   │   └── dev.vue             # Developer experience
│   └── app.vue                 # Root component
├── assets/
│   └── css/
│       └── global.css          # Global styles & variables
├── public/
│   ├── resources/              # Your assets (logo, images, etc.)
│   └── robots.txt
├── nuxt.config.ts              # Nuxt configuration
└── package.json                # Dependencies
```

## 🛠️ Tech Stack

- **Framework**: Nuxt 3
- **Animations**: motion-v
- **Icons**: @nuxt/icon
- **Images**: @nuxt/image
- **Fonts**: @nuxt/fonts (Google Fonts integration)
- **Styling**: Pure CSS (Scoped + Global)

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🎯 Pages Overview

### Homepage (`/`)
- Hero section with title and subtitle
- Bento Grid layout showcasing:
  - Profile information
  - Current work
  - Published software
  - Hackathon achievements
  - Design portfolio link
  - Tech stack
- Featured projects preview

### Lab (`/lab`)
- Hackathon wins
- Published software
- GUI applications
- Command-line projects

### Studio (`/studio`)
- Masonry grid for design work
- Full portfolio link
- YouTube channel showcase

### Dev (`/dev`)
- Current position (featured)
- Work experience timeline
- Tech stack overview
- Resume download

## 🎨 Using Motion Animations

Motion-v is integrated for smooth, cinematic animations. Here's a quick example:

```vue
<template>
  <Motion
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, ease: 'easeOut' }"
  >
    <div>Your content</div>
  </Motion>
</template>

<script setup>
import { Motion } from 'motion-v'
</script>
```

See `components/MotionDemo.vue` for more examples including:
- Fade in animations
- Spring physics
- Staggered children
- Hover interactions

## 📸 Asset Management

Place your assets in the `public/` directory:

```
public/
├── resources/
│   ├── logo.png
│   ├── pic.png
│   ├── Test1.webm (background video)
│   ├── GLOW.png
│   ├── Zarab.png
│   ├── PortfolioPromo.png
│   └── showcase.gif
└── images/
    ├── imagEHR logo.png
    ├── pla2.jpeg
    ├── gffe.png
    └── hawkeye.png
```

Images are automatically optimized using `@nuxt/image`:

```vue
<NuxtImg 
  src="/resources/logo.png" 
  alt="Description"
  width="150"
  height="150"
  loading="lazy"
/>
```

## 🎨 Customizing Styles

All global CSS variables are defined in `assets/css/global.css`:

```css
:root {
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-gold: #FFD700;
  --spacing-md: 2rem;
  --font-sans: 'Inter', sans-serif;
  /* ... more variables */
}
```

Components use scoped CSS for isolation:

```vue
<style scoped>
.your-component {
  /* Your styles */
}
</style>
```

## 🔧 Configuration

### Nuxt Config (`nuxt.config.ts`)

Key configurations:
- **Modules**: Image optimization, icons, and fonts
- **CSS**: Global stylesheet import
- **Fonts**: Google Fonts integration (Inter, Plus Jakarta Sans, Exo 2)
- **Image**: Quality and format settings

### Adding New Pages

1. Create a new file in `app/pages/`
2. Add navigation link in `components/AppHeader.vue`
3. Use the layout automatically or specify a custom one

### Adding New Components

1. Create `.vue` file in `app/components/`
2. Use auto-imports (no need to manually import)
3. Follow the naming convention (PascalCase)

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Responsive utilities are in `global.css` and scoped component styles.

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
pnpm generate
# Upload 'dist' folder to Netlify
```

## 📝 To-Do / Next Steps

- [ ] Copy your assets from old site to `public/resources/`
- [ ] Update project images and descriptions
- [ ] Add actual design work to Studio page
- [ ] Test all external links
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain
- [ ] Add meta tags for SEO
- [ ] Create 404 page

## 🎯 Key Components Explained

### BentoCard
Flexible card component for the Bento Grid with size variants:
- `small`: 1x1 grid cells
- `medium`: 1x2 grid cells
- `large`: 2x2 grid cells
- `wide`: 2x1 grid cells
- `tall`: 1x3 grid cells

### SplashScreen
Animated loading screen that plays once on initial load with:
- Logo pulse animation
- Fade out after 2 seconds
- Auto-scrolls to top

### VideoBackground
Cinematic background video with:
- Auto-play and loop
- Darkened overlay
- Fixed position
- Optimized for performance

## 💡 Tips

1. **Keep it Clean**: The code is intentionally simple and readable for easy customization
2. **Use Variables**: Leverage CSS variables for consistent theming
3. **Component Reuse**: BentoCard and ProjectCard are flexible - use them everywhere
4. **Motion Sparingly**: Animations enhance, don't overuse them
5. **Optimize Assets**: Use WebP format for images, optimize videos

## 📚 Resources

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [motion-v Documentation](https://motion-v.vercel.app/)
- [@nuxt/image Documentation](https://image.nuxt.com/)
- [@nuxt/icon Documentation](https://github.com/nuxt/icon)

## 🤝 Credits

Designed and developed by Shaaf Yousaf

---

**Last Updated**: February 7, 2026

