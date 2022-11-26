import { View, Text } from 'react-native'
import React from 'react';
import Lottie from 'lottie-react-native';

const Loader = ({ onAnimationFinish}) => {
  return (
    <>
      <Lottie
        source={require('../../../assets/lottie/loader.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
        duration={5000}
        style={{width: 50, height: 50, resizeMode: 'contain', alignSelf: 'center'}}
      
      />
    </>
  )
}

export default Loader