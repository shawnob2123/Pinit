import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Modal from '../../../components/Modal/Modal';
import AgendaList from '../../../components/Agenda/AgendaList';
import Loader from '../../../components/Loader/Loader';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const CycleScreen = () => {
  const [loading, setLoading] = useState(false);
  const refRBSheet = useRef();

  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    
    <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={{paddingBottom: 100}}>
        {loading ? (
          <Loader />
        ) : (
          <Animatable.View
            style={styles.contentContainer}
            animation="fadeInUpBig"
            duration={600}
            useNativeDriver={true}
            delay={500}>
            <View style={styles.todayContainer}>
              <Text style={styles.title}>Today</Text>
              <Pressable
                style={styles.addButton}
                onPress={() => refRBSheet.current.open()}>
                <AntDesign name="plus" size={20} color='#fff' />
              </Pressable>
              <Modal refRBSheet={refRBSheet} />
            </View>
            <Text style={[styles.text, {color: '#fff', paddingLeft: 10}]}>
              {getCurrentDate()}
            </Text>
            <Animatable.View
              style={styles.calendarView}
              useNativeDriver={true}
              duration={600}
              animation="fadeInUpBig"
              >
              <AgendaList />
            </Animatable.View>
          </Animatable.View>
        )}
      </KeyboardAwareScrollView>
 
  );
};

export default CycleScreen;
