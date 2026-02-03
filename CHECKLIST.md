# Setup Checklist

Use this checklist to ensure your gym trainer portfolio is fully set up and ready to deploy.

## 📋 Pre-Deployment Checklist

### 1. Supabase Setup
- [ ] Created Supabase account
- [ ] Created new project
- [ ] Copied Project URL
- [ ] Copied Anon Key
- [ ] Created `contact_submissions` table
- [ ] Set up Row Level Security policies
- [ ] Created `trainer-portfolio` storage bucket
- [ ] Made bucket PUBLIC
- [ ] Verified bucket policies

### 2. Image Upload
- [ ] **Trainer_pic/** folder created
  - [ ] Trainer1.jpg uploaded
  - [ ] Trainer2.jpg uploaded
  - [ ] Trainer3.jpg uploaded
  - [ ] Trainer4.jpg uploaded
  - [ ] Trainer5.jpg uploaded
  - [ ] Trainer6.jpg uploaded
  - [ ] Trainer7.jpg uploaded

- [ ] **competition/** folder created
  - [ ] contest_1.jpg uploaded
  - [ ] contest_2.jpg uploaded
  - [ ] contest_3.jpg uploaded
  - [ ] contest_4.jpg uploaded
  - [ ] contest_5.jpg uploaded
  - [ ] contest_6.jpg uploaded
  - [ ] contest_7.jpg uploaded

- [ ] **chief_guest/** folder created
  - [ ] chief_1.jpg uploaded
  - [ ] chief_2.jpg uploaded
  - [ ] chief_3.jpg uploaded
  - [ ] chief_4.jpg uploaded

- [ ] **transformation/** folder created
  - [ ] client_1.jpg uploaded
  - [ ] client_2.jpg uploaded
  - [ ] client_3.jpg uploaded
  - [ ] client_4.jpg uploaded
  - [ ] client_5.jpg uploaded
  - [ ] client_6.jpg uploaded
  - [ ] client_7.jpg uploaded
  - [ ] client_8.jpg uploaded
  - [ ] client_9.jpg uploaded
  - [ ] client_10.jpg uploaded
  - [ ] client_11.jpg uploaded

- [ ] **Competition_Guiding/** folder created
  - [ ] comp_1.jpg uploaded
  - [ ] comp_2.jpg uploaded
  - [ ] comp_3.jpg uploaded
  - [ ] comp_4.jpg uploaded

### 3. Environment Configuration
- [ ] Created `.env` file
- [ ] Added `VITE_SUPABASE_URL`
- [ ] Added `VITE_SUPABASE_ANON_KEY`
- [ ] Added `VITE_WHATSAPP_NUMBER=9787037367`
- [ ] Verified `.env` is in `.gitignore`

### 4. Local Testing
- [ ] Ran `npm install`
- [ ] Ran `npm run dev`
- [ ] Website loads at http://localhost:5173
- [ ] Hero section displays correctly
- [ ] All images load in galleries
- [ ] Carousel auto-plays
- [ ] Navigation works (all links)
- [ ] Mobile menu opens/closes
- [ ] Contact form fields work
- [ ] Form validation works
- [ ] Form submits to Supabase
- [ ] WhatsApp redirect works
- [ ] Call buttons work
- [ ] Tested on mobile device (or responsive mode)

### 5. Content Verification
- [ ] Trainer name is correct: "Kather Maideen"
- [ ] Title is correct: "ICREPS Certified Trainer | Royals Multi Gym"
- [ ] Phone number is correct: 9787037367
- [ ] WhatsApp number is correct: 9787037367
- [ ] All role badges display
- [ ] Section titles are correct
- [ ] Footer information is accurate

### 6. Performance Check
- [ ] All images compressed (< 500KB each)
- [ ] Images are in JPG format
- [ ] No console errors in browser
- [ ] Animations are smooth
- [ ] Page loads quickly
- [ ] No broken links

### 7. SEO & Meta Tags
- [ ] Page title is set
- [ ] Meta description is set
- [ ] Open Graph tags are set
- [ ] Favicon is set (optional)

### 8. Deployment Preparation
- [ ] Chose deployment platform (Vercel/Netlify)
- [ ] Created account on platform
- [ ] Pushed code to GitHub (if using Git deploy)
- [ ] Production build works: `npm run build`
- [ ] Preview build works: `npm run preview`

### 9. Production Deployment
- [ ] Deployed to platform
- [ ] Added environment variables to platform
- [ ] Site is live and accessible
- [ ] SSL certificate is active (https://)
- [ ] All images load in production
- [ ] Contact form works in production
- [ ] WhatsApp redirect works in production
- [ ] Tested on real mobile device

### 10. Post-Deployment
- [ ] Tested all sections on live site
- [ ] Tested on multiple browsers (Chrome, Firefox, Safari)
- [ ] Tested on multiple devices (desktop, tablet, mobile)
- [ ] Submitted contact form test
- [ ] Verified form data in Supabase
- [ ] Shared link with client for approval

## 🎯 Optional Enhancements
- [ ] Added custom domain
- [ ] Set up Google Analytics
- [ ] Added social media links
- [ ] Created sitemap.xml
- [ ] Submitted to Google Search Console
- [ ] Set up monitoring/analytics
- [ ] Created backup of Supabase data

## 🐛 Troubleshooting

If you encounter issues, check:

1. **Images not loading**
   - Verify bucket is public
   - Check file names match exactly (case-sensitive)
   - Check browser console for 404 errors

2. **Contact form errors**
   - Verify Supabase credentials
   - Check table exists
   - Check RLS policies
   - Check browser console

3. **Build errors**
   - Run `npm install` again
   - Delete `node_modules` and reinstall
   - Check for typos in imports

4. **WhatsApp not opening**
   - Verify phone number format
   - Test on mobile device
   - Check URL encoding

## 📞 Need Help?

Refer to these guides:
- **QUICKSTART.md** - Quick setup guide
- **SUPABASE_SETUP.md** - Detailed Supabase instructions
- **DEPLOYMENT.md** - Deployment instructions
- **README.md** - Complete documentation

---

**Once all items are checked, your portfolio is ready to go live! 🚀**
