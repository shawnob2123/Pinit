import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, fonts, sizes, weights} from '../../theme/theme';
import {Divider} from '@rneui/themed';

const Settings = ({screenName, onPress, icon}) => {
  return (
    <>
      <Pressable onPress={onPress} style={styles.settingsButtons}>
        <View style={styles.settingsTab}>
          <Ionicons name={icon} size={20} color={colors.primary} />
          <Text style={styles.text}>{screenName}</Text>
           <FontAwesome name='angle-right' size={20} color="#00a6fb" style={styles.icon} />
          
        </View>
        
      </Pressable>
      <Divider
        color='#343434'
        orientation="horizontal"
      />
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.md,
    // fontWeight: weights.bold,
    color: colors.white,
    fontFamily: fonts.primary,
    paddingLeft: 10,
  },
  settingsButtons: {
    paddingVertical: 20,
  },
  settingsTab: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  icon: {
    position: 'absolute',
    right: 10,

  }
});
