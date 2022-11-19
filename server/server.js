import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_API_KEY, SUPABASE_URL } from '@env';

// const SUPABASE_URL = 'https://fqcslcdlnyndwhpphzez.supabase.co';
// const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxY3NsY2RsbnluZHdocHBoemV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMDA5MDYsImV4cCI6MTk4MTg3NjkwNn0.MMS2eo6ipMXcQiSfu403Z4nOJd127XWHb3QLY0OlxXQ';

// export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
 const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,

  },
 });

export const writeItemData = async ({ name, }) => { }

export default supabase;