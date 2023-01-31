import { View, Text, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './styles';
import BadgedIcon from '../../../components/Icons/BadgedIcon';
import Icons from '../../../components/Icons/Icons';
import Modal from '../../../components/Modal/Modal';
import Loader from '../../../components/Loader/Loader';
import Cycle from '../../../components/Cycle/Compound';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { colors } from '../../../theme/theme';
import CalendarStripAgenda from '../../../components/CalendarStrip/CalendarStrip';
import { FlashList } from '@shopify/flash-list';
import { storage } from '../../../store/mmkv';

const HomeScreen = () => {
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
      edges={['top', 'left', 'right']}
    >
      {loading ? (
        <Loader />
      ) : (
        <Animatable.View
          style={styles.contentContainer}
          animation='fadeInUpBig'
          duration={600}
          useNativeDriver={true}
          delay={500}
        >
          <View style={styles.todayContainer}>
            <Text style={styles.title}>Today</Text>
            <View style={styles.iconsContainer}>
              <Icons
                name='plus'
                onPress={() => refRBSheet.current.open()}
                color={colors.primary}
              />
              <BadgedIcon count={0} color={colors.red} />
            </View>
            <Modal refRBSheet={refRBSheet} />
          </View>
          <Text style={[styles.text, { color: '#fff', paddingLeft: 30 }]}>
            {getCurrentDate()}
          </Text>

          <View style={styles.calendarView}>
            <CalendarStripAgenda />
          </View>

          <View style={styles.upcomingContainer}>
            <View style={styles.upcomingHeader}>
              <Text style={[styles.title, { color: 'black' }]}>Upcoming</Text>
              <Pressable>
                <Text style={[styles.title, { fontSize: 14 }]}>View all</Text>
              </Pressable>
            </View>
            <Text
              style={[
                styles.text,
                {
                  paddingHorizontal: 10,
                  paddingTop: 10,
                  fontSize: 14,
                  color: 'black',
                },
              ]}
            >
              View your compounds listed for the day. Tap the compound to mark
              as complete.
            </Text>

            <View>
              <Cycle />
            </View>
          </View>
        </Animatable.View>
      )}
    </KeyboardAwareScrollView>
  );
};

export default HomeScreen;
