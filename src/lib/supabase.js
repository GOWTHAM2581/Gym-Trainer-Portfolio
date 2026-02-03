import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials not found. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

// Helper function to get image URL from Supabase Storage
export const getImageUrl = (bucket, path) => {
    if (!supabaseUrl) return '';
    return `${supabaseUrl}/storage/v1/object/public/${bucket}/${path}`;
};
