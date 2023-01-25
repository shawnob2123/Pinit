import create from 'zustand';
import { StateStorage } from 'zustand/middleware'
import { MMKV } from 'react-native-mmkv'

export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  disable: () => set((state) => ({ count: state.count === 0 })),
}));

export const useDaySelector = create((set) => ({
  selectedDays: [],
  addSelectedDay: (day) => set((state) => ({ selectedDays: [...state.selectedDays, day] })),
  removeSelectedDay: (day) => set((state) => ({ selectedDays: state.selectedDays.filter((item) => item !== day) })),
}));


