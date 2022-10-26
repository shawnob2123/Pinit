/* eslint-disable prettier/prettier */
import {Pressable, Text, View, ActivityIndicator} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {Input, CheckBox} from '@rneui/themed';
import {styles} from './styles';
import Button from '../../components/Button/Button';
import {
  appleAuth,
  AppleButton,
} from '@invertase/react-native-apple-authentication';
import { supabase } from '../../../server/server';

const SignUpScreen = ({navigation}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const signUpWithEmail = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            name: name,
          }
        }
      });
      if (error.message == 'Database error saving new user') {
        setError('Error creating account. Please try again.');
        setTimeout(() => { 
          setError('');
        } , 3000);
      } else if (!name || !email || !password || !checked) {
        setError('Please fill out all fields.');
        setTimeout(() => { 
          setError('');
        } , 3000);
      } else {
        navigation.navigate('Cycles');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const closeLoader = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your account</Text>
      <Text style={styles.subtitle}>
        Create your free account to start tracking your anabolic cycles.
      </Text>
      <View style={{paddingTop: 30}}>
        <Input
          placeholder="Name"
          placeholderTextColor={'#fff'}
          value={name}
          onChangeText={setName}
          style={styles.input}
          inputContainerStyle={{borderBottomWidth: 0}}
        />
        <Input
          placeholder="Email"
          placeholderTextColor={'#fff'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          inputContainerStyle={{borderBottomWidth: 0}}
          errorMessage={
            error.includes('email') ? 'Please enter a valid email' : null
          }
        />
        <Input
          placeholder="Password"
          placeholderTextColor={'#fff'}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          inputContainerStyle={{borderBottomWidth: 0}}
          secureTextEntry={!showPassword}
          // errorMessage={'Password must be 6 characters'}
        />
     
        {error ? (
          <Text style={{color: 'red', alignSelf: 'flex-start', paddingLeft: 10}}>{error}</Text>
        ) : null}
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.text}>Show Password</Text>
        </Pressable>
        <CheckBox
          title="By creating an account, you agree to our Terms of Service and Privacy Policy"
          checked={checked}
          checkedColor={'#fff'}
          onPress={() => setChecked(!checked)}
          containerStyle={styles.checkbox}
          textStyle={styles.checkboxText}
        />
        <View style={{ paddingHorizontal: 20 }}>
          {loading ? (
           <ActivityIndicator 
              size="large"
              color="#00a6fb"
              animating={closeLoader()}

            />
            
          ) : (
             <Button
            title="Create Account"
            onPress={() => signUpWithEmail()}
              />
          )}
         
        </View>
        <Text style={styles.continue}>Or continue with..</Text>
        <View style={styles.socialButtons}>
          <AppleButton
            buttonStyle={AppleButton.Style.WHITE}
            buttonType={AppleButton.Type.CONTINUE}
            style={{
              width: 280, // You must specify a width
              height: 50, // You must specify a height
            }}
            // onPress={() => onAppleButtonPress()}
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate('SignIn')}
          style={{paddingTop: 20, alignSelf: 'center'}}>
          <Text style={[styles.text, {fontWeight: '200'}]}>
            Already have an account? Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpScreen;
