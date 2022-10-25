import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors, fonts, sizes, weights } from '../../theme/theme';
import Button from '../../components/Button/Button';

const OnboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/logo-white.png')}
      />
      <Text style={styles.title}>Pinit</Text>
      <Text style={styles.subtitle}>Your anabolic cycle tracker</Text>
      <View style={styles.buttonContainer}>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('SignUp')}
        />
        </View>
    </View>
  )
}

export default OnboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    color: colors.white,
    fontSize: sizes.xxl,
    fontWeight: weights.bold,
    fontFamily: fonts.primary,
  },
  image: {
    width: 150,
    height: 130,
    resizeMode: 'contain',
  },
  subtitle: {
    color: colors.white,
    fontSize: sizes.md,
    fontWeight: weights.light,
    fontFamily: fonts.primary,
    paddingVertical: 20,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    top: 50
  }
})