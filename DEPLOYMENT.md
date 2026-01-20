# Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## Prerequisites

- Node.js installed (v18 or higher)
- Git installed
- A GitHub account

## Build for Production

Before deploying, create a production build:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

---

## Deployment Options

### 1. Vercel (Recommended)

Vercel offers the easiest deployment with automatic HTTPS and global CDN.

#### Steps:

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts to link your project.

3. **Or Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

**Custom Domain**: Add your domain in Vercel dashboard under Project Settings → Domains.

---

### 2. Netlify

#### Steps:

1. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy via CLI**:
   ```bash
   npm run build
   netlify deploy --prod
   ```

3. **Or Deploy via GitHub**:
   - Push code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

---

### 3. GitHub Pages

#### Steps:

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update vite.config.js**:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // Add this line
     // ... rest of config
   })
   ```

3. **Add deploy script to package.json**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to Pages
   - Select `gh-pages` branch
   - Save

Your site will be live at: `https://yourusername.github.io/your-repo-name/`

---

### 4. Render

#### Steps:

1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New" → "Static Site"
4. Connect your GitHub repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Create Static Site"

---

## Environment Variables

If you need to add environment variables (API keys, etc.):

1. Create `.env` file in root:
   ```
   VITE_API_KEY=your_key_here
   ```

2. Access in code:
   ```javascript
   const apiKey = import.meta.env.VITE_API_KEY
   ```

3. Add environment variables in your hosting platform's dashboard.

---

## Custom Domain Setup

### For Vercel/Netlify:
1. Go to project settings
2. Add custom domain
3. Update DNS records as instructed
4. Wait for DNS propagation (up to 48 hours)

### DNS Records Example:
```
Type: A
Name: @
Value: [Platform's IP address]

Type: CNAME
Name: www
Value: [Platform's domain]
```

---

## Performance Optimization

Your site is already optimized with:
- ✅ Code splitting
- ✅ Minification
- ✅ Tree shaking
- ✅ Asset optimization

### Additional Tips:
1. Enable compression on your hosting platform
2. Use CDN for assets
3. Monitor with Google Lighthouse
4. Enable HTTP/2

---

## Troubleshooting

### Build Fails
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`
- Check Node version: `node --version`

### 404 on Refresh (SPA Issue)
Add `_redirects` file in `public` folder:
```
/*    /index.html   200
```

### Slow Build Times
- Reduce dependencies
- Use production build only when deploying
- Enable caching in CI/CD

---

## Monitoring

After deployment, monitor your site with:
- [Google Analytics](https://analytics.google.com)
- [Google Search Console](https://search.google.com/search-console)
- [Vercel Analytics](https://vercel.com/analytics) (if using Vercel)

---

## Continuous Deployment

Most platforms support automatic deployments:
1. Push to GitHub
2. Platform automatically builds and deploys
3. Live in minutes

Configure branch-based deployments:
- `main` → Production
- `develop` → Preview/Staging

---

## Support

For platform-specific issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [docs.github.com/pages](https://docs.github.com/pages)
- Render: [render.com/docs](https://render.com/docs)
