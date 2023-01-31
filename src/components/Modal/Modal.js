import {
  View,
  Text,
  Platform,
  LayoutAnimation,
} from 'react-native';
import React, { useState } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { styles } from './styles';
import { Input } from '@rneui/themed';
import { storage } from '../../store/mmkv';
import Button from '../Button/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import Counter from '../Counter/Counter';
import Heading from './Heading';
import Loader from '../Loader/Loader';
import WeekdayStrip from '../Weekday/WeekdayStrip';
import  {useStore, useDaySelector}  from '../../store/store';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { showMessage } from 'react-native-flash-message';


const Modal = ({ refRBSheet }) => {
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    anabolicUsed: '',
    notes: '',
  });
  
  // DATE/TIME PICKER STATES
  const [startDate, setStartDate] =   useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  // DROPDOWN STATES
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Oral', value: 'Oral' },
    { label: 'Injection', value: 'Injection' },
  ]);

  // DROPDOWN PICKER
  const onPickerOpen = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(true);
  };

  // COUNT
  const quantity = useStore(state => state.count);

  // SELECTED DAYS
  const selectedDays = useDaySelector(state => state.selectedDays);

  // use mmkv to store the data
  const addAnabolic = async () => { 
    setLoading(true);

    try {
      const anabolic = {
        id: Math.random().toString(36).substring(2, 9),
        anabolicUsed: formData.anabolicUsed,
        notes: formData.notes,
        quantity: quantity,
        startDate: startDate.toISOString().slice(0, 10),
        endDate: endDate.toISOString().slice(0, 10),
        selectedDays: selectedDays,
        type: value,
      
      }
      storage.set('anabolic', JSON.stringify(anabolic));
      setLoading(false);
      showMessage({
        message: 'Success',
        description: 'Anabolic added successfully',
        type: 'success',
      });
      // clear all the states
      setFormData({
        anabolicUsed: '',
        notes: '',
      })
      setStartDate(new Date());
      setEndDate(new Date());
      setValue(null);
      setOpen(false);
      useStore.setState({ count: 0 });
      useDaySelector.setState({ selectedDays: [] });

      refRBSheet.current.close();
    } catch (error) { 
      showMessage({
        message: 'Error',
        description: 'Something went wrong',
        type: 'danger',
      });
    }
   }
  
  return (
    <>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType='slide'
        height={700}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          wrapper: {
            flex: 1,
            backgroundColor: 'transparent',
            height: '100%',
          },
        }}
      >
        <KeyboardAwareScrollView
          style={styles.modalContent}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <Text style={styles.modalTitle}>Add Anabolic</Text>
          <View style={styles.createCycleContent}>
            {/* ANABOLIC USED */}
            <Heading title='Anabolic' icon='injection-syringe' />

            <Input
              autoCorrect={false}
              style={styles.input}
              value={formData.anabolicUsed}
              onChangeText={(text) =>
                setFormData({ ...formData, anabolicUsed: text })
              }
              placeholder='Ex. Testosterone Cypionate 250mg'
              inputContainerStyle={{ borderBottomWidth: 0 }}
            />

            <Heading title='Quantity (how many per selected day)' icon='jekyll' />
            <Counter 
              count={quantity}
            />
            
            <Heading title='Anabolic Type' icon='pills' />
            <DropDownPicker
              dropDownDirection='BOTTOM'
              placeholder='Select Type'
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{
                backgroundColor: '#eeeeee',
                borderRadius: 10,
                borderWidth: 0,
              }}
              containerStyle={styles.dropdown}
              labelStyle={styles.label}
              textStyle={styles.text}
              onOpen={onPickerOpen}
              zIndex={1000}
              dropDownContainerStyle={{ zIndex: 1000, backgroundColor: '#fff' }}
              itemSeparator={true}
              itemSeparatorStyle={{ backgroundColor: '#f2f2f2' }}
            />
            {/* CALENDAR START */}
            <Heading title='Start-End Date' icon='date' />

            <View style={styles.calendarContainer}>
              <Text style={styles.text}>Start</Text>
              <DateTimePicker
                testID='dateTimePicker'
                value={startDate}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate || startDate;
                  setShow(Platform.OS === 'ios');
                  setStartDate(currentDate);
                }}
              />
            </View>
            <View style={styles.calendarContainer}>
              <Text style={styles.text}>End</Text>
              <DateTimePicker
                testID='dateTimePicker'
                // value={endDate}
                value={endDate}        
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={(event, selectedDate) => { 
                  const currentDate = selectedDate || endDate;
                  setShow(Platform.OS === 'ios');
                  setEndDate(currentDate);
                
                }}
              />
            </View>
          </View>
          <Heading title='Select Days' icon='gg' />
             
          <WeekdayStrip
            selectedDays={selectedDays}
            />
            
          <Heading title='Notes' icon='file-1' />
          <Input
            style={[styles.input, { height: 110 }]}
            value={formData.notes}
            autoCorrect={false}
            onChangeText={(text) => setFormData({ ...formData, notes: text })}
            placeholder='Ex. Take Test Cypionate 250mg every Monday and Thursday. Weigh yourself every morning.'
            inputContainerStyle={{ borderBottomWidth: 0, padding: 5 }}
            multiline={true}
          />
          {loading ? (
            <Loader
             
            />
          ) : (
            <Button title='Add' onPress={() => addAnabolic()} />
          )}
        </KeyboardAwareScrollView>
      </RBSheet>
    </>
  );
};

export default Modal;
