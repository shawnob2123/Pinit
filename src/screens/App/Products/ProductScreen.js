import { View, Text, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { styles } from './styles';
import { FlashList } from '@shopify/flash-list';
import {supabase} from '../../../../server/server';
import ProductCard from '../../../components/Product/Product';

const ProductScreen = () => {


  const [fetchError, setFetchError] = useState(null);
  const [products, setProducts] = useState(null);
  
  useEffect(() => { 
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*');
      if (error) {
        setFetchError(error);
      } else {
        setProducts(data);
      }
    };
    fetchProducts();
  }, []);

  const renderItems = () => { 
    return products.map((product) => {
      return (
        <ProductCard key={product.id} products={product} />
      )
    })
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Pinit</Text>
        <Text>
          Here are a list of known products used in bodybuilding by both men and woman. Each item contains further description of its use, benefits, side effects and much more. 
        </Text>
        <Text style={styles.disclaimer}><Text style={[styles.disclaimer, {fontWeight:'bold'}]}>Disclaimer:</Text> Pinit does not condone the use of anabolic steroids or in the market of selling anabolic steroids. Please consult a doctor before use of such products. </Text>
      </View>
      <FlashList
        data={products}
        estimatedItemSize={100}
        renderItem={renderItems}
      />
    </View>
  )
}

export default ProductScreen;