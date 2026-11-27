
// CBC The Chronicle — Supabase connection

// Replace these two values with your own information.
// NEVER put a Secret key or service_role key here.

const SUPABASE_URL = "https://tpgwbnqgxkukaeontncl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_EaEd9IrjZwEBJMDN0VNEAg_jZgJ4hCp";

if (
  SUPABASE_URL === "https://tpgwbnqgxkukaeontncl.supabase.co" ||
  SUPABASE_PUBLISHABLE_KEY === "sb_publishable_EaEd9IrjZwEBJMDN0VNEAg_jZgJ4hCp"
) {
  console.warn("CBC Supabase connection is not configured yet.");
} else {
  window.cbcSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
}
