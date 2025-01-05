import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qizdfbpbwycxdkjgbzzu.supabase.co"; // Base URL of your Supabase project
const supabaseKey = import.meta.env.VITE_SUPABASE_ACCESS__KEY; // Corrected variable name, removed extra semicolon

export const supabase = createClient(supabaseUrl, supabaseKey);
