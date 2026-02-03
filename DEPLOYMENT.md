# Deployment Guide

This guide covers deploying your gym trainer portfolio to popular hosting platforms.

## Prerequisites

- Completed Supabase setup (see SUPABASE_SETUP.md)
- Environment variables configured
- All images uploaded to Supabase Storage

## Option 1: Deploy to Vercel (Recommended)

Vercel offers the best experience for Vite/React apps with automatic deployments.

### Via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings

3. **Add Environment Variables**
   - In project settings, go to "Environment Variables"
   - Add:
     - `VITE_SUPABASE_URL` = your_supabase_url
     - `VITE_SUPABASE_ANON_KEY` = your_supabase_anon_key
     - `VITE_WHATSAPP_NUMBER` = 9787037367

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variables when prompted
# Or add them in the Vercel dashboard

# Deploy to production
vercel --prod
```

## Option 2: Deploy to Netlify

### Via Netlify Dashboard

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Drag and drop the `dist` folder
   - Or click "New site from Git" and connect your repo

3. **Configure Build Settings** (if using Git)
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Add Environment Variables**
   - Go to Site settings > Environment variables
   - Add the same variables as Vercel

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

## Option 3: Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/gym-trainer-portfolio/', // Your repo name
   })
   ```

3. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository Settings > Pages
   - Source: gh-pages branch
   - Your site will be at: `https://username.github.io/gym-trainer-portfolio/`

**Note**: GitHub Pages doesn't support environment variables. You'll need to use a different approach or choose Vercel/Netlify.

## Option 4: Deploy to Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Public directory: `dist`
   - Single-page app: Yes
   - GitHub deploys: Optional

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## Custom Domain Setup

### For Vercel

1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatic

### For Netlify

1. Go to Site Settings > Domain Management
2. Add custom domain
3. Update DNS records
4. SSL is automatic via Let's Encrypt

## Environment Variables Security

**Important**: Never commit `.env` file to Git!

### For Production

1. Always use platform-specific environment variable settings
2. Never hardcode API keys in source code
3. Use different Supabase projects for dev/prod if needed

## Post-Deployment Checklist

- [ ] All images loading correctly
- [ ] Contact form submitting to Supabase
- [ ] WhatsApp redirect working
- [ ] All navigation links working
- [ ] Mobile responsive on real devices
- [ ] SEO meta tags present (check page source)
- [ ] SSL certificate active (https://)
- [ ] Test on multiple browsers
- [ ] Check Google PageSpeed Insights
- [ ] Submit sitemap to Google Search Console

## Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Compress images before uploading to Supabase
   - Use WebP format when possible
   - Recommended max size: 500KB per image

2. **Enable Caching**
   - Vercel/Netlify handle this automatically
   - For custom servers, configure cache headers

3. **Analyze Bundle Size**
   ```bash
   npm run build
   # Check dist folder size
   ```

## Monitoring

### Vercel Analytics

- Enable in Project Settings > Analytics
- Track page views and performance

### Google Analytics (Optional)

1. Create GA4 property
2. Add tracking code to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## Troubleshooting

### Build Fails

**Error**: `Module not found`
- Run `npm install` to ensure all dependencies are installed
- Check for typos in import statements

**Error**: `Environment variable not found`
- Ensure all env vars are set in platform settings
- Restart build after adding env vars

### Images Not Loading in Production

- Verify Supabase bucket is public
- Check CORS settings in Supabase
- Ensure URLs are using HTTPS

### Contact Form Not Working

- Check Supabase credentials in env vars
- Verify RLS policies on `contact_submissions` table
- Check browser console for errors

## Continuous Deployment

### Auto-deploy on Git Push

**Vercel/Netlify**: Automatically enabled when connected to Git

**Manual Setup**:
1. Push to GitHub
2. Platform detects changes
3. Runs build automatically
4. Deploys if build succeeds

## Rollback

### Vercel
- Go to Deployments
- Click on previous deployment
- Click "Promote to Production"

### Netlify
- Go to Deploys
- Click on previous deploy
- Click "Publish deploy"

## Support

For deployment issues:
- Vercel: https://vercel.com/support
- Netlify: https://www.netlify.com/support/
- Firebase: https://firebase.google.com/support

---

**Recommended**: Use Vercel for the best developer experience and automatic optimizations!
