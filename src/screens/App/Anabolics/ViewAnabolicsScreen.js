import { View, Text, ScrollView, Animated } from 'react-native';
import React, {useState, useRef} from 'react';
import { styles } from './styles';
import ToggleAnabolic from '../../../components/Anabolic/ToggleAnabolic';
import { FlashList } from '@shopify/flash-list';

const ViewAnabolicsScreen = ({route}) => {

  const { anabolics } = route.params;
  const [toggle, setToggle] = useState(false);

  const mappedSideEffects = anabolics.side_effects.map((sideEffect, index) => { 
    return (
      <Text key={index} style={styles.text}>{
        sideEffect.split('_').join(' ') + '\n'
      }</Text>
    )
  });
  // use the toggle anabolic to display and hide data passed from the anabolic screen 
  // and then use the flash list to display the data


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 200}}
      style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.anabolicsContent}>
          <Text style={styles.title}>{anabolics.name}</Text>
          <Text style={styles.text}>{anabolics.pharma_name}</Text>
          <View style={{ paddingTop: 50 }}>
              <ToggleAnabolic title='Description' description={anabolics.description ? anabolics.description : 'No description available'} />
              <ToggleAnabolic title="Side Effects" description={mappedSideEffects} />
           </View>
         </View>
      </View>
    </ScrollView>
  )
}

export default ViewAnabolicsScreen;