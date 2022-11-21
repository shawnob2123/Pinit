import {Pressable, Text, View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Button from '../../components/Button/Button';
import {Input} from '@rneui/themed';
import {
  appleAuth,
  AppleButton,
} from '@invertase/react-native-apple-authentication';
import {supabase} from '../../../server/server';
import Loader from '../../components/Loader/Loader';


const SignInScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const signInWithEmail = async () => {
    try {
      setLoading(true);
      const {error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
       
      if (error) {
        setError(error.message);
        setTimeout(() => {
          setError('');
        }, 3000);
      } else {
        navigation.navigate('Cycles');
      }
    } catch (error) {
      setError(error.message);
      setError('');
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back, please log in</Text>
      <View style={{marginTop: 20}}>
        <Input
          placeholder="Email"
          placeholderTextColor={'#fff'}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          inputContainerStyle={{borderBottomWidth: 0}}
          errorMessage={error}
        />
        <Input
          placeholder="Password"
          placeholderTextColor={'#fff'}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={true}
          inputContainerStyle={{borderBottomWidth: 0}}
          errorMessage={error}
        />
        <Pressable>
          <Text style={styles.text}>Forgot password?</Text>
        </Pressable>
        <View style={{paddingHorizontal: 20, marginTop: 60}}>
          {loading ? (
            <Loader
              
              onAnimationFinish={() => setLoading(false)}
            />
          ) : (
            <Button title="Log in" onPress={() => signInWithEmail()} />
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
            onPress={null}
          />
        </View> */}
        <Pressable
          onPress={() => navigation.navigate('SignUp')}
          style={{paddingTop: 70, alignSelf: 'center'}}>
          <Text style={[styles.text, {fontWeight: '200'}]}>
            Don't have an account? Sign up
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignInScreen;
