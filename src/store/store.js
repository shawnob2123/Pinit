import {create} from 'zustand';
import { MMKV } from 'react-native-mmkv'

export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  disable: () => set((state) => ({ count: state.count == 0 })),
}));

export const useDaySelector = create((set) => ({
  selectedDays: [],
  addSelectedDay: (day) => set((state) => ({ selectedDays: [...state.selectedDays, day] })),
  removeSelectedDay: (day) => set((state) => ({ selectedDays: state.selectedDays.filter((item) => item !== day) })),
}));



export const useModalStore = create((set) => ({
  formData: {},
  setFormData: (data) => set((state) => ({ formData: data })),
}));

export const useCompoundTypeStore = create((set) => ({
  selected: null,
  items: ['Capsule', 'Pill', 'Injection', 'Cream'],
  selectItem: (item) => set((state) => ({ selected: item })),
}));
