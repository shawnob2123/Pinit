import {Pressable, Text, View} from 'react-native';
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
      const { data: profile } = await supabase.auth.getUser();
      setProfile(profile);
      setName((profile.user.user_metadata.name));
      setEmail((profile.user.email));
    } catch (error) { 
      setError(error.message);
    }
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
        {
          error ? (
            <Text style={styles.error}>{error}</Text>
          ) : null

        }
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
        <Pressable onPress={resetPassword}>
          <Text
            style={[styles.title, {alignSelf: 'center', fontWeight: '100'}]}>
            Reset Password
          </Text>
        </Pressable>

        <Button title="Save" onPress={null} />
      </View>
    </View>
  );
};

export default EditProfileScreen;
