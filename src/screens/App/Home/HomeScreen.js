import { View, Text, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './styles';
import BadgedIcon from '../../../components/Icons/BadgedIcon';
import Icons from '../../../components/Icons/Icons';

import Loader from '../../../components/Loader/Loader';
import CycleCard from '../../../components/Cycle/CycleCard';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { colors } from '../../../theme/theme';
import CalendarStripAgenda from '../../../components/CalendarStrip/CalendarStrip';
import { FlashList } from '@shopify/flash-list';

const HomeScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

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
      edges={['top', 'left', 'right']}
    >
      {loading ? (
        <Loader />
      ) : (
        <Animatable.View
          style={styles.contentContainer}
          animation='fadeInLeftBig'
          duration={600}
          useNativeDriver={true}
          delay={500}
        >
          <View style={styles.todayContainer}>
            <Text style={styles.title}>Today</Text>
            
       
          </View>
          <Text style={[styles.text, { color: '#fff', paddingLeft: 30 }]}>
            {getCurrentDate()}
          </Text>

          <View style={styles.calendarView}>
            <CalendarStripAgenda />
          </View>

          <View style={styles.upcomingContainer}>
            <View style={styles.upcomingHeader}>
              <Text style={styles.title}>Upcoming</Text>
              <Pressable>
                <Text style={[styles.title, { fontSize: 14, color: 'white' }]}>View all</Text>
              </Pressable>
            </View>
            <Text
              style={[
                styles.text,
                {
                  paddingHorizontal: 10,
                  paddingTop: 10,
                  fontSize: 14,
                  color: '#fff',
                },
              ]}
            >
              View your compounds listed for the day. Swipe the compound to mark
              as taken, skipped, or missed.
            </Text>

            <>
              <CycleCard
              />
            </>
          </View>
        </Animatable.View>
      )}
    </KeyboardAwareScrollView>
  );
};

export default HomeScreen;
