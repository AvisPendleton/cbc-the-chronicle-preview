
const SUPABASE_URL = "https://tpgwbnqgxkukaeontncl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_EaEd9IrjZwEBJMDN0VNEAg_jZgJ4hCp";

if (
  !SUPABASE_URL.startsWith("https://") ||
  !SUPABASE_PUBLISHABLE_KEY.startsWith("sb_publishable_")
) {
  console.error("CBC Supabase configuration is invalid.");
} else {
  window.cbcSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
}

