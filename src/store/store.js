import { create } from 'zustand';


// SELECTED DAYS STORE
export const useDaySelector = create((set) => ({
  selectedDays: [],
  addSelectedDay: (day) =>
    set((state) => ({ selectedDays: [...state.selectedDays, day] })),
  removeSelectedDay: (day) =>
    set((state) => ({
      selectedDays: state.selectedDays.filter((item) => item !== day),
    })),
}));

// MODAL STORE
export const useModalStore = create((set) => ({
  formData: {},
  setFormData: (data) => set((state) => ({ formData: data })),
}));

export const useCompoundTypeStore = create((set) => ({
  selected: null,
  items: ['Capsule', 'Pill', 'Injection', 'Cream'],
  selectItem: (item) => set((state) => ({ selected: item })),
}));

//DATE STORE
export const useDateStore = create((set) => ({
  startDate: new Date(),
  endDate: new Date(),
  showDatePicker: false,
  selectedDate: '',
  setStartDate: (date) => set(() => ({ startDate: date })),
  setEndDate: (date) => set(() => ({ endDate: date })),
  setShowDatePicker: (show) => set(() => ({ showDatePicker: show })),
  setSelectedDate: (date) => set(() => ({ selectedDate: date })),
}));

// RADIO BUTTON GROUP
export const useRadioButtonStore = create((set) => ({
  selectedTimeOfDay: null,
  setSelectedTimeOfDay: (time) => set(() => ({ selectedTimeOfDay: time })),
}));

// MARKED DATE STORE
export const useMarkedDateStore = create((set) => ({
  markedDates: [],
  setMarkedDates: (dates) => set(() => ({ markedDates: dates })),
}));

// TIME STORE
export const useTimeStore = create((set) => ({
  isPickerVisible: false,
  selectedTime: new Date(),
  togglePicker: () => set((state) => ({ isPickerVisible: !state.isPickerVisible })),
  setTime: (newTime) => set({ selectedTime: newTime }),


}));

