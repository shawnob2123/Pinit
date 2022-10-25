import { StatusBar } from 'react-native'
import React, {useState, useEffect} from 'react';

import Tabs from './navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './navigation/AuthStack';

import { supabase } from './server/server';
import {Session} from '@supabase/supabase-js';
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
      </NavigationContainer>
  )
}

export default App