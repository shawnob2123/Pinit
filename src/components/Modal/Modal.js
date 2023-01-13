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
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import moment from 'moment';

const Modal = ({ refRBSheet }) => {
 
  // create a wrapper around the modal data stored as a date string
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    anabolicUsed: '',
    dosage: '',
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
  const count = useStore(state => state.count);

  // SELECTED DAYS
  const selectedDays = useDaySelector(state => state.selectedDays);

  // use async storage to add the anabolic 
  const addAnabolic = async () => { 
    const items = [];
    try {
      const anabolic = {
        
        [startDate.toISOString().substring(0,10)]: [{
          
        id: Math.random().toString(24).substring(2, 9),
        anabolicUsed: formData.anabolicUsed,
        dosage: formData.dosage,
        notes: formData.notes,
        startDate: startDate.toISOString().substring(0,10),
        endDate: endDate.toISOString().substring(0,10),
        type: value,
        days: selectedDays,
        count: count,
         
        }]
        

      }
      const jsonValue = JSON.stringify(anabolic)

      await AsyncStorage.setItem('@anabolic', jsonValue);
      items.push(anabolic);
      showMessage({
        message: 'Success',
        description: 'Anabolic added successfully',
        type: 'success',
      });
      // clear all the states
      setFormData({
        anabolicUsed: '',
        dosage: '',
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
              placeholder='Ex. Testosterone Cypionat'
              inputContainerStyle={{ borderBottomWidth: 0 }}
            />

            <Heading title='Dosage (mg)' icon='jekyll' />
            <Input
              autoCorrect={false}
              style={styles.input}
              value={formData.dosage}
              onChangeText={(text) =>
                setFormData({ ...formData, dosage: text })
              }
              placeholder='Ex. 250'
              keyboardType='numeric'
              inputContainerStyle={{ borderBottomWidth: 0 }}

            />
            
            {/* FREQUENCY */}
            <Heading title='Frequency' icon='prescription' />
            <Counter count={count} />
            
            <Heading title='Anabolic Type' icon='pills' />
            <DropDownPicker
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
              source={require('../../../assets/lottie/loader.json')}
              onAnimationFinish={() => setLoading(false)}
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
