# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies (if not already done)

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
# On Windows PowerShell
Copy-Item .env.example .env

# On Mac/Linux
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_WHATSAPP_NUMBER=9787037367
```

### 3. Set Up Supabase (First Time Only)

Follow the detailed guide in `SUPABASE_SETUP.md` to:
- Create a Supabase project
- Set up the database table
- Create storage bucket
- Upload images

### 4. Run Development Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## 📁 Image Upload Checklist

Make sure you have uploaded all images to Supabase Storage in the `trainer-portfolio` bucket:

- [ ] **Trainer_pic/** - 7 images (Trainer1.jpg to Trainer7.jpg)
- [ ] **competition/** - 7 images (contest_1.jpg to contest_7.jpg)
- [ ] **chief_guest/** - 4 images (chief_1.jpg to chief_4.jpg)
- [ ] **transformation/** - 11 images (client_1.jpg to client_11.jpg)
- [ ] **Competition_Guiding/** - 4 images (comp_1.jpg to comp_4.jpg)

## 🎨 What You'll See

### Hero Section
- Large animated name display
- Role badges (Bodybuilder, Powerlifter, etc.)
- Call and WhatsApp CTA buttons
- Animated background effects

### Gallery Sections
- **Trainer Gallery**: Masonry-style photo grid
- **Competition Achievements**: Grid with hover effects
- **Chief Guest**: Auto-playing carousel
- **Client Transformations**: Before/after cards with stats
- **Competition Guiding**: Large coaching showcase

### Contact Form
- Name, phone, goal, and message fields
- Saves to Supabase database
- Redirects to WhatsApp with pre-filled message

## 🔧 Common Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📱 Test on Mobile

1. Find your local IP address:
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig
   ```

2. Access from mobile device:
   ```
   http://YOUR_IP_ADDRESS:5173
   ```

## 🐛 Quick Troubleshooting

### Port already in use
```bash
# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5173 | xargs kill
```

### Images not loading
- Check Supabase bucket is public
- Verify image file names match exactly
- Check browser console for errors

### Contact form errors
- Verify Supabase credentials in `.env`
- Check `contact_submissions` table exists
- Ensure RLS policies are set up

## 📚 Additional Resources

- **Full Setup**: See `README.md`
- **Supabase Guide**: See `SUPABASE_SETUP.md`
- **Deployment**: See `DEPLOYMENT.md`

## 🎯 Next Steps

1. ✅ Run the development server
2. ✅ Upload images to Supabase
3. ✅ Test contact form
4. ✅ Test on mobile devices
5. ✅ Deploy to production (Vercel recommended)
6. ✅ Add custom domain (optional)

## 💡 Tips

- Use **Vercel** for easiest deployment
- Compress images before uploading (max 500KB each)
- Test WhatsApp redirect on mobile
- Check all sections on different screen sizes
- Enable analytics after deployment

---

**Need help?** Check the detailed guides or contact support!
