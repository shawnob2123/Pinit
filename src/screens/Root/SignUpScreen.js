/* eslint-disable prettier/prettier */
import {Pressable, Text, View, Alert} from 'react-native';
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
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) {
        setError(error.message);
      } else {
        navigation.navigate('Cycles');
      }
    } catch (error) { 
      setError(error.message);
    }
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
          errorMessage={error}
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
          errorMessage={error}
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
          errorMessage={error}
        />
    
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
        <View style={{paddingHorizontal: 20}}>
          <Button
            title="Create Account"
            onPress={() => signUpWithEmail()}
          />
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
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
            Already have an account? Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpScreen;
