import { Pressable, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react';
import { supabase } from '../../../server/server';
import { styles } from './styles';
import { Input } from '@rneui/themed';
import Button from '../../components/Button/Button';

const EditProfileScreen = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getUserProfile()
    
  }, []);

  const getUserProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      // get the users name and email
      console.log(user);
      
    } catch (error) { 
      setError('There was an error fetching your profile')
    }
  }

  const updateProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.update({
        name: setName,
        email: setEmail
      })
    } catch (error) {
      setError('There was an error updating your profile')
    } finally {
      setLoading(false);
    }
  }

  const resetPassword = async () => { 
    try {
      setLoading(true);
      const { error } = await supabase.auth.api.resetPasswordForEmail(email);
      if (error) {
        setError(error.message);
      } else {
        null;
      }
    } catch (error) { 
      setError(error.message);
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
       
        <Text style={styles.title}>Edit Profile</Text>
         {error && <Text style={styles.error}>There was an error retrieving your profile</Text>}
        <Input
          leftIcon={{ type: 'ionicon', name: 'person-outline', color: '#00a6fb', size: 20 }}
          value={name}
          placeholderTextColor={'#fff'}
          onChangeText={setName}
          style={styles.input}
          inputContainerStyle={{borderBottomWidth: 0}}
        />
        <Input
          leftIcon={{ type: 'ionicon', name: 'mail-outline', color: '#00a6fb', size: 20 }}
          value={email}
          placeholderTextColor={'#fff'}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
          inputContainerStyle={{borderBottomWidth: 0}}
        />
        <Pressable
          onPress={resetPassword}
        >
          <Text style={[styles.title, { alignSelf: 'center', fontWeight: '100'}]}>Reset Password</Text>
        </Pressable>

        <Button
          title="Save"
          onPress={() => supabase.auth.signOut()}
        />
      </View>
    
    </View>
  )
}

export default EditProfileScreen;