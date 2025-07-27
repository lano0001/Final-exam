import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://chpfmabckfbsdtulzqwv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNocGZtYWJja2Zic2R0dWx6cXd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NzM1MDcsImV4cCI6MjA2OTE0OTUwN30.P4IW9M9OdsV7h3bBsM4G96X9Ep64mbuatVdTODQgCe8";

export const supabase = createClient(supabaseUrl, supabaseKey);
