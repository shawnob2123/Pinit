
import { StatusBar, View, StyleSheet} from 'react-native'
import React, {useState, useEffect, useContext} from 'react';
import {colors} from './src/theme/theme';
import Tabs from './navigation/Tabs';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { AuthStack } from './navigation/AuthStack';
import { supabase } from './server/server';
import FlashMessage from 'react-native-flash-message';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    }
  }
})

const App = () => {
  const [session, setSession] = useState(null);
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, []);


  return (
    
    <View style={styles.app}>
      <NavigationContainer theme={DarkTheme}>
        <StatusBar barStyle="light-content" />
        <QueryClientProvider client={queryClient}>
          {session ? <Tabs /> : <AuthStack />}
        </QueryClientProvider>
        <FlashMessage position="top" />
        </NavigationContainer>
      </View>
   

  )
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.background,
  }
})

export default App