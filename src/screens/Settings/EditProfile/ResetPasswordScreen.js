import {  Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { Input } from '@rneui/themed';
import Loader from '../../../components/Loader/Loader';
import Button from '../../../components/Button/Button';
import { showMessage } from 'react-native-flash-message';
import { supabase } from '../../../../server/server';


const ResetPasswordScreen = ({}) => {

  
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const resetPassword = async () => { 
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:3000',
      })
      if (data) {
        showMessage({
          message: 'Check your email for the link to reset your password. Please check your spam if the email has not arrived.',
          type: 'success',
          animationDuration: 800,
          icon: 'success',
        })
        setLoading(false);

      } else {
        showMessage({
          message: 'Error sending reset password request',
          type: 'danger',
          animationDuration: 200,
          icon: 'danger',
        })
        setLoading(false);
      }
    } catch (error) { 
      showMessage({
        message: 'Error sending reset password request',
        type: 'danger',
        animationDuration: 200,
        icon: 'danger',
      })
      setLoading(false);
    } 

  }
    
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={[styles.title, {paddingBottom: 20}]}>Reset Password</Text>
        <Input
          placeholder='Enter your email'
          
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />

        {/* <Input
          placeholder='Enter your new password'
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
          style={styles.input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
        <Input
          placeholder='Confirm your new password'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          style={styles.input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        /> */}

        {loading ? (
          <Loader />
        ) : (
            <Button
              title='Confirm'
              onPress={resetPassword}
              
            />
          )}
      </View>
    </View>
  )
}

export default ResetPasswordScreen

