/* eslint-disable prettier/prettier */
import {Pressable, Text, View, Linking} from 'react-native';
import React, {useState} from 'react';
import { Input, CheckBox } from '@rneui/themed';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { styles } from './styles';
import Button from '../../components/Button/Button';
import {colors} from '../../theme/theme';
import {
  appleAuth,
  AppleButton,
} from '@invertase/react-native-apple-authentication';
import { supabase } from '../../../server/server';
import Loader from '../../components/Loader/Loader';


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
            terms_accepted: checked
          }
        }
      });
      console.log(error);
      if (error.message === 'User already registered') {
        setError('Email already exists');
        setTimeout(() => {
          setError('');
        }, 3000);
      } else if (!name || !email || !password) {
        setError('Please fill out all fields.');
        setTimeout(() => {
          setError('');
        }, 3000);
      } else if (!checked) { 
        setError('Please accept the terms and conditions.');
        setTimeout(() => {
          setError('');
        }, 3000);
  
        
      } else {
        navigation.navigate('Cycles');
      }
    } catch (error) {
      setError(error.message);
    }
  };


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
          autoCorrect={false}
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
          autoCorrect={false}
          style={styles.input}
          inputContainerStyle={{borderBottomWidth: 0}}
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
          <Text style={{ color: 'red', alignSelf: 'flex-start', paddingLeft: 10 }}>
            {error}
          </Text>
        ) : null}
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.text}>Show Password</Text>
        </Pressable>
        <View style={styles.checkboxContainer}>
          <Pressable
            onPress={() => setChecked(!checked)}
          >
            <Fontisto name={!checked ? 'checkbox-passive' : 'checkbox-active'} size={16} color='white' />
          </Pressable>
          <Text style={[styles.checkboxText, {paddingLeft: '5%'}]}>
            By creating an account, you agree to our <Text
              onPress={() => Linking.openURL('https://tinyurl.com/2jh7ur6c')}
              style={[styles.checkboxText, { color: colors.primary }]}>Terms of Service and Privacy Policy</Text>
          </Text>
        </View>
        {/* <CheckBox
          title="By creating an account, you agree to our Terms of Service and Privacy Policy." 
          checked={checked}
          checkedColor={'#fff'}
          onPress={() => setChecked(!checked)}
          containerStyle={styles.checkbox}
          textStyle={styles.checkboxText}
          
        /> */}
       
        <View style={{ paddingHorizontal: 20 }}>
          {loading ? (
          <Loader
              onAnimationFinish={() => setLoading(false)}
              
            />
            
          ) : (
             <Button
            title="Create Account"
            onPress={() => signUpWithEmail()}
              />
          )}
         
        </View>
        {/* <Text style={styles.continue}>Or continue with..</Text>
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
        </View> */}
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
