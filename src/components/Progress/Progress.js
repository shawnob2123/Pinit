import { View, Text } from 'react-native';
import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

const Progress = () => {
  return (
    <View style={{ alignSelf: 'center', paddingVertical: 20 }}>
      <CircularProgress
        value={100}
        activeStrokeColor={'#00a6fb'}
        activeStrokeSecondaryColor={'#FFA500'}
      />
    </View>
  );
};

export default Progress;
