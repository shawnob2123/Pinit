import {View, Text, Image} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {styles} from './styles';
import {FlashList} from '@shopify/flash-list';
import {supabase} from '../../../../server/server';
import Anabolic from '../../../components/Anabolic/Anabolic';
import Search from '../../../components/Search/Search';
import * as Animatable from 'react-native-animatable';

const ProductScreen = () => {
  const [fetchError, setFetchError] = useState(null);
  const [anabolics, setAnabolics] = useState(null);


  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const fetchProducts = useCallback(async () => {
    const {data, error} = await supabase
      .from('anabolics')
      .select('*')
      .order('name', {ascending: true});
    if (error) {
      setFetchError(error);
    } else {
      setAnabolics(data);
    }
  }, []);

  const renderItems = ({ item }) => { 
    return (
      <Anabolic key={item.id} anabolics={item} />
    )
  }

  // const renderItems = () => {
  //   return anabolics.map(anabolic => (
        
  //     <Anabolic key={anabolic.id} anabolics={anabolic} />
  //   ));
  // };

  return (
    <View style={styles.container}>
      {/* <Animatable.View
        
        duration={500} 
        useNativeDriver={true}
        animation="fadeInLeft"> */}

      <Search />

      <FlashList
        // add paddingBottom
        contentContainerStyle={{paddingBottom: 100}}
        data={anabolics}
        estimatedItemSize={100}
        renderItem={renderItems}
      />
      {/* </Animatable.View> */}
    </View>
  );
};

export default ProductScreen;
