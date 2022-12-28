import { Pressable, Text, View, ActivityIndicator, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { supabase } from '../../../server/server';
import { styles } from './styles';
import { Input } from '@rneui/themed';
import Button from '../../components/Button/Button';
import { showMessage } from 'react-native-flash-message';
import Loader from '../../components/Loader/Loader';

const EditProfileScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {
    getUserProfile();
  }, []);


  // GET
  const getUserProfile = async () => {

    try {
      const { data: profile } = await supabase.auth.getUser();
      setName(profile.user.user_metadata.name);
      setEmail(profile.user.email);
    } catch (error) {
      showMessage({
        message: 'Error retrieving profile',
        type: 'danger',
        animationDuration: 200,
        icon: 'danger',

      })
    }
  };
  // UPDATE


  const resetPassword = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.api.resetPasswordForEmail(email);
      if (error) {
        setError(error.message);
      } else {
        showMessage({
          message: 'Password reset email sent.',
          type: 'success',
          duration: 3000,
        });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (

    <View style={styles.container}>


      <View style={styles.contentContainer}>

        <Text style={styles.title}>Edit Profile</Text>
        <Input
          leftIcon={{
            type: 'ionicon',
            name: 'person-outline',
            color: '#00a6fb',
            size: 20,
          }}
          value={name}
          placeholderTextColor={'#fff'}
          onChangeText={text => setName(text)}
          style={styles.input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
        <Input
          leftIcon={{
            type: 'ionicon',
            name: 'mail-outline',
            color: '#00a6fb',
            size: 20,
          }}
          placeholderTextColor={'#fff'}
          onChangeText={text => setEmail(text)}
          value={email || ''}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
        <Pressable style={{ alignSelf: 'center' }} onPress={resetPassword}>
          <Text style={[styles.title, { fontWeight: '100' }]}>
            Reset Password
          </Text>
        </Pressable>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#00a6fb"
            
          />
        ) : (
          <Button title="Save" onPress={() => updateProfile()} />
        )}

      </View>

    </View>


  );
};

export default EditProfileScreen;
