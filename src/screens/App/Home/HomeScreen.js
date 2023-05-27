import { View, Text, Pressable, ScrollView, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './styles';

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
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{
        flexGrow: 1, paddingBottom: 50 }}
    >
      {loading ? (
        <Loader />
      ) : (
        <Animatable.View
          style={styles.contentContainer}
          animation='fadeInLeft'
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
              <View style={{paddingTop: 20}}>
                <Text style={styles.title}>Morning ☀️</Text>
              </View>
            <>
              <CycleCard
                />
                <CycleCard/>
              </>
              <View style={{ paddingTop: 20 }}>
                <Text style={styles.title}>Afternoon 🌤</Text>
              </View>
              <CycleCard/>
              <View style={{ paddingTop: 20 }}>
                <Text style={styles.title}>Evening 🌙</Text>
              </View>
              <CycleCard />
              <CycleCard />
          </View>
        </Animatable.View>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
