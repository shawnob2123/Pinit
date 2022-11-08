import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {styles} from './styles';
import {Input} from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {supabase} from '../../../server/server';
import Button from '../Button/Button';
import DatePicker from 'react-native-date-picker';

const Modal = ({refRBSheet}) => {
  const [cycleName, setCycleName] = useState('');
  const [anabolicUsed, setAnabolicUsed] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [duration, setDuration] = useState(0);
  const [frequency, setFrequency] = useState(0);
  const [pct, setPct] = useState('');
  const [notes, setNotes] = useState('');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const createCycle = async () => {
    const {data, error} = await supabase.from('cycles').insert([{}]);
    refRBSheet.current.close();
  };


  return (
    <>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
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
            {/* NAME */}
            <View style={styles.headingContainer}>
              <Ionicons name="pencil" size={24} color="black" />
              <Text style={[styles.text, {paddingLeft: 10}]}>Cycle Name</Text>
            </View>
            <Input
              style={styles.input}
              value={cycleName}
              onChangeText={setCycleName}
              placeholder="Cycle Name"
              inputContainerStyle={{borderBottomWidth: 0}}
            />
            {/* ANABOLIC USED */}
            <View style={styles.headingContainer}>
              <Fontisto name="injection-syringe" size={24} color="black" />
              <Text style={[styles.text, {paddingLeft: 10}]}>Anabolic(s)</Text>
            </View>
            <Input
              style={styles.input}
              value={anabolicUsed}
              onChangeText={setAnabolicUsed}
              placeholder="Ex. Testosterone Cypionat 250mg"
              inputContainerStyle={{borderBottomWidth: 0}}
            />
            <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
            <Pressable
             
              onPress={() => setShowInput(!showInput)}
            >
              <Ionicons name="add-circle" size={24} color="black" />
            </Pressable>
            { 
              showInput && (
                <Input
                  style={styles.input}
                  value={anabolicUsed}
                  onChangeText={setAnabolicUsed}
                  placeholder=""
                  inputContainerStyle={{borderBottomWidth: 0}}

                />
              ) 

          }
            </View>
            {/* CALENDAR START */}
            <View style={styles.headingContainer}>
              <Ionicons name="calendar" size={24} color="black" />
              <Text style={[styles.text, {paddingLeft: 10}]}>
                Start-End Date
              </Text>
            </View>
            <DatePicker
              modal
              mode="date"
              open={open}
              onDateChange={setDate}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <Input
              style={styles.input}
              value={date}
              onChangeText={setDate}
              placeholder="Start"
              inputContainerStyle={{borderBottomWidth: 0, width: '50%'}}
              onFocus={() => setOpen(true)}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
            />
            <Input
              style={styles.input}
              value={endDate}
              placeholder="End"
              onChangeText={setEndDate}
              inputContainerStyle={{borderBottomWidth: 0, width: '50%'}}
              onFocus={() => setOpen(true)}
              onConfirm={date => {
                setOpen(false);
                setEndDate(date);
              }}
            />
          </View>
          {/* DURATION */}
          <View style={styles.headingContainer}>
            <Ionicons name="time" size={24} color="black" />
            <Text style={[styles.text, {paddingLeft: 10}]}>
              Duration (in weeks)
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: '40%'}}>
            <Input
              placeholder="Ex. 12"
              keyboardType="numeric"
              value={duration}
              onChangeText={setDuration}
              style={styles.input}
              inputContainerStyle={{borderBottomWidth: 0, width: '70%'}}
            />
            <Text style={[styles.text, {right: 10, bottom: 10}]}>Weeks</Text>
          </View>

          <View style={styles.headingContainer}>
            <Ionicons name="repeat" size={24} color="black" />
            <Text style={[styles.text, {paddingLeft: 10}]}>
              Please choose your frequency
            </Text>
          </View>
          <Button title="Add" onPress={createCycle} />
        </ScrollView>
      </RBSheet>
    </>
  );
};

export default Modal;
