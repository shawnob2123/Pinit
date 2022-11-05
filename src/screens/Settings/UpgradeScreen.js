import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {supabase} from '../../../server/server';
import Upgrade from '../../components/Upgrade/Upgrade';

const UpgradeScreen = () => {
  
  return (
    <View style={styles.container}>
      
        <View>
          <Image
            style={{ width: 200, height: 150, alignSelf: 'center', marginTop: 20 }} 
            source={{ uri: 'https://fqcslcdlnyndwhpphzez.supabase.co/storage/v1/object/public/images/upgrade.png'  }} 
          />
        <View style={styles.upgradeContainer}>
          <View style={styles.contentContainer}>
            <Text style={[styles.title, { paddingTop: 20, alignSelf: 'center', fontSize: 30 }]}>Unlock Pinit Premium!</Text>
            <Text style={styles.text}>Pinit premium allows you to unlock cool new features like having unlimited cycles and share with coaches.</Text>
            <View style={{paddingTop: 40, paddingHorizontal: 10}}>
              <Upgrade duration="Monthly" price="$2.99/mo" onPress={ () => console.log('Monthly')} />
              <Upgrade duration="Yearly" price="$29.99/yr" />
              <Upgrade duration="Lifetime" price="$99.99" />
            </View>
            </View>
          </View>
        </View>
    </View>
  );
};

export default UpgradeScreen;
