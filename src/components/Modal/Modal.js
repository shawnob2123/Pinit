import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {styles} from './styles';
import {Input} from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Calendar} from 'react-native-calendars';
import {colors} from '../../theme/theme';
import DropDownPicker from 'react-native-dropdown-picker';


const Modal = ({refRBSheet}) => {
  const [cycleName, setCycleName] = useState('');
  const [cycleDate, setCycleDate] = useState('');
  const [cycleType, setCycleType] = useState('');
  const [cycleFrequency, setCycleFrequency] = useState('');
  const [cycleLength, setCycleLength] = useState('');


  // DROPDOWN PICKER
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Weeks', value: 'weeks' },
    { label: 'Months', value: 'months' },
    { label: 'Years', value: 'years' },
  ]);
 

  return (
    <>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType="slide"
        height={800}
        customStyles={{
          wrapper: {
            flex: 1,
            backgroundColor: 'transparent',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: 'center',
            width: '100%',
          },
        }}>
        <ScrollView
          style={styles.modalContent}
          contentContainerStyle={{paddingBottom: 100}}>
          <Text style={styles.modalTitle}>Add a new cycle</Text>
          <View style={styles.createCycleContent}>
            <View style={styles.headingContainer}>
              <Ionicons name="pencil" size={24} color="black" />
              <Text style={[styles.text, {paddingLeft: 10}]}>Cycle name</Text>
            </View>
            <Input
              style={styles.input}
              value={cycleName}
              onChangeText={setCycleName}
              placeholder="Enter cycle name"
              inputContainerStyle={{borderBottomWidth: 0}}
              placeholderTextColor="#000"
            />
            <View style={styles.headingContainer}>
              <Ionicons name="calendar" size={24} color="black" />
              <Text style={[styles.text, {paddingLeft: 10}]}>Start Date</Text>
            </View>
            <Input
              style={styles.input}
              value={cycleDate}
              onChangeText={setCycleDate}
              placeholder="MM/DD/YYYY"
              inputContainerStyle={{ borderBottomWidth: 0 }}
              keyboardType="numeric"
              placeholderTextColor="#000"
            />
          </View>
          <View style={styles.headingContainer}>
            <Ionicons name="time" size={24} color="black" />
            <Text style={[styles.text, {paddingLeft: 10}]}>
              Please choose your duration
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: '40%'}}>
            <Input
              placeholder="Ex. 12"
              keyboardType="numeric"
              value={cycleLength}
              onChangeText={setCycleLength}
              style={styles.input}
              inputContainerStyle={{borderBottomWidth: 0, width: '70%'}}
            />
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{ width: '80%', bottom: 13 }}
              placeholder="Duration"

            />
           
          </View>
          <View style={styles.headingContainer}>
            <Ionicons name="repeat" size={24} color="black" />
            <Text style={[styles.text, {paddingLeft: 10}]}>
              Please choose your frequency
            </Text>
          </View>
        </ScrollView>
      </RBSheet>
    </>
  );
};

export default Modal;
