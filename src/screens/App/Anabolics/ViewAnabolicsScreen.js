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
        '\u2022 ' + sideEffect.split('_').join(' ') + '\n'
      }</Text>
    )
  });


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 200}}
      style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.anabolicsContent}>
          <Text style={styles.title}>{anabolics.name}</Text>
          <Text style={styles.text}>({anabolics.pharma_name})</Text>
          <View style={{ paddingTop: 20 }}>
            <ToggleAnabolic icon='file-1' title='Description' description={anabolics.description ? anabolics.description : 'No description available'} />
            <ToggleAnabolic title="Side Effects" description={mappedSideEffects} />
            <ToggleAnabolic title="PCT Required" description={anabolics.pct === true ? 'Yes' : 'No'} />
            <ToggleAnabolic title="Recommended Cycle (weeks)" description={anabolics.estimated_length} />
           </View>
         </View>
      </View>
    </ScrollView>
  )
}

export default ViewAnabolicsScreen;