import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Input} from '@rneui/themed';
import Button from '../../components/Button/Button';
import { Freshchat, FreshchatConfig, FreshchatUser, FreshchatMessage } from 'react-native-freshchat-sdk';
import { FRESHCHAT_APP_ID, FRESHCHAT_APP_KEY } from '@env';
import {showMessage} from 'react-native-flash-message';

const SupportScreen = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  let freshchatConfig = new FreshchatConfig(FRESHCHAT_APP_ID, FRESHCHAT_APP_KEY);
  let freshchatUser = new FreshchatUser();
  let freshchatMessage = new FreshchatMessage();
  freshchatConfig.domain = 'msdk.freshchat.com';
  Freshchat.init(freshchatConfig);
 
  freshchatUser.firstName = name;
  freshchatUser.email = email;
  freshchatUser.message = subject;
  Freshchat.setUser(freshchatUser, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('User set successfully');
    }
  });

  const handleSend = () => { 
    setLoading(true);
    Freshchat.showConversations();
    Freshchat.sendMessage(freshchatMessage, (error) => {
      if (!name || !email || !subject) {
        showMessage({
          message: 'Please fill out all fields',
          type: 'danger',
          icon: 'danger',
        });
        setLoading(false);
      } else {
        console.log('Message sent successfully');
        setLoading(false);
        showMessage({
          message: 'Message sent successfully',
          type: 'success',
          duration: 3000,
        });
      }
    });
  }
  
 

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Support</Text>
        <Text style={styles.text}>
          For any questions, comments, concerns, or any other inquires about
          Pinit, please submit a valid form below. Please include your name,
          email and message. We will get back to you via email within 24 hours.
        </Text>
        <View style={{paddingTop: 50}}>
          <Input
            placeholder="Name"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
            style={styles.input}
            inputContainerStyle={{borderBottomWidth: 0}}
          />
          <Input
            placeholder="Email"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            inputContainerStyle={{borderBottomWidth: 0}}
          />
          <Input
            placeholder="Subject"
            value={subject}
            onChangeText={setSubject}
            style={styles.input}
            inputContainerStyle={{borderBottomWidth: 0}}
          />
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#00a6fb"
            animating={
              setTimeout(() => {
                setLoading(false);
              }, 2000)}
          />
        ) : (
          <Button title="Submit" onPress={() => handleSend()} />
        )}
      </View>
    </View>
  );
};

export default SupportScreen;

// support@pinit.freshdesk.com
