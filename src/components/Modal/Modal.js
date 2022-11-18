import {View, Text, ScrollView, Pressable, Platform, LayoutAnimation, UIManager, Animated} from 'react-native';
import React, {useState, useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {styles} from './styles';
import {Input, Tooltip} from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {supabase} from '../../../server/server';
import Button from '../Button/Button';
import DatePicker from 'react-native-date-picker';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Modal = ({refRBSheet}) => {
  const [formData, setFormData] = useState({
    name: '',
    anabolic_used: [],
    start_date: new Date(),
    end_date: new Date(),
    duration: 0,
    frequency: 0,
    pct: '',
    notes: '',
  });

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
  const addAnabolic = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setFormData({...formData, anabolic_used: [...formData.anabolic_used, '']});
  };

  const removeAnabolic = index => {
    formData.anabolic_used.splice(index, 1);
    setFormData({...formData, anabolic_used: [...formData.anabolic_used]});
  };

  const handleAddCycle = async () => {
    const {data, error} = await supabase.from('cycles').insert([
      {
        name: formData.name,
        anabolic: formData.anabolic_used,
        start_date: formData.start_date,
        end_date: formData.end_date,
        frequency: formData.frequency,
        pct: formData.pct,
        notes: formData.notes,
      },
    ]);
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
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
              value={formData.cycleName}
              onChangeText={text => setFormData({...formData, name: text})}
              placeholder="Cycle Name"
              inputContainerStyle={{borderBottomWidth: 0}}
            />
            {/* ANABOLIC USED */}
            <View style={styles.headingContainer}>
              <Fontisto name="injection-syringe" size={24} color="black" />
              <Text style={[styles.text, {paddingLeft: 10}]}>Anabolic(s)</Text>
              <Pressable style={{left: 200}} onPress={addAnabolic}>
                <Ionicons name="add-circle" size={24} color="black" />
              </Pressable>
            </View>

            <Input
              style={styles.input}
              value={formData.anabolicUsed}
              onChangeText={text =>
                setFormData({...formData, anabolicUsed: text})
              }
              placeholder="Ex. Testosterone Cypionat 250mg"
              inputContainerStyle={{borderBottomWidth: 0}}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              {
                formData.anabolic_used.map((anabolic, index) => {
                return (
                  <Animated.View style={{
                    width: '100%',
                    paddingBottom: 10,
                   
                  }}>
                    <Swipeable
                      containerStyle={styles.swipeable}
                      renderRightActions={() => (
                        <Button
                          onPress={() => removeAnabolic(index)}
                          title="Delete"
                        />
                      )}>
                      <Input
                        style={styles.input}
                        value={formData.anabolic_used[index]}
                        onChangeText={text => {
                          formData.anabolic_used[index] = text;
                          setFormData({
                            ...formData,
                            anabolicUsed: [...formData.anabolic_used],
                          });
                        }}
                        placeholder="Ex. Winstrol 50mg"
                        inputContainerStyle={{borderBottomWidth: 0}}
                      />
                    </Swipeable>
                  </Animated.View>
                );
              })}
            </View>
            {/* CALENDAR START */}
            <View style={styles.headingContainer}>
              <Ionicons name="calendar" size={24} color="black" />
              <Text style={[styles.text, {paddingLeft: 10}]}>
                Start-End Date
              </Text>
            </View>
            {show && (
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
            )}
            <Input
              style={styles.input}
              value={formData.startDate}
              onChangeText={text => setFormData({...formData, startDate: text})}
              placeholder="Start"
              inputContainerStyle={{borderBottomWidth: 0, width: '50%'}}
              onFocus={() => setOpen(true)}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
            />
          </View>

          <View style={styles.headingContainer}>
            <Ionicons name="repeat" size={24} color="black" />
            <Text style={[styles.text, {paddingLeft: 10}]}>
              Please choose your frequency
            </Text>
          </View>
          <Button title="Add" onPress={handleAddCycle} />
        </ScrollView>
      </RBSheet>
    </>
  );
};

export default Modal;
