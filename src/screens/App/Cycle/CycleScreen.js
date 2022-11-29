import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from '../../../components/Modal/Modal';
import AgendaList from '../../../components/Agenda/AgendaList';
import Loader from '../../../components/Loader/Loader';
import * as Animatable from 'react-native-animatable';

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
    
    <ScrollView
      showVerticalScrollIndicator={false}
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
                
                onPress={() => refRBSheet.current.open()}>
                <Text style={[styles.text, {color: '#00a6fb'}]}>Add Cycle</Text>
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
      </ScrollView>
 
  );
};

export default CycleScreen;
