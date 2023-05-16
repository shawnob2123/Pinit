import { View, Text } from 'react-native';
import React, { useMemo, useState } from 'react';
import { styles } from './styles';
import { Input } from '@rneui/themed';
import {
  useModalStore,
  useDaySelector,
  useCompoundTypeStore,
  useDateStore,
  useTimeStore,
} from '../../../store/store';
import WeekdayStrip from '../../../components/Weekday/WeekdayStrip';
import DatePicker from 'react-native-date-picker';
import CompoundType from '../../../components/CompoundType/CompoundType';
import Button from '../../../components/Button/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Loader from '../../../components/Loader/Loader';
import { supabase } from '../../../../server/server';
import { showMessage } from 'react-native-flash-message';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddCompoundScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    compoundUsed: '',
    dosage: '',
    dosageUnit: '',
  });
  const [notes, setNotes] = useState('');
  const selectedDays = useDaySelector((state) => state.selectedDays);
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    showDatePicker,
    setShowDatePicker,
    selectedDate,
    setSelectedDate,
  } = useDateStore();
  const type = useCompoundTypeStore((state) => state.selected);
  const { isPickerVisible, selectedTime, togglePicker, setTime } = useTimeStore();

  const handleTimeConfirm = (time) => {
    setTime(time);
    togglePicker();
  }


  // DATE SELECTION
  const handleStartDateFocus = () => {
    setShowDatePicker(true);
    setSelectedDate('start');
  };

  const handleEndDateFocus = () => {
    setShowDatePicker(true);
    setSelectedDate('end');
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setShowDatePicker(false);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setShowDatePicker(false);
  };

  // SUBMIT FORM

  const handleSubmit = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('cycles')
      .insert([
        {
          compound_used: formData.compoundUsed,
          dosage: formData.dosage,
          dosage_unit: formData.dosageUnit,
          start_date: startDate,
          end_date: endDate,
          selected_days: selectedDays,
          notes: notes,
          type: type.value,
          time_of_day: selectedTime.toLocaleTimeString(),
          created_at: new Date(),
        },
      ])
      .single();
    setLoading(false);
    if (error) {
      showMessage({
        message: 'Error',
        description: error.message,
        type: 'danger',
      });
    } else {
      showMessage({
        message: 'Success',
        description: 'Your cycle has been added',
        type: 'success',
      });
      // clear fields
      useCompoundTypeStore.setState({ selected: null });
      useDaySelector.setState({ selectedDays: [] });
      setFormData({
        compoundUsed: '',
        dosage: '',
        dosageUnit: '',
      });
      setNotes('');
      setStartDate(new Date());
      setEndDate(new Date());
      navigation.navigate('Home');
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 110 }}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Add New Cycle</Text>
        <View style={{ paddingTop: 20 }}>
          <CompoundType type={type} />
          <Input
            style={styles.input}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            label='Compound Used'
            labelStyle={styles.label}
            autoCorrect={false}
            placeholder='Ex. Testosterone Cypionate'
            onChangeText={(text) =>
              setFormData({ ...formData, compoundUsed: text })
            }
          />
          <View style={styles.dosageContainer}>
            <Input
              style={[styles.input, { width: '25%' }]}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              label='Dosage'
              keyboardType='numeric'
              labelStyle={styles.label}
              placeholder='Ex. 250'
              onChangeText={(text) =>
                setFormData({ ...formData, dosage: text })
              }
            />
            <Input
              style={[styles.input, { width: '20%' }]}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              label='Dosage Unit'
              autoCorrect={false}
              autoCapitalize='none'
              labelStyle={styles.label}
              placeholder='mg, g, mcg, oz'
              onChangeText={(text) =>
                setFormData({ ...formData, dosageUnit: text })
              }
            />
          </View>
          <Text style={[styles.label, { paddingLeft: 10, fontWeight: 'bold' }]}>
            Select Days
          </Text>
          <WeekdayStrip selectedDays={selectedDays} />
          <View
            style={{
              paddingTop: 20,
              width: '50%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Input
              style={styles.input}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              label='Start Date'
              labelStyle={styles.label}
              value={startDate.toLocaleDateString()}
              onFocus={() => handleStartDateFocus()}
            />

            {showDatePicker && (
              <DatePicker
                date={selectedDate === 'start' ? startDate : endDate}
                mode='date'
                textColor='white'
                modal
                value={selectedDate ? startDate : endDate}
                open={showDatePicker}
                onCancel={() => setShowDatePicker(false)}
                onConfirm={
                  selectedDate === 'start'
                    ? handleStartDateChange
                    : handleEndDateChange
                }
              />
            )}
            <Input
              style={styles.input}
              value={endDate.toLocaleDateString()}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              label='End Date'
              labelStyle={styles.label}
              onFocus={() => handleEndDateFocus()}
            />
          </View>

          {/* TIME PICKER */}
          <Input
            style={[styles.input, { width: '30%' }]}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            label='Time of Day'
            autoCorrect={false}
            labelStyle={styles.label}
            placeholder='Ex. 8:00 AM'
            
            value={selectedTime.toLocaleTimeString().replace(/:\d+ /, ' ')}
            onFocus={togglePicker}
          />
          { 
          isPickerVisible
          && (
            <DateTimePicker
              value={selectedTime}
              mode='time'
              is24Hour={false}
              textColor='white'
              display='spinner'
                onChange={(event, time) => handleTimeConfirm(time)}
                onFocus={() => togglePicker()}
            />
          )}
          <Input
            style={styles.input}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            label='Notes'
            autoCorrect={false}
            labelStyle={styles.label}
            placeholder='Comments'
            onChangeText={(text) => setNotes(text)}
          />
          {loading ? (
            <Loader loading={loading} />
          ) : (
            <View style={{ paddingHorizontal: 20 }}>
              <Button title='Add' onPress={() => handleSubmit()} />
            </View>
          )}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddCompoundScreen;
