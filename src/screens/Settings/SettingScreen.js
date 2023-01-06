import { View, Text, Linking } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { supabase } from '../../../server/server';
import Button from '../../components/Button/Button';
import Delete from '../../components/Button/Delete';
import Settings from '../../components/Settings/Settings';
import Loader from '../../components/Loader/Loader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const SettingScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const signOut = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Manage Your Settings</Text>
            <Settings
              icon='person-outline'
              screenName='Edit Profile'
              onPress={() => navigation.navigate('Edit Profile')}
            />
            <Settings
              icon='notifications-outline'
              screenName='Reminders'
              onPress={() => navigation.navigate('Reminders')}
            />

            <Settings
              icon='chatbubble-ellipses-outline'
              screenName='Support'
              onPress={() => navigation.navigate('Support')}
            />
            {/* <Settings
              icon='flash-outline'
              screenName='Upgrade'
              onPress={() => navigation.navigate('Upgrade')}
            /> */}
            <Settings
              icon='document-text-outline'
              screenName='Privacy Policy'
              onPress={() => Linking.openURL('https://tinyurl.com/2jh7ur6c')}
            />
          </View>
          <View style={{ paddingTop: 40, paddingHorizontal: 10 }}>
            {loading ? (
              <Loader />
            ) : (
              <Button
                name='exit-outline'
                size={20}
                color='#fff'
                title='Sign out'
                onPress={() => signOut()}
              />
            )}
            <Text
              style={[
                styles.title,
                {
                  color: '#fff',
                  paddingTop: 40,
                  fontSize: 12,
                  fontWeight: '300',
                },
              ]}
            >
              Pinit version 1.0
            </Text>
            <View style={{ paddingTop: 50 }}>
              {/* <Delete
                title='Delete Account'
                
                /> */}
            </View>
          </View>
        </>
      )}
    </KeyboardAwareScrollView>
  );
};

export default SettingScreen;
