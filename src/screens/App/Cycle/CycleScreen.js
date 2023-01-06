import { View, Text } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './styles';
import BadgedIcon from '../../../components/Icons/BadgedIcon';
import Icons from '../../../components/Icons/Icons';
import Modal from '../../../components/Modal/Modal';
import AgendaList from '../../../components/Agenda/AgendaList';
import Loader from '../../../components/Loader/Loader';
import Progress from '../../../components/Progress/Progress';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { colors } from '../../../theme/theme';

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
      contentContainerStyle={{ paddingBottom: 100 }}
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
              <BadgedIcon count={5} color={colors.primary} />
            </View>
            <Modal refRBSheet={refRBSheet} />
          </View>
          <Text style={[styles.text, { color: '#fff', paddingLeft: 30 }]}>
            {getCurrentDate()}
          </Text>
          <View style={styles.calendarView}>
            <AgendaList />
          </View>
          <View style={styles.progressView}>
            <Text style={styles.title}>Weigh In</Text>
           
          </View>
        </Animatable.View>
      )}
    </KeyboardAwareScrollView>
  );
};

export default CycleScreen;
