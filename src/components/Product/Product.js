import { View, Text, Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import { Divider } from "@rneui/themed";
import { styles } from './styles'

const ProductCard = ({products}) => {

  return (
    <View style={styles.card}>
      <Image/>
      <Text style={styles.name}>{products.name}</Text>
      <Divider
        color="lightgray"
        orientation="horizontal"
        size={1}
    />
    </View>

  )
}

export default ProductCard;