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
import Heading from './Heading';
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
            {/* NAME */}
            <Heading
              title="Name"
              icon="ios-document-text-outline"
            />
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
              <Text style={[styles.text, { paddingLeft: 10 }]}>Anabolic(s)</Text>
          
              <Pressable style={{paddingLeft: 20}} onPress={addAnabolic}>
                <Ionicons name="add-circle" size={24} color="black" />
                </Pressable>
             
            </View>

            <Input
              style={styles.input}
              value={formData.anabolic_used}
              onChangeText={text =>
                setFormData({...formData, anabolic_used: text})
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
                  <View style={{ width: '100%', paddingBottom: 10 }}>
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
                            anabolic_used: [...formData.anabolic_used],
                          });
                        }}
                        placeholder="Add Anabolic"
                        inputContainerStyle={{borderBottomWidth: 0}}
                      />
                    </Swipeable>
                  </View>
                );
              })}
            </View>
            {/* CALENDAR START */}
            <Heading
              title="Start-End Date"
              icon="calendar"
            />
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
              value={formData.start_date}
              onChangeText={text => setFormData({...formData, start_date: text})}
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
              value={formData.end_date}
              onChangeText={text => setFormData({ ...formData, end_date: text })}
              placeholder="End"
              inputContainerStyle={{ borderBottomWidth: 0, width: '50%' }}
              onFocus={() => setOpen(true)}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
            />
          </View>

          {/* FREQUENCY */}
          <Heading
            title="Frequency"
            icon="repeat"
          />
          <Input
            style={styles.input}
            value={formData.frequency}
            onChangeText={text => setFormData({ ...formData, frequency: text })}
            placeholder="Ex. 2x a week"
            inputContainerStyle={{ borderBottomWidth: 0 }}

          />
          <Heading
            title="PCT"
            icon="ios-medkit-outline"
          />
          <Input 
            style={styles.input}
            value={formData.pct}
            onChangeText={text => setFormData({ ...formData, pct: text })}
            placeholder="Ex. Clomid 50mg"
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
          <Heading
            title="Notes"
            icon="ios-document-text-outline"
          />
          <Input
            style={[styles.input, { height: 110, flexWrap: 'wrap', alignSelf:'stretch', alignItems:'center' }]}
            value={formData.notes}
            onChangeText={text => setFormData({ ...formData, notes: text })}
            placeholder="Notes"
            inputContainerStyle={{ borderBottomWidth: 0, padding: 3}}
            multiline={true}
          />
          <Button title="Add" onPress={handleAddCycle} />
        </ScrollView>
      </RBSheet>
    </>
  );
};

export default Modal;
