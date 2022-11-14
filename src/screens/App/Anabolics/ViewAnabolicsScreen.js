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
          <Text style={[styles.title, {fontSize: 16}]}>Description</Text>
          <Text style={styles.text}>{anabolics.description}</Text>
        </View>
        <View>
          <Text style={[styles.title, { fontSize: 16 }]}>Side Effects</Text>
          <Text style={styles.text}>{
            anabolics.side_effects.map((effect) => { 
              return  <Text>{effect.split('_').join(' ') + '\n'}</Text>
            })
          }</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default ViewAnabolicsScreen;