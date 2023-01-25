import { View, Text } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './styles';
import BadgedIcon from '../../../components/Icons/BadgedIcon';
import Icons from '../../../components/Icons/Icons';
import Modal from '../../../components/Modal/Modal';
import Loader from '../../../components/Loader/Loader';
import Cycle from '../../../components/Cycle/Cycle';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { colors } from '../../../theme/theme';
import CalendarStripAgenda from '../../../components/CalendarStrip/CalendarStrip';
import { FlashList } from '@shopify/flash-list';
import { storage } from '../../../store/mmkv';

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

  const anabolic = storage.getString('anabolic');

  
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

          {/* <LinearGradient
              style={styles.linearGradient}
            colors={['#191919', '#141E30']}
            > */}
          <View style={styles.upcomingContainer}>
            <Text style={[styles.title, { paddingTop: 20, color: 'black' }]}>
              Upcoming
            </Text>
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
              
            <>
               <Cycle


              />
              </>
              
          </View>
          {/* </LinearGradient> */}
        </Animatable.View>
      )}
    </KeyboardAwareScrollView>
  );
};

export default CycleScreen;
