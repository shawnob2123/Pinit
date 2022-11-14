import {View, Text, ScrollView} from 'react-native';
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
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100}}
      style={styles.container}>
      {/* <Animatable.View
        
        duration={500} 
        useNativeDriver={true}
        animation="fadeInLeft"> */}

      <Search />

      <FlashList
        contentContainerStyle={{paddingBottom: 20}}
        data={anabolics}
        estimatedItemSize={100}
        renderItem={renderItems}
      />
      {/* </Animatable.View> */}
      <View style={styles.disclaimerContainer}>
        <Text style={styles.disclaimer}>*Disclaimer*</Text>
        <Text style={styles.disclaimerText}>
          Pinit does not condone the use of anabolic substances. These items are as listed for educational purposes ONLY. Pinit is not responsible for the misuse of these products. Please consult a physician before using any of these products.
        </Text>
      </View>
   
    </ScrollView>
  );
};

export default ProductScreen;
