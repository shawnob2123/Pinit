import {View, Text, ScrollView, Pressable, ActivityIndicator} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors} from '../../../theme/theme';
import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from '../../../components/Modal/Modal';
import HomeCalendarStrip from '../../../components/CalendarStrip/CalendarStrip';
import CycleCard from '../../../components/Cycle/Cycle';
import * as Animatable from 'react-native-animatable';

const CycleScreen = () => {

  const [loading, setLoading] = useState(false);
  const refRBSheet = useRef();

  const getCurrentDate = () => {
    const date = new Date();
    // display the weekday, day and month 
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' });

  }

  return (
   
    <>
      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ paddingBottom: 200 }}>
            <Animatable.View style={styles.contentContainer}
              animation="fadeInUpBig"
              duration={1300}
            >
            {/*         
          <DailyLog/> */}
            {/* <Pressable
            style={styles.composeButton}
            onPress={() => refRBSheet.current.open()}>
            <FontAwesome name="pencil-square-o" size={24} color="black" />
          </Pressable> */}
          
            <View style={styles.todayContainer}>
              <Text style={styles.title}>Today</Text>
              <Pressable style={styles.addButton}
                onPress={() => refRBSheet.current.open()}
              >
                <FontAwesome name='plus' size={20} color={colors.white} />
              </Pressable>
              <Modal refRBSheet={refRBSheet} />
            </View>
            <Text style={[styles.text, { color: '#ffff', paddingLeft: 10 }]}>{
              getCurrentDate()
            }</Text>
            <Animatable.View animation="fadeInUpBig" style={{ flex: 1 }}>
              <HomeCalendarStrip />
            </Animatable.View>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Cycles</Text>
              <View style={styles.cyclesContainer}>
                <CycleCard />
              </View>
            </View>
          </Animatable.View>
        </ScrollView>
      )}
    </>
      
  );
};

export default CycleScreen;
