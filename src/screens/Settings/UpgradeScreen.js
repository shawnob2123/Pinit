import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {supabase} from '../../../server/server';

import Bullets from '../../components/Bullets/Bullets';
import Button from '../../components/Button/Button';

const UpgradeScreen = () => {
  
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100}}
      style={styles.container}>
      
        
          <Image
            style={{ width: 200, height: 150, alignSelf: 'center', marginTop: 20 }} 
            // source={{ uri: 'https://fqcslcdlnyndwhpphzez.supabase.co/storage/v1/object/public/images/upgrade.png'  }} 
          />
        <View style={styles.upgradeContainer}>
          <View style={styles.contentContainer}>
            <Text style={[styles.title, { paddingTop: 20, alignSelf: 'center', fontSize: 30 }]}>Unlock Pinit Premium!</Text>
            <View style={styles.bulletContainer}>
              <Bullets 
                text="Unlimited Cycles"
              />
              <Bullets
                text="Share Cycles With Friends and Coaches"

              />
              <Bullets
                text="Forum Access"
            />
            <Bullets
                text="Premium Support"
            />
            <Bullets
                text="Cancel Anytime"
            />
            </View>

            <View style={{paddingTop: 40, paddingHorizontal: 10}}>
            <Button
              title="$2.99 / mo"
            />
            <Text style={[styles.text, { alignSelf: 'center', paddingVertical: 5 }]}>or</Text>
            <Button
              title="$24.99 / yr (Save 30%)"
            />
            </View>
          <View style={{paddingTop: 50}}>
            <Text style={[styles.title, {color: '#fff'}]}>Subscription Details</Text>
              <Text style={[styles.text, {fontSize: 12}]}>Your subscription renews automatically. It can also be cancelled through your Apple settings under your Apple ID. No refunds once your account has been charged. </Text>
            </View>
            </View>
          </View>
    </ScrollView>
  );
};

export default UpgradeScreen;
