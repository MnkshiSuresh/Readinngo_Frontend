import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://amtxrgubkauggkhjdzhy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtdHhyZ3Via2F1Z2draGpkemh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0ODU2MDgsImV4cCI6MjAzMTA2MTYwOH0.noPpqs8wTumJYf6_Zxvgb8wK2zLsG84klClDn4_Va9Q';
export const supabase = createClient(supabaseUrl, supabaseKey);
