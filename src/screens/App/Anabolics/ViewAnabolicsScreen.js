import { View, Text } from 'react-native'
import React from 'react'

const ViewAnabolicsScreen = ({route}) => {

  const {anabolics} = route.params;
  
  return (
    <View>
      <Text>ViewAnabolicsScreen</Text>
    </View>
  )
}

export default ViewAnabolicsScreen;