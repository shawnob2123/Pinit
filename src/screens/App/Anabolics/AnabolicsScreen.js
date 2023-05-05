import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {styles} from './styles';
import {FlashList} from '@shopify/flash-list';
import {supabase} from '../../../../server/server';
import Anabolic from '../../../components/Anabolic/Anabolic';
import Search from '../../../components/Search/Search';
import * as Animatable from 'react-native-animatable';
import Loader from '../../../components/Loader/Loader';

const ProductScreen = () => {
  const [fetchError, setFetchError] = useState(null);
  // const [anabolics, setAnabolics] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const fetchProducts = useCallback(async () => {
    const {data, error} = await supabase
      .from('compounds')
      .select('*')
      .order('name', {ascending: true});
    if (error) {
      setFetchError(error);
    } else {
      // setAnabolics(data);
      setFilteredDataSource(data);
      setMasterDataSource(data);
      setLoading(false);
    }
  }, []);

  const renderItems = ({item}) => {
    return <Anabolic key={item.id} anabolics={item} />;
  };

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (

    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100}}
      style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
          <Animatable.View
            animation="fadeInUpBig"
            duration={600}
            useNativeDriver={true}
          >
      <Search
        value={search}
        searchFilterFunction={searchFilterFunction}
        onChangeText={text => searchFilterFunction(text)}
        onClear={() => searchFilterFunction('')}
      />
      
      <FlashList
        data={filteredDataSource}
        renderItem={renderItems}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20, height: '100%', width: '100%'}}
        estimatedItemSize={100}
      />
       
      <View style={styles.disclaimerContainer}>
        <Text style={styles.disclaimer}>*Disclaimer*</Text>
        <Text style={styles.disclaimerText}>
          Pinit does not condone the use of anabolic substances. These items are
          listed only for educational purposes. Pinit is not responsible for
          the misuse of these products. Please consult a physician before using
          any of these products.
        </Text>
            </View>
            </Animatable.View>
      )}
    </ScrollView>
  );
};

export default ProductScreen;
