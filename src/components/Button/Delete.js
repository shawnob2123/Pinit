import { View, Text, Pressable, Alert } from 'react-native'
import React, {useState, useEffect} from 'react';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { supabase } from '../../../server/server';
import {showMessage} from 'react-native-flash-message';

const Delete = ({ title, navigation }) => {

   const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
 
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session, user } }) => {
      setSession(session)
      setUser(user);
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
    })
  }, []);
  
  const deleteAccount = async () => { 
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This cannot be undone.',
      [
        {
          text: 'Cancel',
          onPress: null,
          style: 'cancel'
        },
        {
          text: 'Delete', onPress: async () => { 
          try {
            await supabase.auth.api.deleteUser(session.access_token);
            navigation.navigate('SignUp');
          } catch (error) {
            console.log('Error: ', error.message);
          }
          showMessage({
            message: 'Account Deleted',
            description: 'Your account has been deleted.',
            type: 'danger',
            icon: 'danger',
            duration: 5000,
          });
        } }
      ],
      { cancelable: false }
    );
  }
 
  
    

  return (
    <Pressable
      onPress={() => deleteAccount()}

      style={styles.delete}
    >
      <View style={styles.container}>
      <Ionicons name='warning-outline' size={20} color='red' />
        <Text style={styles.text}>{title}</Text>
        </View>
    </Pressable>
  )
}

export default Delete