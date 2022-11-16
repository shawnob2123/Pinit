import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors} from '../../../theme/theme';
import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from '../../../components/Modal/Modal';
import HomeCalendarStrip from '../../../components/CalendarStrip/CalendarStrip';
import CycleCard from '../../../components/Cycle/Cycle';
import * as Animatable from 'react-native-animatable';
import Pending from '../../../components/Pending/Pending';
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
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 200}}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Animatable.View
              style={styles.contentContainer}
              animation="fadeInUpBig"
              duration={600}
              useNativeDriver={true}
              delay={500}
            >
            <View style={styles.todayContainer}>
              <Text style={styles.title}>Today</Text>
              <Pressable
                style={styles.addButton}
                onPress={() => refRBSheet.current.open()}>
                <FontAwesome name="plus" size={18} color={colors.white} />
              </Pressable>
              <Modal refRBSheet={refRBSheet} />
            </View>
            <Text style={[styles.text, {color: '#ffff', paddingLeft: 10}]}>
              {getCurrentDate()}
            </Text>
              <Animatable.View
                useNativeDriver={true}
                duration={600}
                animation="fadeInUpBig" style={{ flex: 1 }}>
              <HomeCalendarStrip />
              </Animatable.View>

            {/* PENDING START */}
              <View style={styles.contentContainer}>
                <Text style={styles.title}>Pending</Text>
                <View>
                  <Pending 
                    
                  />
                </View>
              </View>
            {/* PENDING END */}
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Cycles</Text>
              <View style={styles.cyclesContainer}>
                  {
                    
                }
              </View>
            </View>
          </Animatable.View>
        )}
      </ScrollView>
    </>
  );
};

export default CycleScreen;
