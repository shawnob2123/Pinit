import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../theme/theme'
import Lottie from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Lottie source={require('../../../assets/lottie/lottie-pinit.json')}
        autoPlay
        loop={false}
        duration={2000}
        style={styles.lottie}
        onAnimationFinish={() => navigation.navigate('SignUp')}
        resizeMode="contain"
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: colors.primary
  },
  lottie: {
    width: 250,
    height: 250,
    transform: [{rotate: '158deg'}]
  }
})