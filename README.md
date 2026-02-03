# Kather Maideen - Professional Gym Trainer Portfolio

A fully responsive, modern portfolio website for gym trainer Kather Maideen, built with React.js (Vite), Tailwind CSS, and Supabase.

## 🎯 Features

- **Hero Section**: Prominent display of trainer credentials with animated role badges
- **Trainer Gallery**: Masonry-style photo gallery with modal view
- **Competition Achievements**: Grid showcase of competition highlights
- **Chief Guest Appearances**: Auto-playing carousel with thumbnails
- **Client Transformations**: Before/after style transformation cards with stats
- **Competition Guiding**: Athletes coached for competitions
- **Contact Form**: Integrated with Supabase database and WhatsApp redirect
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Dark Gym Theme**: Premium dark UI with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React.js 18 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Backend**: Supabase (Database + Storage)
- **Routing**: React Router DOM

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
cd gym-trainer-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Supabase Setup

#### Create a Supabase Project

1. Go to [Supabase](https://supabase.com) and create a new project
2. Note your project URL and anon key from Project Settings > API

#### Create Database Table

Run this SQL in the Supabase SQL Editor:

```sql
-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  goal TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated reads
CREATE POLICY "Allow authenticated reads" ON contact_submissions
  FOR SELECT TO authenticated
  USING (true);
```

#### Create Storage Bucket

1. Go to Storage in Supabase dashboard
2. Create a new bucket named `trainer-portfolio`
3. Make it **public**
4. Upload images in the following structure:

```
trainer-portfolio/
├── Trainer_pic/
│   ├── Trainer1.jpg
│   ├── Trainer2.jpg
│   ├── ... (up to Trainer7.jpg)
├── competition/
│   ├── contest_1.jpg
│   ├── contest_2.jpg
│   ├── ... (up to contest_7.jpg)
├── chief_guest/
│   ├── chief_1.jpg
│   ├── chief_2.jpg
│   ├── ... (up to chief_4.jpg)
├── transformation/
│   ├── client_1.jpg
│   ├── client_2.jpg
│   ├── ... (up to client_11.jpg)
└── Competition_Guiding/
    ├── comp_1.jpg
    ├── comp_2.jpg
    ├── ... (up to comp_4.jpg)
```

### 4. Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_WHATSAPP_NUMBER=9787037367
```

Replace `your_supabase_project_url` and `your_supabase_anon_key` with your actual Supabase credentials.

### 5. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Add environment variables in Vercel dashboard

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

## 📱 Contact Form Workflow

1. User fills out the contact form
2. Form data is saved to Supabase `contact_submissions` table
3. User is automatically redirected to WhatsApp with pre-filled message
4. WhatsApp message includes: name, phone, goal, and message

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content

- Update trainer information in `src/components/Hero.jsx`
- Modify social links in `src/components/Footer.jsx`
- Change contact details in `src/components/ContactForm.jsx`

## 📄 Project Structure

```
gym-trainer-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── TrainerGallery.jsx
│   │   ├── CompetitionAchievements.jsx
│   │   ├── ChiefGuest.jsx
│   │   ├── ClientTransformations.jsx
│   │   ├── CompetitionGuiding.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── lib/
│   │   └── supabase.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🔧 Troubleshooting

### Images not loading

- Ensure Supabase storage bucket is public
- Check image paths match the folder structure
- Verify environment variables are set correctly

### Contact form not submitting

- Check Supabase credentials in `.env`
- Verify the `contact_submissions` table exists
- Check browser console for errors

## 📞 Support

For any issues or questions, contact:
- **Phone**: 9787037367
- **WhatsApp**: [Click here](https://wa.me/9787037367)

## 📝 License

This project is created for Kather Maideen's professional portfolio.

---

**Built with 💪 by a fitness enthusiast for fitness professionals**
