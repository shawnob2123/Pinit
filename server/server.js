import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_API_KEY, SUPABASE_URL } from '@env';

// export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
 export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,

  },
 });

export const writeCycleData = async ({ name, anabolics_used, start_date, end_date, duration, frequency, notes }) => {
  const { data, error } = await supabase.from('cycles').insert([
    {
      user_id: supabase.auth.user().id,
      name,
      anabolics_used,
      start_date,
      end_date,
      duration,
      frequency,
      notes,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }
 }

