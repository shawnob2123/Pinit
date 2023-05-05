import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { colors, fonts, sizes, weights } from '../../theme/theme';
import { useCompoundTypeStore } from '../../store/store';
import FastImage from 'react-native-fast-image';
import { FlashList } from '@shopify/flash-list';

const CompoundType = ({type}) => {
  
    const { selected, items, selectItem } = useCompoundTypeStore();


  const values = [
    {
      id: 1,
      value: 'Capsule',
      image: require('../../../assets/images/capsule.png'),
    },
    {
      id: 2,
      value: 'Pill',
      image: require('../../../assets/images/pills.png'),
    },
    {
      id: 3,
      value: 'Injection',
      image: require('../../../assets/images/syringe.png'),
    },
    {
      id: 4,
      value: 'Cream',
      image: require('../../../assets/images/cream.png'),
    },
  ];

    const handleSelect = (item) => {
    selectItem(item);
    
  };

  

  return (
    <View style={styles.container}>
      <FlashList
        data={values.map((item) => item)}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        height={100}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={75}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              { borderColor: selected?.id === item.id ? colors.primary : colors.background },
            ]}
            onPress={() => {
              handleSelect(item);
            }}
          >
            <FastImage source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.value}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CompoundType;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    width: 80,
    height: 80,
  },
  image: {
    width: 35,
    height: 35,
    alignSelf: 'center',

    resizeMode: 'contain',
  },
  text: {
    fontSize: sizes.sm,
    alignSelf: 'center',
    fontFamily: fonts.primary,
    color: colors.white,
    textAlign: 'center',
    paddingTop: 10,
  },
  pressable: {},
});
