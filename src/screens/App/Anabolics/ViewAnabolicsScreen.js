import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';

const ViewAnabolicsScreen = ({route}) => {

  const { anabolics } = route.params;
  
  
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 200}}
      style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{anabolics.name}</Text>
        <View style={styles.anabolicsContent}>
          <Text style={styles.anabolicTitle}>Description</Text>
          <Text style={styles.text}>{anabolics.description}</Text>
        </View>
        
          <Text style={styles.anabolicTitle}>Side Effects</Text>
          <Text style={styles.text}>{
            anabolics.side_effects.map((effect) => { 
              return <Text>{effect.split('_').join(' ') + '\n'}</Text>
            })
          }</Text>
        <Text style={styles.anabolicTitle}>Approx. Cycle Length (weeks)</Text>
        <Text style={styles.text}>{anabolics.estimated_length}</Text>
        <Text style={styles.anabolicTitle}>PCT Required</Text>
        <Text style={styles.text}>
          {anabolics.pct === true ? 'Yes' : 'No'}
        </Text>
      </View>
    </ScrollView>
  )
}

export default ViewAnabolicsScreen;