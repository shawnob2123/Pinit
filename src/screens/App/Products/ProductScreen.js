import { View, Text, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { styles } from './styles';
import { FlashList } from '@shopify/flash-list';
import {supabase} from '../../../../server/server';
import ProductCard from '../../../components/Product/Product';
import Search from '../../../components/Search/Search';


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
    return products.map((product) => (
      <ProductCard key={product.id} products={product} />
    ));
  }

  return (
    <View style={styles.container}>
      <Search />
      
      <FlashList
        data={products}
        estimatedItemSize={100}
        renderItem={renderItems}
      />
    </View>
  )
}

export default ProductScreen;