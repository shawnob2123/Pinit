// component used for rendering the users cycle
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { showMessage } from 'react-native-flash-message';
import { colors } from '../../theme/theme';
import { MMKV } from 'react-native-mmkv';
import { storage } from '../../store/mmkv';
import { useNavigation } from '@react-navigation/native';

const Cycle = () => {
  const [anabolic, setAnabolic] = useState(null);

  const navigation = useNavigation();
  useEffect(() => {
    try {
      const jsonAnabolic = storage.getString('anabolic');
      const anabolicObject = JSON.parse(jsonAnabolic);
      setAnabolic(anabolicObject);
    } catch (error) {
      showMessage({
        message: 'Error',
        description: 'There was an error loading your cycle',
        type: 'danger',
        icon: 'danger',
        duration: 3000,
      });
    }
  }, []);

  const renderType = () => {
    if (anabolic.type === 'Oral') {
      return (
        <View style={[styles.type, { backgroundColor: '#FFE3C6' }]}>
          <Text style={[styles.title, { color: colors.orange }]}>
            {anabolic.type}
          </Text>
        </View>
      );
    } else if (anabolic.type === 'Injectable') {
      return (
        <View style={[styles.type, { backgroundColor: '#b4dcff' }]}>
          <Text style={[styles.title, { color: colors.primary }]}>
            {anabolic.type}
          </Text>
        </View>
      );
    }
  };

  return (
    <>
      {anabolic && (
        <TouchableOpacity
          // onPress={() => Alert.alert('Are you sure you want to mark this as done?')}
          style={styles.item}>
          <View style={styles.itemContent}>
            <View style={styles.itemHeader}>
              <Text style={styles.title}>{anabolic.anabolicUsed}</Text>
              {renderType()}
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Cycle;
