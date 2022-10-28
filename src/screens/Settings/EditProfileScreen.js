import {Pressable, Text, View, ActivityIndicator, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {supabase} from '../../../server/server';
import {styles} from './styles';
import {Input} from '@rneui/themed';
import Button from '../../components/Button/Button';
import {showMessage, hideMessage} from 'react-native-flash-message';

const EditProfileScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    try {
      const {data: profile} = await supabase.auth.getUser();
      setProfile(profile);
      setName(profile.user.user_metadata.name);
      setEmail(profile.user.email);
    } catch (error) {
      setError(error.message);
    }
  };

  const updateProfile = async () => {
    try {
      setLoading(true);
      const {data, error} = await supabase
        .from('profiles')
        .update(
          email,{
            data: {
              name: name,
              updated_at: new Date(),
            }
          }
        )
        .eq('id', profile.user.id);
      if (error) {
        setError(error.message);
      } else {
        showMessage({
          message: 'Your profile has been updated!',
          type: 'success',
          animated: true,
          animationDuration: 500,
          icon: 'success',
        });
      }
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  // CLOSE closeLoader
  const closeLoader = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const resetPassword = async () => {
    try {
      setLoading(true);
      const {error} = await supabase.auth.api.resetPasswordForEmail(email);
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
        {error ? (
          <Text style={styles.error}>Error saving your profile</Text>
        ) : null}
        <Input
          leftIcon={{
            type: 'ionicon',
            name: 'person-outline',
            color: '#00a6fb',
            size: 20,
          }}
          value={name}
          placeholderTextColor={'#fff'} 
          onChangeText={setName}
          style={styles.input}
          inputContainerStyle={{borderBottomWidth: 0}}
        />
        <Input
          leftIcon={{
            type: 'ionicon',
            name: 'mail-outline',
            color: '#00a6fb',
            size: 20,
          }}
          value={email}
          placeholderTextColor={'#fff'}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
          inputContainerStyle={{borderBottomWidth: 0}}
        />
        <Pressable style={{alignSelf: 'center'}} onPress={resetPassword}>
          <Text style={[styles.title, {fontWeight: '100'}]}>
            Reset Password
          </Text>
        </Pressable>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#00a6fb"
            animating={closeLoader()}
          />
        ) : (
          <Button title="Save" onPress={() => updateProfile()} />
        )}
      </View>
    </View>
  );
};

export default EditProfileScreen;
