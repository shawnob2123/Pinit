import { View, Text } from 'react-native'
import React from 'react';
import Lottie from 'lottie-react-native';

const Loader = ({source, onAnimationFinish, error}) => {
  return (
    <>
      <Lottie
        source={source}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
        duration={4000}
        style={{width: 50, height: 50, resizeMode: 'contain', alignSelf: 'center'}}
      
      />
    </>
  )
}

export default Loader