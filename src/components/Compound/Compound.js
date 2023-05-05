// component used for rendering the users cycle
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { showMessage } from 'react-native-flash-message';
import { colors } from '../../theme/theme';

import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Compound = () => {
  const [compound, setCompound] = useState(null);

  const navigation = useNavigation();
  useEffect(() => {
    try {
      const jsonCompound = storage.getString('compound');
      const compoundObject = JSON.parse(jsonCompound);
      setCompound(compoundObject);
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

  const renderRightActions = () => { 
    return (
      <TouchableOpacity style={styles.delete} onPress={() => Alert.alert('Delete', 'Are you sure you want to delete this compound?', [
        {text: 'No', onPress: () => console.log('no')},
        {text: 'Yes', onPress: () => {
          storage.delete('compound');
          navigation.navigate('Home');
        }}
      ])}>
        <Text style={{color: colors.white}}>Delete</Text>
      </TouchableOpacity>
    )
  }

  const renderType = () => {
    if (compound.type === 'Oral') {
      return (
        <View style={[styles.type, { backgroundColor: '#FFE3C6' }]}>
          <Text style={[styles.title, { color: colors.orange }]}>
            {compound.type}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={[styles.type, { backgroundColor: '#b4dcff' }]}>
          <Text style={[styles.title, { color: colors.primary }]}>
            {compound.type}
          </Text>
        </View>
      );
    }
  };


  return (
    <>
      {compound && (
        
        
        
        <Swipeable
          renderRightActions={renderRightActions}
          onSwipeableRightOpen={() => console.log('swiped')}
        >
          <View style={styles.itemContent}>
            <View style={styles.itemHeader}>
              <Text style={styles.title}>{compound.compoundUsed}</Text>
              {renderType()}
            </View>
            <View style={styles.itemFooter}>
              <Text style={[styles.title, { fontWeight: '300' }]}>Dosage: {compound.dose} {''}</Text>
              <Text style={[styles.title, { fontWeight: '300' }]}>({compound.time})</Text>
            </View>
          </View>
          </Swipeable>
          
          
      )}
    </>
  );
};

export default Compound;
