import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Input} from '@rneui/themed';
import Button from '../../components/Button/Button';
import { Freshchat, FreshchatConfig, FreshchatUser, FreshchatMessage } from 'react-native-freshchat-sdk';
import { FRESHCHAT_APP_ID, FRESHCHAT_APP_KEY } from '@env';
import { showMessage } from 'react-native-flash-message';
import Loader from '../../components/Loader/Loader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SupportScreen = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  

  let freshchatConfig = new FreshchatConfig(FRESHCHAT_APP_ID, FRESHCHAT_APP_KEY);
  let freshchatUser = new FreshchatUser();
  let freshchatMessage = new FreshchatMessage();
  freshchatConfig.domain = 'msdk.freshchat.com';
  Freshchat.init(freshchatConfig);
 
  freshchatUser.firstName = name;
  freshchatUser.email = email;

  Freshchat.setUser(freshchatUser, (error) => {
    if (error) {
      null
    } else {
      null;
    }
  });

  const handleSend = () => {
    setLoading(true);
    Freshchat.showConversations();
    Freshchat.sendMessage(freshchatMessage, (error) => {
      if (!name || !email ) {
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
  };


  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100}}
      style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Support</Text>
        <Text style={styles.text}>
          For any questions, comments, concerns, or any other inquires about
          Pinit, please submit a valid form below. Please include your name,
          email. We will get back to you via chat or email us at support@pinitllc.com
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
            placeholder="Message"
            autoCorrect={false}
            style={[styles.input, {height: 100}]}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            value={message}
            onChangeText={setMessage}
            multiline={true}
          />
        </View>
        {loading ? (
          <Loader
            onAnimationFinish={() => {
              setLoading(false);
            }}
          />
        ) : (
            <Button title="Submit" onPress={() => handleSend()} 
            name="rocket" size={20} color="#fff"
          />
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SupportScreen;
