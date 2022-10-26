import { Pressable, Text, View, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import {styles} from './styles'
import Button from '../../components/Button/Button';
import { Input } from '@rneui/themed';
import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';
import {supabase} from '../../../server/server';

const SignInScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signInWithEmail = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
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
      <Text style={styles.title}>Welcome back, please log in</Text>
      {/* <Text style={styles.subtitle}>Track your anabolic cycles effortlessly.</Text> */}
      <View style={{marginTop: 20}}>
        <Input
          placeholder="Email"
          placeholderTextColor={'#fff'}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          errorMessage={error}
        />
        <Input
          placeholder="Password"
          placeholderTextColor={'#fff'}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={true}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          errorMessage={error}
        />
        <Pressable>
          <Text style={styles.text}>Forgot password?</Text>
        </Pressable>
        <View style={{ paddingHorizontal: 20, marginTop: 60 }}>
          {loading ? (
            <ActivityIndicator size="large" color="#00a6fb" />
          ) : (
            <Button
              title="Log in"
              onPress={() => signInWithEmail()}
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
            onPress={() => onAppleButtonPress()}
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate('SignUp')}
         style={{paddingTop: 70, alignSelf: 'center'}}
        >
          <Text style={[styles.text, {fontWeight: 'bold'}]}>Don't have an account? Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};



export default SignInScreen;