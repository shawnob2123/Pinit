import {
  View,
  Text,
  ScrollView,
  Alert,
  Platform,
  LayoutAnimation,
} from 'react-native';
import React, {useState, useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {styles} from './styles';
import {Input} from '@rneui/themed';
import {supabase} from '../../../server/server';
import Button from '../Button/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import Counter from '../Counter/Counter';
import Heading from './Heading';
import Loader from '../Loader/Loader';
import { showMessage, hideMessage } from 'react-native-flash-message';


const Modal = ({refRBSheet}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    anabolic_used: '',
    dosage: 0,
    notes: '',
  });

  // DATE/TIME PICKER STATES
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  // DROPDOWN STATES
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Oral', value: 'Oral'},
    {label: 'Injectable', value: 'Injectable'},
  ]);

  // DROPDOWN PICKER
  const onPickerOpen = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(true);
  };

  // ADD TO DB
  const addAnabolic = async () => {
    setLoading(true);
    const {data, error} = await supabase.from('cycles').insert([
      {
        created_at: new Date(),
        anabolic: formData.anabolic_used,
        dosage: count,
        type: value,
        notes: formData.notes,
        start_date: startDate,
        end_date: endDate,
      },
    ]);
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      setLoading(false);
      setFormData({
        anabolic_used: '',
        dosage: 0,
        notes: '',
      });
      setValue(null);
      setCount(0);
      setStartDate(new Date());
      setEndDate(new Date());
      refRBSheet.current.close();
      showMessage({
        message: 'Anabolic successfully added.',
        type: 'success',
        duration: 3000,
        icon: 'success',
      });
    }
  };

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
    count ? setCount(count - 1) : setCount(0);
  };

  return (
    <>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        // clear fields if close is enabled
        closeOnPressMask={true}
        animationType="slide"
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
        }}>
        <ScrollView
          style={styles.modalContent}
          contentContainerStyle={{paddingBottom: 100}}>
          <Text style={styles.modalTitle}>Add Cycle</Text>
          <View style={styles.createCycleContent}>
            {/* ANABOLIC USED */}
            <Heading title="Anabolic" icon="injection-syringe" />

            <Input
              autoCorrect={false}
              style={styles.input}
              value={formData.anabolic_used}
              onChangeText={text =>
                setFormData({...formData, anabolic_used: text})
              }
              placeholder="Ex. Testosterone Cypionat 250mg"
              inputContainerStyle={{borderBottomWidth: 0}}
            />

            <Heading title="Dosage" icon="jekyll" />
            <Counter
              count={count}
              increment={increment}
              decrement={decrement}
            />
            <Heading title="Anabolic Type" icon="pills" />
            <DropDownPicker
              placeholder="Select Type"
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
              dropDownContainerStyle={{zIndex: 1000, backgroundColor: '#fff'}}
              itemSeparator={true}
              itemSeparatorStyle={{backgroundColor: '#f2f2f2'}}
            />
            {/* CALENDAR START */}
            <Heading title="Start-End Date" icon="date" />

            <View style={styles.calendarContainer}>
              <Text style={styles.text}>Start</Text>
              <DateTimePicker
                testID="dateTimePicker"
                value={startDate}
                mode={mode}
                is24Hour={true}
                display="default"
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
                testID="dateTimePicker"
                value={endDate}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate || endDate;
                  setShow(Platform.OS === 'ios');
                  setEndDate(currentDate);
                }}
              />
            </View>
          </View>
          <Heading title="Notes" icon="file-1" />
          <Input
            style={[styles.input, {height: 110}]}
            value={formData.notes}
            onChangeText={text => setFormData({...formData, notes: text})}
            placeholder="Notes"
            inputContainerStyle={{borderBottomWidth: 0, padding: 5}}
            multiline={true}
          />
          {loading ? (
            <Loader
              source={require('../../../assets/lottie/loader.json')}
              onAnimationFinish={() => setLoading(false)}
            />
          ) : (
            <Button title="Add" onPress={() => addAnabolic()} />
          )}
        </ScrollView>
      </RBSheet>
    </>
  );
};

export default Modal;
