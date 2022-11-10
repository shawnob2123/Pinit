import { View, Text, Image } from 'react-native'
import React, {useEffect, useState, useCallback} from 'react'
import { styles } from './styles';
import { FlashList } from '@shopify/flash-list';
import {supabase} from '../../../../server/server';
import Anabolic from '../../../components/Anabolic/Anabolic';
import Search from '../../../components/Search/Search';


const ProductScreen = () => {
  const [fetchError, setFetchError] = useState(null);
  const [anabolics, setAnabolics] = useState(null);
  

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = useCallback(async () => { 
    try {
      const { data } = await supabase
        .from('anabolics')
        .select('*')
        .order('name', { ascending: true })
      
      setAnabolics(data)
    } catch (error) {
      setFetchError(error)
    }
  }
  , [])
    


  const renderItems = () => { 
    return anabolics.map((anabolic) => (
      <Anabolic key={anabolic.id} anabolics={anabolic} />
    ));
  }

  return (
    <View style={styles.container}>
      <Search />
      
      <FlashList
        data={anabolics}
        estimatedItemSize={100}
        renderItem={renderItems}
      />
    </View>
  )
}

export default ProductScreen;