import { View, Text, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react';
import { styles } from './styles';
import { supabase } from '../../../server/server';
import Button from '../../components/Button/Button';
import Settings from '../../components/Settings/Settings';

const SettingScreen = ({ navigation }) => {
  
  const [loading, setLoading] = useState(false);
  
    const signOut = async () => {
      setLoading(true);
      try {
        await supabase.auth.signOut();
      } catch (error) {
        console.log('Error: ', error.message);
      } finally {
        setLoading(false);
      }
    }
    
  


  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Manage Your Settings</Text>
          <Settings 
            icon='person-outline'
            screenName="Edit Profile"
            onPress={() => navigation.navigate('Edit Profile')}
          />
          <Settings
            icon='information-circle-outline'
            screenName='FAQ'
            onPress={() => navigation.navigate('FAQ')}
          />
          <Settings
            icon='chatbubble-ellipses-outline'
          
            screenName='Support'
            onPress={() => navigation.navigate('Support')}
          />
          <Settings
              icon='flash-outline'
            screenName='Upgrade'
            onPress={() => navigation.navigate('Upgrade')}
          />
        </View>
      <View style={{ paddingTop: 40, paddingHorizontal: 10 }}>
        {loading ? (
          <ActivityIndicator size="large" color="#00a6fb" />
        ) : (
            <Button
              title="Sign out"
              onPress={signOut}
            />
          )}
          <Text style={[styles.title, {color: '#fff', paddingTop: 20, fontSize: 12}]}>Pinit version 1.0</Text>
      </View>
    </View>
  )
}

export default SettingScreen;