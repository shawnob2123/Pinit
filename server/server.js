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

export const writeAnabolicData = async ({ anabolic, count, type, startDate, endDate, selectedDays, notes }) => {
  return await supabase.from('cycles').insert([
    {
      created_at: new Date(),
      anabolic: anabolic,
      dosage: count,
      type: type,
      start_date: startDate,
      end_date: endDate,
      days: selectedDays,
      notes: notes,
      user_id: supabase.auth.user()?.id,
    },
  ]);
};

export const readAnabolicData = async () => { 
  const { data, error } = await supabase.from('cycles').select('*, user_id (id)').eq('user_id', supabase.auth.user()?.id);
  return data;
}

