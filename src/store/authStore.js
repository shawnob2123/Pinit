import create from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '../../server/server';

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const useAuth = create(persist((set) => ({
  ...initialState,
  login: async (email, password) => {
    try {
      set({ isLoading: true });
      const { body } = await supabase.auth.signInWithPassword(
        { email: email, password: password }
      );
      set({ user: body, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },

  logout: () => {
    set(initialState);
  },

  register: async (email, password) => {
    try {
      set({ isLoading: true });
      const { body } = await supabase.auth.signUp(
        {
          email,
          password
        },

        'person'
      );
      set({ user: body, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  }
})));

export const useUsers = create(persist((set) => ({
  users: [],
  isLoading: false,
  error: null,
  getUsers: async () => { 
    try {
      set({ isLoading: true });
      const { data, error } = await supabase.from('users').select('*');
      set({ users: data, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  }
})));
