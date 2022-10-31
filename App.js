import { StatusBar } from 'react-native'
import React, {useState, useEffect} from 'react';

import Tabs from './navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './navigation/AuthStack';

import { supabase } from './server/server';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  
  const [session, setSession] = useState(false);

  useEffect(() => { 
   supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <NavigationContainer>
    <StatusBar barStyle="light-content" />
      {session ? <Tabs /> : <AuthStack />}
      <FlashMessage position="top" />
      </NavigationContainer>
  )
}

export default App