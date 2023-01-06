import { StatusBar, View, StyleSheet } from 'react-native';
import React, {  useEffect } from 'react';
import {supabase} from './server/server';
import { colors } from './src/theme/theme';
import Tabs from './navigation/Tabs';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { AuthStack } from './navigation/AuthStack';
import FlashMessage from 'react-native-flash-message';


const App = () => {

  const [auth, setAuth] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setAuth(supabase.auth.getSession());
    supabase.auth.onAuthStateChange((_event, session) => {
      setAuth(session);
      setLoading(false);
    });
   }, []);

  
  return (
   
      <View style={styles.app}>
        <NavigationContainer theme={DarkTheme}>
          <StatusBar barStyle='light-content' />

          {auth ? <Tabs /> : <AuthStack />}

          <FlashMessage position='top' />
        </NavigationContainer>
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
