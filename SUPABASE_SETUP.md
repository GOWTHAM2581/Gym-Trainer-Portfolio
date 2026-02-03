# Supabase Setup Guide

## Step 1: Create Supabase Project

1. Go to https://supabase.com
2. Sign up or log in
3. Click "New Project"
4. Fill in project details:
   - **Name**: gym-trainer-portfolio
   - **Database Password**: (create a strong password)
   - **Region**: Choose closest to your location
5. Click "Create new project"
6. Wait for project to be created (takes ~2 minutes)

## Step 2: Get API Credentials

1. Go to Project Settings (gear icon in sidebar)
2. Click on "API" in the settings menu
3. Copy the following:
   - **Project URL** (under Project URL)
   - **anon public** key (under Project API keys)
4. Paste these into your `.env` file

## Step 3: Create Database Table

1. Go to "SQL Editor" in the left sidebar
2. Click "New query"
3. Paste the following SQL:

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

-- Create policy to allow public inserts
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated reads
CREATE POLICY "Allow authenticated reads" ON contact_submissions
  FOR SELECT TO authenticated
  USING (true);
```

4. Click "Run" or press Ctrl+Enter
5. You should see "Success. No rows returned"

## Step 4: Create Storage Bucket

1. Go to "Storage" in the left sidebar
2. Click "Create a new bucket"
3. Enter bucket name: `trainer-portfolio`
4. **Important**: Make sure "Public bucket" is checked ✅
5. Click "Create bucket"

## Step 5: Upload Images

### Option A: Upload via Dashboard

1. Click on the `trainer-portfolio` bucket
2. Create folders by clicking "Create folder":
   - `Trainer_pic`
   - `competition`
   - `chief_guest`
   - `transformation`
   - `Competition_Guiding`

3. Upload images to each folder:
   - **Trainer_pic**: Upload 7 images named `Trainer1.jpg` to `Trainer7.jpg`
   - **competition**: Upload 7 images named `contest_1.jpg` to `contest_7.jpg`
   - **chief_guest**: Upload 4 images named `chief_1.jpg` to `chief_4.jpg`
   - **transformation**: Upload 11 images named `client_1.jpg` to `client_11.jpg`
   - **Competition_Guiding**: Upload 4 images named `comp_1.jpg` to `comp_4.jpg`

### Option B: Upload via Supabase CLI (Advanced)

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Upload files
supabase storage upload trainer-portfolio/Trainer_pic/Trainer1.jpg ./path/to/Trainer1.jpg
```

## Step 6: Verify Storage Bucket is Public

1. Go to Storage > trainer-portfolio
2. Click on "Policies" tab
3. You should see a policy that allows public access
4. If not, click "New Policy" and create:
   - **Policy name**: Public Access
   - **Allowed operation**: SELECT
   - **Target roles**: public
   - **USING expression**: `true`

## Step 7: Test Image URLs

1. Click on any uploaded image
2. Click "Get URL"
3. Copy the URL and paste it in a new browser tab
4. If you can see the image, storage is configured correctly!

## Step 8: View Contact Form Submissions

1. Go to "Table Editor" in the left sidebar
2. Select `contact_submissions` table
3. You'll see all form submissions here
4. You can export data as CSV if needed

## Troubleshooting

### Images not loading in the app

**Problem**: Images show broken links

**Solution**:
1. Verify bucket is public
2. Check image file names match exactly (case-sensitive)
3. Ensure images are in correct folders
4. Check browser console for 404 errors

### Contact form not saving

**Problem**: Form shows error when submitting

**Solution**:
1. Verify table `contact_submissions` exists
2. Check RLS policies are created
3. Verify API credentials in `.env` are correct
4. Check browser console for specific error messages

### CORS Errors

**Problem**: Browser shows CORS policy errors

**Solution**:
1. Go to Project Settings > API
2. Add your domain to "Allowed origins"
3. For local development, add `http://localhost:5173`

## Security Best Practices

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Use environment variables** - Don't hardcode API keys
3. **Enable RLS** - Always use Row Level Security on tables
4. **Limit bucket size** - Set max file size in bucket settings
5. **Monitor usage** - Check Supabase dashboard for usage stats

## Need Help?

- Supabase Documentation: https://supabase.com/docs
- Supabase Discord: https://discord.supabase.com
- GitHub Issues: Create an issue in this repository

---

**Once setup is complete, update your `.env` file and restart the development server!**
