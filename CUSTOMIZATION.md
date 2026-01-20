# Customization Guide

This guide will help you customize your portfolio to match your preferences and keep it updated.

## Table of Contents
1. [Personal Information](#personal-information)
2. [Colors & Theme](#colors--theme)
3. [Adding Projects](#adding-projects)
4. [Updating Skills](#updating-skills)
5. [Modifying Sections](#modifying-sections)
6. [Fonts & Typography](#fonts--typography)
7. [SEO Optimization](#seo-optimization)

---

## Personal Information

### Update Contact Details

**File**: `src/components/Contact.jsx`

```javascript
const contactMethods = [
  {
    name: 'Email',
    value: 'your-email@example.com', // Change this
    href: 'mailto:your-email@example.com', // Change this
    // ...
  },
  // Update LinkedIn and GitHub similarly
];
```

### Update Resume Link

**Files**: 
- `src/components/Navbar.jsx`
- `src/components/Contact.jsx`

Search for the Google Drive link and replace with your resume URL.

### Update Hero Section

**File**: `src/components/Hero.jsx`

```javascript
<h1>
  <span className="gradient-text">Your Name</span>
</h1>
<h2>Your Title</h2>
<p>Your Location</p>
```

### Update About Section

**File**: `src/components/About.jsx`

Edit the paragraph content to reflect your experience and expertise.

---

## Colors & Theme

### Primary Colors

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: {
    400: '#22d3ee', // Light cyan
    500: '#06b6d4', // Main cyan
    600: '#0891b2', // Dark cyan
  },
}
```

Change these hex values to your preferred colors.

### CSS Variables

**File**: `src/index.css`

```css
:root {
  --accent-primary: #06b6d4; /* Change main accent */
  --accent-secondary: #22d3ee; /* Change secondary accent */
}
```

### Gradient Colors

**File**: `src/components/Projects.jsx`

Each project has a gradient property:
```javascript
gradient: 'from-blue-500 to-cyan-500', // Change these Tailwind colors
```

---

## Adding Projects

**File**: `src/components/Projects.jsx`

Add a new project to the `projects` array:

```javascript
{
  id: 5, // Increment ID
  title: 'Your Project Name',
  subtitle: 'Project Type',
  description: 'Short description for card',
  fullDescription: 'Detailed description for modal',
  technologies: ['React', 'Node.js', 'etc'],
  liveLink: 'https://your-project.com', // or null if no live demo
  githubLink: 'https://github.com/username/repo',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ],
  gradient: 'from-purple-500 to-pink-500',
  badge: 'New', // Optional badge
}
```

### Remove a Project

Simply delete the project object from the array or comment it out.

---

## Updating Skills

**File**: `src/components/Skills.jsx`

### Add a New Skill Category

```javascript
{
  title: 'Your Category',
  skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  icon: (
    <svg><!-- Your SVG icon --></svg>
  ),
}
```

### Add Skills to Existing Category

Find the category and add to the `skills` array:
```javascript
skills: ['React.js', 'Redux Toolkit', 'Your New Skill'],
```

### Change Icons

Replace the SVG code with icons from:
- [Heroicons](https://heroicons.com/)
- [Lucide Icons](https://lucide.dev/)
- Custom SVG

---

## Modifying Sections

### Reorder Sections

**File**: `src/App.jsx`

Change the order of components:
```javascript
<main>
  <Hero />
  <Skills />      // Moved up
  <About />       // Moved down
  <Projects />
  <Experience />
  <Contact />
</main>
```

### Remove a Section

Comment out or delete the import and component:
```javascript
// import About from './components/About'

<main>
  <Hero />
  {/* <About /> */}  // Section removed
  <Skills />
</main>
```

### Add a New Section

1. Create component in `src/components/YourSection.jsx`
2. Import in `App.jsx`
3. Add to main element
4. Add navigation link in `Navbar.jsx`

---

## Fonts & Typography

### Change Fonts

**File**: `index.html`

Replace Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

**File**: `tailwind.config.js`

Update font family:
```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

### Font Sizes

**Files**: Individual component files

Change Tailwind classes:
- `text-4xl` → `text-5xl` (larger)
- `text-lg` → `text-base` (smaller)

---

## SEO Optimization

### Meta Tags

**File**: `index.html`

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your custom description" />
<meta name="keywords" content="your, keywords, here" />
```

### Open Graph Tags

```html
<meta property="og:title" content="Your Name | Portfolio" />
<meta property="og:description" content="Your description" />
<meta property="og:url" content="https://yoursite.com" />
```

### Add Favicon

1. Generate favicon at [favicon.io](https://favicon.io)
2. Place files in `public` folder
3. Update `index.html`:
```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

---

## Animations

### Adjust Animation Speed

**File**: `tailwind.config.js`

```javascript
animation: {
  'gradient': 'gradient 8s linear infinite', // Change 8s to your preference
}
```

### Disable Animations

**File**: `src/index.css`

Comment out or remove animation properties:
```css
/* html {
  scroll-behavior: smooth;
} */
```

---

## Mobile Responsiveness

### Adjust Breakpoints

**File**: `tailwind.config.js`

```javascript
screens: {
  'sm': '640px',
  'md': '768px',   // Adjust these
  'lg': '1024px',
  'xl': '1280px',
}
```

### Test Responsive Design

1. Run `npm run dev`
2. Open browser DevTools (F12)
3. Toggle device toolbar
4. Test different screen sizes

---

## Advanced Customization

### Add Dark/Light Mode Toggle

1. Install theme package:
   ```bash
   npm install next-themes
   ```

2. Implement theme switcher in Navbar
3. Update Tailwind config for dark mode

### Add Animations Library

```bash
npm install framer-motion
```

Then use in components for advanced animations.

### Add Analytics

**Google Analytics**:
1. Get tracking ID from Google Analytics
2. Add script to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

## Testing Changes

1. **Development**: `npm run dev`
2. **Production Build**: `npm run build`
3. **Preview Build**: `npm run preview`

Always test in production mode before deploying.

---

## Common Customizations

### Change Logo

**File**: `src/components/Navbar.jsx`

```javascript
<a href="#" className="text-xl md:text-2xl font-bold gradient-text">
  Your Logo Text
</a>
```

Or add an image:
```javascript
<img src="/logo.png" alt="Logo" className="h-10" />
```

### Update Footer

**File**: `src/components/Footer.jsx`

Change copyright text, add links, or modify social icons.

### Modify Button Styles

**File**: `src/index.css`

```css
.btn-primary {
  /* Customize button appearance */
  @apply px-8 py-4 bg-your-color;
}
```

---

## Need Help?

- Check component files for inline comments
- Refer to [Tailwind CSS docs](https://tailwindcss.com/docs)
- Refer to [React docs](https://react.dev)
- Check browser console for errors

---

## Best Practices

1. **Keep it Simple**: Don't over-customize
2. **Test Thoroughly**: Check all breakpoints
3. **Optimize Images**: Compress before adding
4. **Maintain Consistency**: Use design system
5. **Version Control**: Commit changes regularly
