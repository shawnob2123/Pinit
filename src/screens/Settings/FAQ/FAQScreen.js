import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors} from '../../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Divider} from '@rneui/themed';

const FAQScreen = () => {
  const [expanded, setExpanded] = useState(false);

  const data = [
    {
      id: 1,
      question: 'What is Pinit?',
      answer: 'Pinit is a social media app that allows you to share your favorite photos with your friends and family.',
      
    },
    {
      id: 2,
      question: 'How do I create an account?',
      answer: 'To create an account, simply click the "Sign Up" button on the login screen. You will be prompted to enter your email address and password. Once you have entered your information, click the "Sign Up" button. You will then be taken to the home screen.',
     
    },
  ];

  const toggle = id => {
    setExpanded(!expanded);
    data.map(item => {
      if (item.id === id) {
        item.toggle = !item.toggle;
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Frequently Asked Questions</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Pressable onPress={
              () => toggle(item.id)
            }>
              <View style={styles.questionContainer}>
                <Text style={styles.question}>{item.question}</Text>
                <Ionicons
                  name={item.toggle ? 'chevron-down' : 'chevron-forward-sharp'}
                  size={24}
                  color={colors.primary}
                />
                {item.toggle && (
                  <Text style={styles.answer}>{item.answer}</Text>
                  )}
              </View>
              <Divider color="#343434" orientation="horizontal" />
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default FAQScreen;
