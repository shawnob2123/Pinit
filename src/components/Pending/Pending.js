import { View, Text } from 'react-native'
import React from 'react';
import { styles } from './styles';
import DraggableFlatList from 'react-native-draggable-flatlist'

const Pending = ({title}) => {
  const data = [
    { key: 'item1', label: 'Item 1', backgroundColor: 'red' },
    { key: 'item2', label: 'Item 2', backgroundColor: 'blue' },
    { key: 'item3', label: 'Item 3', backgroundColor: 'green' },
  ]

  const renderItem = ({ item, index, drag, isActive }) => { 
    return (
      <View style={styles.item}>
        <Text style={styles.label}>{item.label}</Text>
      </View>
    )
  }
  return (
    <View style={styles.card}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
      />
    </View>
  )
}

export default Pending