# 🚀 Setup Checklist

Your Nuxt 3 portfolio is ready! Follow these steps to get it running.

## ✅ Completed

- [x] Global CSS with Gold/Black/White theme
- [x] Nuxt config with all modules (@nuxt/image, @nuxt/icon, @nuxt/fonts, motion-v)
- [x] Splash screen with logo animation
- [x] Video background component
- [x] Header with navigation
- [x] Footer with social links
- [x] Bento Grid homepage
- [x] Lab page (projects & hackathons)
- [x] Studio page (creative work)
- [x] Dev page (experience & tech stack)
- [x] Reusable components (BentoCard, ProjectCard)
- [x] Motion animation examples

## 📋 To-Do Before Launch

### 1. Copy Assets
Copy these files from your old site to `public/`:

```
public/
├── resources/
│   ├── logo.png           ← Your logo
│   ├── pic.png            ← Your profile picture
│   ├── Test1.webm         ← Background video
│   ├── GLOW.png           ← Project screenshots
│   ├── Zarab.png
│   ├── PortfolioPromo.png
│   └── showcase.gif
└── images/
    ├── imagEHR logo.png   ← More project images
    ├── pla2.jpeg
    ├── gffe.png
    └── hawkeye.png
```

### 2. Start Development Server

```bash
cd shaafyousaf-nuxt
pnpm dev
```

Visit: http://localhost:3000

### 3. Test Pages
- [ ] Homepage (/) - Check Bento Grid layout
- [ ] Lab page (/lab) - Verify project links
- [ ] Studio page (/studio) - Check masonry grid
- [ ] Dev page (/dev) - Review experience timeline

### 4. Update Content

#### Homepage (`pages/index.vue`)
- Update stats in profile card
- Check featured projects
- Verify all links work

#### Lab Page (`pages/lab.vue`)
- Confirm hackathon projects
- Update project descriptions
- Test external links

#### Studio Page (`pages/studio.vue`)
- Replace placeholder images with real design work
- Update YouTube channel link
- Check design portfolio link

#### Dev Page (`pages/dev.vue`)
- Update work experience dates
- Add any missing tech skills
- Verify resume link

### 5. Customize Branding

#### Colors (optional)
Edit `assets/css/global.css`:
```css
:root {
  --color-gold: #FFD700;      /* Adjust gold shade */
  --color-gold-dark: #FF8C00; /* Adjust dark gold */
}
```

#### Fonts (optional)
Edit `nuxt.config.ts`:
```ts
fonts: {
  families: [
    { name: 'Your Font', provider: 'google', weights: [400, 700] }
  ]
}
```

### 6. Add Motion Animations (Optional)

See `MOTION_GUIDE.md` for examples. Quick start:

```vue
<script setup>
import { Motion } from 'motion-v'
</script>

<template>
  <Motion
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6 }"
  >
    <div>Your content</div>
  </Motion>
</template>
```

### 7. SEO & Meta Tags

Update in each page's `<script setup>`:

```ts
useSeoMeta({
  title: 'Your Page Title',
  description: 'Your page description',
  ogImage: '/resources/logo.png',
})
```

### 8. Test Responsive Design

- [ ] Mobile (< 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (> 1024px)

Use browser DevTools to test different screen sizes.

### 9. Performance Check

```bash
pnpm build
pnpm preview
```

Check:
- [ ] Page load speed
- [ ] Image optimization
- [ ] Video autoplay works
- [ ] Animations smooth on mobile

### 10. Deploy

#### Option A: Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

#### Option B: Netlify

```bash
pnpm generate
# Upload .output/public to Netlify
```

## 🐛 Troubleshooting

### Assets not loading
- Ensure files are in `public/` folder
- Check file names match (case-sensitive)
- Try clearing cache: `rm -rf .nuxt`

### Animations not working
- Check motion-v is installed: `pnpm list motion-v`
- Import Motion: `import { Motion } from 'motion-v'`
- See examples in `components/MotionDemo.vue`

### Styles not applying
- Run `pnpm dev` again
- Check for CSS syntax errors
- Verify global.css is imported in nuxt.config.ts

### Build errors
```bash
# Clean and rebuild
rm -rf .nuxt node_modules
pnpm install
pnpm dev
```

## 📞 Next Steps

1. **Start the server**: `pnpm dev`
2. **Copy your assets** to `public/`
3. **Test all pages** and links
4. **Customize content** as needed
5. **Deploy** when ready!

## 📚 Documentation

- [README.md](./README.md) - Full documentation
- [MOTION_GUIDE.md](./MOTION_GUIDE.md) - Animation examples
- **Components**:
  - `BentoCard.vue` - Flexible grid cards
  - `ProjectCard.vue` - Project showcases
  - `MotionDemo.vue` - Animation examples

---

**Happy coding!** 🎉 Your portfolio structure is ready to go!
