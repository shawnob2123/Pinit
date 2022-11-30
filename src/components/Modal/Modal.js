import {
  View,
  Text,
  ScrollView,
  Pressable,
  Platform,
  LayoutAnimation,
  UIManager,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {styles} from './styles';
import {Input, Tooltip} from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {supabase} from '../../../server/server';
import Button from '../Button/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import Counter from '../Counter/Counter';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Heading from './Heading';
import Loader from '../Loader/Loader';

const Modal = ({refRBSheet}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    anabolic_used: [],
    dosage: 0,
    start_date: new Date().toLocaleString().split(',')[0],
    end_date: new Date().toLocaleString().split(',')[0],
    pct: '',
    notes: '',
  });
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  if (
    Platform.OS === 'android' &&
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
        user_id: supabase.auth.user().id,
        created_at: new Date(),
        anabolic: formData.anabolic_used,
        dosage: formData.dosage,
        start_date: formData.start_date,
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

  const showMode = currentMode => {
    if (Platform.OS === 'android') {
      setShow(false);
    }
    setShow(true);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
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
            <View style={styles.headingContainer}>
              <Fontisto name="injection-syringe" size={24} color="black" />
              <Text style={[styles.text, {paddingLeft: 10}]}>Anabolic(s)</Text>

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
              {formData.anabolic_used.map((anabolic, index) => {
                return (
                  <View style={{width: '100%', paddingBottom: 10}}>
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
             <Heading
              title="Dosage"
              icon="md-medical"
            />
            <Counter/>
            
            {/* CALENDAR START */}
            <Heading title="Start Date" icon="calendar" />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
            <Input
              style={styles.input}
              value={formData.start_date}
              onChangeText={onChange}
              placeholder="Start"
              inputContainerStyle={{ borderBottomWidth: 0, width: '50%' }}
              onFocus={() => {
                showMode('date');

              }}

              />  

            
             
            
            </View>
          </View>
        
          {/* <Heading title="PCT" icon="ios-medkit-outline" />
          <Input
            style={styles.input}
            value={formData.pct}
            onChangeText={text => setFormData({...formData, pct: text})}
            placeholder="Ex. Clomid 50mg"
            inputContainerStyle={{borderBottomWidth: 0}}
          /> */}
          <Heading title="Notes" icon="ios-document-text-outline" />
          <Input
            style={[styles.input, {height: 110}]}
            value={formData.notes}
            onChangeText={text => setFormData({...formData, notes: text})}
            placeholder="Notes"
            inputContainerStyle={{borderBottomWidth: 0, padding: 3}}
            multiline={true}
          />
          {loading ? (
            <Loader
              source={require('../../../assets/lottie/loader.json')}
              onAnimationFinish={() => setLoading(false)}
            />
          ) : (
            <Button title="Add" onPress={() => handleAddCycle()} />
          )}
        </ScrollView>
      </RBSheet>
    </>
  );
};

export default Modal;
