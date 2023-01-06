import { StatusBar, View, StyleSheet } from 'react-native';
import React, {  useEffect } from 'react';
import {supabase} from './server/server';
import { colors } from './src/theme/theme';
import Tabs from './navigation/Tabs';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { AuthStack } from './navigation/AuthStack';
import FlashMessage from 'react-native-flash-message';


const App = () => {

  const [session, setSession] = React.useState(null);
  const [user, setUser] = React.useState(null);

  useEffect(() => { 
    const session = supabase.auth.getSession();
    setSession(session);
    setUser(session?.user ?? null);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.unsubscribe();
    };  
  }, []);

  
  return (
   
      <View style={styles.app}>
        <NavigationContainer theme={DarkTheme}>
          <StatusBar barStyle='light-content' />

          {session ? <Tabs /> : <AuthStack />}

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
