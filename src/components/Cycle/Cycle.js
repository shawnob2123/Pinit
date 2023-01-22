// component used for rendering the users cycle
import {  Text, View, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import { styles } from './styles';
import { showMessage } from 'react-native-flash-message'; 
import { colors } from '../../theme/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlashList } from '@shopify/flash-list';
const Cycle = () => {

    const [items, setItems] = useState([]);

 useEffect(() => {
    getCycle();
  }, []);

  const getCycle = async () => {
    try {
      const value = await AsyncStorage.getItem('@anabolic');
      if (value !== null) {
        const newItems = JSON.parse(value);
        console.log(newItems)
        setItems(newItems);
        setLoading(false);
      }
    } catch (e) {
      showMessage({
        message: 'Error',
        description: 'Something went wrong. Your data could not be loaded',
        type: 'danger',
      });
    }
  };

    const renderItem = ({ item }) => { 
    return (
      <View style={styles.item}>
        <View style={styles.itemContent}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>{item.anabolicUsed}</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <>
      <FlashList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        estimatedItemSize={50}
      />
    </>
  )
}

export default Cycle
