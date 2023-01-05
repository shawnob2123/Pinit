import { StatusBar, View, StyleSheet } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { colors } from './src/theme/theme';
import Tabs from './navigation/Tabs';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { AuthStack } from './navigation/AuthStack';
import { supabase } from './server/server';
import FlashMessage from 'react-native-flash-message';
import { AuthProvider } from './navigation/context/AuthProvider';

const App = () => {

  const { session } = useContext(AuthContext);

  return (
    <View style={styles.app}>
      <AuthProvider>
      <NavigationContainer theme={DarkTheme}>
        <StatusBar barStyle='light-content' />

        {session ? <Tabs /> : <AuthStack />}

        <FlashMessage position='top' />
        </NavigationContainer>
      </AuthProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default App;
